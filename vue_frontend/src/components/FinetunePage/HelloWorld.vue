<template>
  <div class="container">
    <h2>大模型微调 (Hugging Face PEFT)</h2>

    <!-- 选择微调方法 -->
    <label>选择微调方法:</label>
    <select v-model="params.method">
      <option value="lora">LoRA</option>
    </select>

    <!-- LoRA 参数 -->
    <div v-if="params.method === 'lora'">
      <label>LoRA Rank:</label>
      <input type="number" v-model="params.lora_rank" min="1" />

      <label>LoRA Alpha:</label>
      <input type="number" v-model="params.lora_alpha" min="1" />

      <label>LoRA Dropout:</label>
      <input type="number" v-model="params.lora_dropout" step="0.01" min="0" max="1" />
    </div>

    <!-- 训练参数 -->
    <label>Epochs:</label>
    <input type="number" v-model="params.epochs" min="1" />

    <label>Batch Size:</label>
    <input type="number" v-model="params.batch_size" min="1" />

    <button @click="startTraining">开始微调</button>

    <!-- 训练进度 -->
    <div class="progress">
      <p>状态: {{ progress.status }}</p>
      <p>信息: {{ progress.message }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const params = ref({
      method: "lora",
      lora_rank: 8,
      lora_alpha: 16,
      lora_dropout: 0.1,
      epochs: 3,
      batch_size: 4,
    });

    const progress = ref({ status: "idle", message: "等待训练启动" });

    // 连接 WebSocket 监听训练进度
    onMounted(() => {
      const ws = new WebSocket("ws://localhost:8000/ws");
      ws.onmessage = (event) => {
        progress.value = JSON.parse(event.data);
      };
    });

    // 发送微调请求
    const startTraining = async () => {
      const response = await fetch("http://localhost:8000/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params.value),
      });
      const data = await response.json();
      progress.value.message = data.message;
    };

    return { params, progress, startTraining };
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input, select {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
.progress {
  margin-top: 20px;
  padding: 10px;
  background-color: #f3f3f3;
  border-radius: 5px;
}
</style>


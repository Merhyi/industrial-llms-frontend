<template>
  <div class="input-container">
    <!-- 隐藏的文件输入框 -->
    <input type="file" ref="fileInput" style="display: none;" @change="handleFileUpload" />

    <!-- 输入区域 -->
    <div class="input-area">
      <textarea
        v-model="message"
        class="message-input"
        placeholder="请输入消息"
        @wheel.prevent="scrollContent"
        @keyup.enter="LineOrSend"
        @input="autoResize"
        ref="textarea"
      ></textarea>
    </div>

    <!-- 底部控制栏 -->
    <div class="controls-container">
      <div class="controls-group">
        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn icon :color="Thinking ? 'primary' : null" @click="toggleLongThinking" v-bind="props">
              <v-icon>mdi-brain</v-icon>
            </v-btn>
          </template>
          <span>深度思考：{{ Thinking ? '开' : '关' }}</span>
        </v-tooltip>

        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn icon :color="Internet ? 'primary' : null" @click="searchInternet" v-bind="props">
              <v-icon>mdi-earth</v-icon>
            </v-btn>
          </template>
          <span>联网搜索：{{ Internet ? '开' : '关' }}</span>
        </v-tooltip>

        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn icon @click="triggerFileUpload" v-bind="props">
              <v-icon>mdi-paperclip</v-icon>
            </v-btn>
          </template>
          <span>上传文件</span>
        </v-tooltip>
      </div>

      <div class="controls-group">
        <v-tooltip location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              :color="message ? 'primary' : 'grey'"
              @click="sendMessage"
              class="send-button"
            >
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </template>
          <span>{{ message ? '发送消息' : '请输入内容' }}</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.autoResize();
    });
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      Thinking: false,
      Internet: false,
      message: this.modelValue,
    };
  },
  watch: {
    message(newVal) {
      this.$emit('update:modelValue', newVal);
    },
    modelValue(newVal) {
      this.message = newVal;
      this.$nextTick(() => {
        this.autoResize();
      });},
    
  },
  methods: {
    LineOrSend(event) {
        // 检测是否按下 Shift 和 Enter
        if (event.shiftKey) {
            // 获取当前光标位置
            const cursorPosition = this.getCursorPosition();
            // 插入换行符到光标位置
            this.message = this.message.slice(0, cursorPosition) + '\n' + this.message.slice(cursorPosition);
        } else {
            // 如果只按 Enter，发送消息
            this.sendMessage();
        }
    },
    autoResize() {
      const textarea = this.$refs.textarea;
      if (!textarea) return;
      
      // 重置高度以正确计算内容高度
      textarea.style.height = 'auto';
      
      const maxHeight = window.innerHeight/2;

      // 计算内容需要的实际高度
      const contentHeight = textarea.scrollHeight;
      
      // 应用限制后的高度
      textarea.style.height = `${Math.min(contentHeight, maxHeight)}px`;
    },
    sendMessage() {
      if (this.message.trim() === '') return;
      this.$emit('send', this.message);
      this.message = '';
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.$emit('upload', file);
      }
    },
    searchInternet() {
      this.Internet = !this.Internet;
      this.$emit('search');
    },
    toggleLongThinking() {
      this.Thinking = !this.Thinking;
      this.$emit('toggleLongThinking');
    },
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    scrollContent(event) {
      const textarea = event.target;
      textarea.scrollTop += event.deltaY; // 根据滚轮方向滚动内容
    },
  },
};
</script>
<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 24px;
  margin: 0 auto 12px;
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
}

.controls-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
}

.controls-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* 保持原有 textarea 样式不变 */
.message-input {
  width: 100%;
  min-height: 56px;
  max-height: calc(30vh);
  padding: 16px 20px;
  border-radius: 24px;
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  font-size: 22px;
  line-height: 1.5;
  resize: none;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>
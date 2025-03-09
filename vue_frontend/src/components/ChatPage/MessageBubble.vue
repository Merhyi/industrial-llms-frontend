<template>
    <div class="message-container" @mouseover="showCopyIcon = true" @mouseleave="showCopyIcon = false">
      <img v-if="message.type === 'bot'" class="bot-avatar" src="@/assets/robot.svg" alt="robot avatar">
      <div class="message-bubble" :class="{ 'user-bubble': message.type === 'user', 'bot-bubble': message.type === 'bot' }">
        <div class="message-content">
          {{ message.content }}
        </div>
        <div v-if="message.type === 'bot'" class="bot-actions">
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn icon @click="copyMessage" v-bind="props">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </template>
            <span>复制</span>
          </v-tooltip>
  
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn icon @click="retryMessage" v-bind="props">
                <v-icon>mdi-reload</v-icon>
              </v-btn>
            </template>
            <span>重试</span>
          </v-tooltip>
  
          <v-tooltip location="bottom" >
            <template v-slot:activator="{ props }">
              <v-btn icon :color="good? 'pink' : null" @click="likeMessage" v-bind="props"  >
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </template>
            <span>赞</span>
          </v-tooltip>
  
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn icon :color="bad? 'black' : null" @click="dislikeMessage" v-bind="props">
                <v-icon>mdi-thumb-down</v-icon>
              </v-btn>
            </template>
            <span>踩</span>
          </v-tooltip>
        </div>
  
        <v-tooltip v-if="message.type === 'user' && showCopyIcon" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn icon class="copy-button" @click="copyMessage" v-bind="props">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </template>
          <span>复制</span>
        </v-tooltip>
      </div>
  
      <img v-if="message.type === 'user'" class="user-avatar" src="@/assets/user.png" alt="User Avatar">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      good: false,
      bad: false,
     showCopyIcon: false
      };
    },
    props: {
      message: {
        type: Object,
        required: true
      }
    },
    methods: {
      copyMessage() {
        navigator.clipboard.writeText(this.message.content).then(() => {
          alert('消息已复制');
        }).catch(err => {
          console.error('复制失败', err);
        });
      },
      retryMessage() {
        alert('再试一次');
      },
      likeMessage() {
        if(this.good === true){
            this.good = false;
        };
        if(this.good === false){
            this.good = true;
            this.bad = false;
        };
        
      },
      dislikeMessage() {
        if(this.bad === true){
            this.bad = false;
        };
        if(this.bad === false){
            this.bad = true;
            this.good = false;
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .message-container {
    display: flex;
    align-items: flex-start;
    position: relative; /* 确保悬停事件可以作用于整个容器 */
  }
  
  .message-bubble {
    margin: 8px;
    padding: 12px 16px;
    border-radius: 16px;
    max-width: 70%;
    word-wrap: break-word;
    position: relative;
  }
  
  .user-bubble {
    background-color: #007bff;
    color: white;
    align-self: flex-end;
    margin-left: auto;
  }
  
  .bot-bubble {
    background-color: white;
    color: black;
    align-self: flex-start;
    margin-right: auto;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 8px;
  }
  
  .bot-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }
  
  .bot-actions {
    display: flex;
    gap: 4px; /* 调整按钮间距 */
    margin-top: 8px;
  }
  
  .copy-button:not(:hover){
    position: absolute;
    right: 0; /* 定位到气泡的最右端 */
    bottom: 0; /* 定位到气泡的底部 */
    background-color: white; /* 背景为白色 */
    color: black; /* 图标颜色为黑色 */
    border: 1px solid #ccc; /* 添加边框 */
    border-radius: 4px; /* 添加圆角 */
    padding: 2px; /* 添加内边距 */
    opacity: 100%; /* 不透明 */

  }
  .copy-button:hover{
    position: absolute;
    right: 0; /* 定位到气泡的最右端 */
    bottom: 0; /* 定位到气泡的底部 */
    background-color: white; /* 背景为白色 */
    color: black; /* 图标颜色为黑色 */
    border: 1px solid #ccc; /* 添加边框 */
    border-radius: 4px; /* 添加圆角 */
    padding: 2px; /* 添加内边距 */
    opacity: 100%; /* 不透明 */

  }
  
  .message-content {
    font-size: 22px; /* 调整文字大小为16px */
    line-height: 1.5; /* 可选：调整行间距以提高可读性 */
    white-space: pre-wrap; 
  }

  .v-btn {
    border: none;
    background-color: transparent;
    width: 35px;
    height: 35px;
  }
  </style>
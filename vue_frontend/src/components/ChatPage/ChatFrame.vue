<template>
    <v-app>
      <Title />  <!-- 添加标题栏 -->
      <v-main class="chat-container">
        <!-- 消息列表 -->
        <MessageList :messages="messages" ref="messageList" />
      
        <!-- 输入框区域 -->
        <ChatInput
          v-model="inputMessage"
          @send="sendMessage"
        />
      </v-main>
    </v-app>
  </template>
  
  <script>
  import MessageList from './MessageList.vue';
  import ChatInput from './ChatInput.vue';
  import Title from './Title.vue';  // 导入Title组件
  
  export default {
    components: {
      MessageList,
      ChatInput,
      Title  // 注册Title组件
    },
    // 其余代码保持不变...
    data() {
      return {
        messages: [], // 存储聊天记录
        inputMessage: '' // 输入框内容
      };
    },
    methods: {
      sendMessage() {
        if (this.inputMessage.trim() === '') return;
        // 添加用户消息
        this.messages.push({ type: 'user', content: this.inputMessage });
        this.inputMessage = ''; // 清空输入框
        this.scrollToBottom(); // 滚动到底部
        
        setTimeout(() => {
            this.messages.push({ type: 'bot', content: '机器人回复：' });
            // 机器人回复
            this.scrollToBottom();
        }, 500);
      },
      scrollToBottom() {
        this.$nextTick(() => {
          this.$refs.messageList.scrollToBottom();
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 64px); /* 减去标题栏高度 */
    padding: 16px;
    background-color: #f5f5f5;
  }
  </style>
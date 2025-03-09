<template>
    <div class="message-list" ref="messageList">
      <MessageBubble
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
      />
    </div>
  </template>
  
  <script>
  import MessageBubble from './MessageBubble.vue';
  
  export default {
    components: {
      MessageBubble
    },
    props: {
      messages: {
        type: Array,
        required: true
      }
    },
    methods: {
      scrollToBottom() {
        this.$refs.messageList.scrollTop = this.$refs.messageList.scrollHeight;
      }
    }
  };
  </script>
  
  <style scoped>
  .message-list {
    flex: 1;
    overflow-y: auto;
    padding: 16px 500px 16px 550px;
    background-color: #f5f5f5;
  }
  </style>
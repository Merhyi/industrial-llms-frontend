<template>
    <div class="title-container">
      <div class="header-content">
        <!-- 根据是否处于编辑状态，动态切换标题和输入框 -->
        <h1 v-if="!editing" class="transparent-title" @dblclick="startEditing">{{ title }}</h1>
        <input
          v-else
          v-model="newTitle"
          class="transparent-title-input"
          @keyup.enter="confirmEdit"
          @blur="confirmEdit"
          ref="editInput"
          placeholder="输入新标题"
        />
  
        <!-- 修改按钮样式，使其与标题一致 -->
        <button class="transparent-button" @click.stop="toggleMenu">⋮</button>
        
        <div v-if="showMenu" class="menu-list">
          <div class="menu-item" @click="copyTitle">复制标题</div>
          <div class="menu-item" @click="startEditing">修改标题</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Title',
    data() {
      return {
        title: 'Vue聊天应用',
        showMenu: false,
        editing: false,
        newTitle: ''
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      closeMenu(e) {
        if (!this.$el.contains(e.target)) {
          this.showMenu = false;
        }
      },
      copyTitle() {
        navigator.clipboard.writeText(this.title);
        this.showMenu = false;
      },
      startEditing() {
        this.editing = true;
        this.newTitle = this.title;
        this.$nextTick(() => {
          this.$refs.editInput.focus(); // 确保输入框获取焦点
        });
      },
      confirmEdit() {
        if (this.newTitle.trim()) {
          this.title = this.newTitle.trim();
        }
        this.editing = false;
        this.newTitle = ''; // 清空输入框绑定的数据
      }
    }
  }
  </script>
  
  <style scoped>
  .header-content {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  /* 修改按钮样式，使其与标题一致 */
  .transparent-button {
    color: rgba(255, 255, 255, 0.9); /* 文字颜色 */
    font-size: 1.5rem; /* 字体大小 */
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* 文字阴影 */
    margin: 0;
    padding: 8px 20px;
    background: rgba(0, 0, 0, 0.5); /* 背景颜色 */
    border-radius: 15px; /* 圆角 */
    backdrop-filter: blur(3px); /* 模糊效果 */
    border: none; /* 去掉边框 */
    outline: none; /* 去掉轮廓 */
    cursor: pointer; /* 鼠标样式 */
    transition: background 0.2s; /* 背景过渡效果 */
  }
  
  .transparent-button:hover {
    background: rgba(0, 0, 0, 0.7); /* 鼠标悬停时的背景颜色 */
  }
  
  .menu-list {
    position: absolute;
    right: 0;
    top: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    border-radius: 8px;
    padding: 8px 0;
    min-width: 120px;
    margin-top: 5px;
  }
  
  .menu-item {
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .menu-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .title-container {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  }
  
  .transparent-title {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    margin: 0;
    padding: 8px 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    backdrop-filter: blur(3px);
    cursor: pointer; /* 添加双击编辑的提示 */
  }
  
  /* 编辑状态下的输入框样式 */
  .transparent-title-input {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.5rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    margin: 0;
    padding: 8px 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    backdrop-filter: blur(3px);
    border: none;
    outline: none; /* 去掉输入框的默认边框和轮廓 */
    width: 100%; /* 使输入框宽度与标题一致 */
  }
  </style>
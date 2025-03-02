# industrial-llms-frontend

该前端服务基于 Vue3 搭建，采用 Vuetify 作为 UI 框架。

与前端配套的后端服务的 github 仓库位置：https://github.com/killua4396/industrial-llms-backend

&nbsp;

## Quickstart

使用 git clone 命令将前端服务拉取到当前目录下

```Shell
git clone https://github.com/Merhyi/industrial-llms-frontend.git
```

在部署前端服务之前，请确保系统上已经安装了 Node.js 环境。进入 vue_frontend 文件夹，并使用其配套的 npm 包管理服务安装前端所需的模块

```Shell
cd vue_frontend
npm install
```

确保模块安装完成以后，可使用 npm 将前端映射至端口上

`npm run dev`

&nbsp;

## Development

**注意**：开发者通过上传更新文件时，若涉及到包管理文件 package.json、主脚本文件 main.js、主页面组件 app.vue，以及路由配置文件 index.js 等全局配置文件时，一定要比较仓库中源文件内容和待上传文件内容，以免覆盖造成数据丢失！

前端页面使用的组件中，页面 xxxPage.vue 主要由帧 xxxFrame.vue 和侧边栏 Sidebar.vue 两个组件构成，xxxPage 将被挂载于路由上以供访问。

开发时，仅需要编写 xxxFrame.vue 的内容，在 xxxPage.vue 的 \<templates\> 中加入 \<xxxFrame /\>  和 \<Sidebar /\> 组件即可。


```HTML
<template>
    <v-card class="fill-height">
        <Sidebar />
        <ChatFrame />
    </v-card>
</template>

<script setup>
// 
</script>
```

在对应的路由配置文件 /src/router/index.js 中，加入相应的配置代码。

以部署 ChatPage.vue 组件为例，指定路由后，若前端映射的端口为 3000，则可通过 http://localhost:3000/chat 访问。

```JavaScript
// ...
// 从 components 文件夹中引入对应的 Page 组件
import ChatPage from "@/components/ChatPage.vue"

// ...

const routes = [
    // ...
    
    {
        path: "/chat",
        name: "ChatPage", 
        component: ChatPage,
    },
]
```




<template>
    
        <v-navigation-drawer
            expand-on-hover
            rail
        >
            <v-list nav id="sidebar" v-model:selected="sidebarSelected">
                <v-list-item
                    :prepend-avatar="userAvatarPath"
                    :subtitle="userEmail"
                    :title="userName"
                    value="Account"
                    @click="revealAccountPage"
                ></v-list-item>
          
                <v-divider></v-divider>
  
                <v-list-item prepend-icon="mdi-message-text" title="Chat Service" value="chat" color="primary"></v-list-item>
                <v-list-item prepend-icon="mdi-database" title="Knowledge Base" value="knowbase" color="primary"></v-list-item>
                <v-list-item prepend-icon="mdi-robot" title="Available Agents" value="agents" color="primary"></v-list-item>
                <v-list-item prepend-icon="mdi-tune" title="Fine-tuning" value="finetune" color="primary"></v-list-item>
            </v-list>

            <v-list style="position: fixed; bottom: 0" width="100%">
                <v-list-item prepend-icon="mdi-github" title="Github Repository" value="chat" href="http://www.google.com"></v-list-item>

            </v-list>
        </v-navigation-drawer>

        
    
</template>



<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const sidebarSelected = ref([])

const userName = "Administrator"
const userEmail = "admin@gmail.com"
const userAvatarPath = "https://randomuser.me/api/portraits/women/85.jpg"

function revealAccountPage()
{
    router.push({name: "account"})
    
}





</script>
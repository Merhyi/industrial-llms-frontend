<template>
    
        <v-navigation-drawer
            expand-on-hover
            rail
            color="#FAFAFA"
        >
            <v-list nav id="sidebar" v-model:selected="currentPage">
                <v-list-item
                    :prepend-avatar="userAvatarPath"
                    :subtitle="userEmail"
                    :title="userName"
                    value="Account"
                    @click="revealAccountPage"
                ></v-list-item>
          
                <v-divider></v-divider>
  
                <v-list-item ref="refChatTab" prepend-icon="mdi-message-text" title="Chat Service" value="chat" color="primary" @click="revealChatPage"></v-list-item>
                <v-list-item ref="refKnowbaseTab" prepend-icon="mdi-database" title="Knowledge Base" value="knowbase" color="primary" @click="revealKnowbasePage"></v-list-item>
                <v-list-item ref="refAgentTab" prepend-icon="mdi-robot" title="Available Agents" value="agents" color="primary" @click="revealAgentsPage"></v-list-item>
                <v-list-item ref="refFinetuneTab" prepend-icon="mdi-tune" title="Fine-tuning" value="finetune" color="primary"></v-list-item>
            </v-list>

            <v-list style="position: fixed; bottom: 0" width="100%">
                <v-list-item prepend-icon="mdi-github" title="Github Repository" value="chat" href="http://www.google.com"></v-list-item>

            </v-list>
        </v-navigation-drawer>

        
    
</template>



<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

const userName = "Administrator"
const userEmail = "admin@gmail.com"
const userAvatarPath = "https://randomuser.me/api/portraits/women/85.jpg"

var currentPage = ref([])



const props = defineProps({
    selectedPage: {
        type: String,
        default: "chat"
    }

})

onMounted(() => {
  if (props.selectedPage == "chat")
  {
    const chatBtn = ref("refChatTab")
    currentPage.value = [ "chat" ]
    console.log(currentPage)
  }
  else if (props.selectedPage == "knowbase")
  {
    const knowbaseBtn = ref("refKnowbaseTab")
    currentPage.value = [ "knowbase" ]
    console.log(currentPage)
  }
  else if (props.selectedPage == "agents")
  {
    const agentsBtn = ref("refAgentTab")
    currentPage.value = [ "agents" ]
    console.log(currentPage)
  }
  
})

function revealAccountPage()
{
    router.push(`/account`)
}

function revealKnowbasePage()
{
    router.push(`/knowbase`)
}

function revealChatPage()
{
    router.push(`/chat`)
}

function revealAgentsPage()
{
    router.push(`/agents`)
}



</script>
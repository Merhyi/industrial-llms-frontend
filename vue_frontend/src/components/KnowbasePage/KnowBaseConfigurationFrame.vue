<template>
    <v-card class="fill-height align-center mx-auto ms-8">
        <v-responsive
            class="align-centerfill-height mx-auto align-centerfill-width"
            max-width="1500"
        >

        <v-overlay
            class="align-center justify-center"
            v-model="overlay"
        >
            <KnowBaseOptionCard
                @close-overlay="closeOverlayHandler"
            ></KnowBaseOptionCard>

        </v-overlay>

        <v-card height="100px">
            <v-container class="align-centerfill-width" min-width="1500px">
                <v-row no-gutters>
                    <v-col 
                        cols="1"
                        style="margin-right: -120px; margin-top: 7px"
                    >
                        <v-icon
                            icon="mdi-database-cog"
                            size="50"
                        >
                        </v-icon>
                    </v-col>
                    <v-col cols="3">
                        <v-sheet 
                            class="pa-3 text-center"
                        >
                            <h2 class="text-h4 font-weight-bold" color="#212121">Configuration</h2>
                        </v-sheet>
                    </v-col>
                    <v-col>
                        <v-container class="mt-2">
                            <v-row no-gutters>
                                <v-col cols="1">
                                    <p>Location: </p>
                                </v-col>
                                <v-col 
                                    cols="1"
                                    style="margin-right: -55px"
                                    
                                >
                                    <v-card
                                        @click="returnRootPage"
                                        width="30px"
                                        variant="plain"
                                    >
                                        root
                                    </v-card>
                                </v-col>
                                <v-col 
                                    cols="1"
                                    style="margin-right: -80px"
                                >
                                    <p>/</p>
                                </v-col>
                                <v-col cols="1">
                                    <v-card
                                        min-width="30px"
                                        variant="plain"

                                    >
                                        {{ knowbaseId }}
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>

                </v-row>
            </v-container>
        </v-card>

        <v-card
            height="60px"
        >
            <v-container
                class="align-centerfill-width"
                min-width="1450px"
            >
                <v-row>
                    <v-col 
                        cols="1"
                        style="margin-right: -80px"
                    >
                        <v-icon
                            icon="mdi-file-document"
                            size="30px"
                            color="#5865f2"
                        >

                        </v-icon>
                    </v-col>
                    <v-col cols="3">
                        <v-sheet
                            class="font-weight-medium"
                        >
                            <h2>Documents</h2>
                        </v-sheet>
                    </v-col>

                    <v-spacer></v-spacer>

                    <v-col cols="3" style="margin-top: -5px;">
                        <v-text-field
                            prepend-icon="mdi-magnify"
                            hide-details
                            single-line
                            max-width="320px"
                            density="compact"
                            label="Database Name"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="1" style="margin-right:10px">
                        <v-btn
                            color="#5865f2"
                            
                            prepend-icon="mdi-file-import"
                            
                            minWidth="120px"
                        >
                        Import
                        </v-btn>  
                    </v-col>

                    <v-col cols="1">
                        <v-btn

                            @click="overlay = !overlay"
                            prepend-icon="mdi-cog"
                            minWidth="120px"
                        >
                        Option
                        </v-btn>  
                    </v-col>
                </v-row>
            </v-container>

        </v-card>

        <v-card>
            <v-container
                maxWidth="1480px"
                fluid
                style="margin-left: 20px"
            >
                
                <v-data-table
                    height="550px"
                    :headers="headers"
                    :items="items"
                    style="background-color: #F5F5F5"
                >

                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            class="me-2"
                            size="small"
                            variant="text"
                            @click="editItem(item)"
                            icon="mdi-pencil"
                            style="margin-left: -15px"
                        >
                        </v-btn>
                        <v-btn
                            class="me-2"
                            size="small"
                            variant="text"
                            color="#F44336"
                            @click="deleteItem(item)"
                            icon="mdi-delete"
                        >
                        </v-btn>
                    </template>

                </v-data-table>
            </v-container>
            

        </v-card>
        </v-responsive>
    </v-card>
</template>

<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import KnowBaseOptionCard from './KnowBaseOptionCard.vue'

const route = useRoute()
const router = useRouter()

const knowbaseId = ref("11111")
var overlay = ref(false)

const headers = [
    {title: "Name", value: 'name'}, 
    {title: "Size", value: 'size'},
    {title: "Update Time", value: "udtime"},
    {title: "State", value: "state"},
    {title: 'Actions', key: 'actions', sortable: false },
]

const items = [
    {name: 'Genshin Impact', size: '666.6GB', udtime: '2077-2-31', state: 'Active', itemid: "genshin_impact"}, 
    {name: 'Honkai: Star Rail', size: '777.7GB', udtime: '2077-2-31', state: 'Active', itemid: "honkai_star_rail"},
    {name: 'Zenless Zone Zero', size: '999.9GB', udtime: '2077-2-31', state: 'Active', itemid: "zenless_zone_zero"}
]

function onRowClick()
{
    console.log("Click")
}

const closeOverlayHandler = () => {
  overlay.value = false
}


function returnRootPage()
{
    router.push("/knowbase")
}


const editItem = (item) => {
  alert(`Editing ${item.itemid}`);
  router.push(`${route.fullPath}/edititem/?itemid=${item.itemid}`)
};


const deleteItem = (item) => {
  alert(`Deleting ${item.itemid}`);
};



</script>
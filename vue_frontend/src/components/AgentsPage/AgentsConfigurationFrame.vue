<<<<<<< HEAD
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
            <AgentsOptionCard
                @close-overlay="closeOverlayHandler"
            ></AgentsOptionCard>

        </v-overlay>

        <v-card height="100px">
            <v-container class="align-centerfill-width" min-width="1400px">
                <v-row no-gutters>
                    <v-col 
                        cols="1"
                        style="margin-right: -120px; margin-top: 7px"
                    >
                        <v-icon
                            icon="mdi-application-edit-outline"
                            size="50"
                        >
                        </v-icon>
                    </v-col>
                    <v-col cols="3">
                        <v-sheet 
                            class="pa-3 text-center"
                        >
                            <h2 class="text-h4 font-weight-bold" color="#212121">work report</h2>
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
                                        {{ agents_id }}
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
                            <h2>report data</h2>
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
                            label="Report Name"
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

                            prepend-icon="mdi-cog"
                            minWidth="120px"
                        >
                        More
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
                    height="200px"
                    :headers="headers"
                    :items="items"
                    style="background-color: #F5F5F5"
                >

                    

                </v-data-table>
            </v-container>
        </v-card>
       
        <v-card
            class="mx-auto"
            width="1480"
        >
            <v-card-title class="text-h5 font-weight-regular bg-white-grey">
                     Weekly work report generation
            </v-card-title>

            <v-card-text>
                <div class="text-caption pa-3">Please provide me with a summary of what you will do during the week, including the tasks you have completed, the key results achieved, and your plans and goals for the coming week. I will generate a detailed weekly report for you.</div>

            <v-autocomplete
                v-model="model"
                :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
                :items="states"
                :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
                :readonly="!isEditing"
                prepend-icon="mdi-city"
                persistent-hint
            >
            <template v-slot:append>
                <v-slide-x-reverse-transition mode="out-in">
                <v-icon
                :key="`icon-${isEditing}`"
                :color="isEditing ? 'success' : 'info'"
                :icon="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                @click="isEditing = !isEditing"
                ></v-icon>
                </v-slide-x-reverse-transition>
            </template>
            </v-autocomplete>
            </v-card-text>
        </v-card>

  
       </v-responsive>
    </v-card>
</template>

<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import AgentsOptionCard from './AgentsOptionCard.vue'

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
    {name: 'Sales reports', size: '666.6GB', udtime: '2077-2-31', state: 'Active', itemid: "sales_reports"}, 
    {name: 'Customer Profile', size: '777.7GB', udtime: '2077-2-31', state: 'Active', itemid: "customer_profile"},
    {name: 'Product Literature', size: '999.9GB', udtime: '2077-2-31', state: 'Active', itemid: "product_literature"}
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
    router.push("/agents")
}


const editItem = (item) => {
  alert(`Editing ${item.itemid}`);
  router.push(`${route.fullPath}/edititem/?itemid=${item.itemid}`)
};


const deleteItem = (item) => {
  alert(`Deleting ${item.itemid}`);
};



=======
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
            <AgentsOptionCard
                @close-overlay="closeOverlayHandler"
            ></AgentsOptionCard>

        </v-overlay>

        <v-card height="100px">
            <v-container class="align-centerfill-width" min-width="1400px">
                <v-row no-gutters>
                    <v-col 
                        cols="1"
                        style="margin-right: -120px; margin-top: 7px"
                    >
                        <v-icon
                            icon="mdi-application-edit-outline"
                            size="50"
                        >
                        </v-icon>
                    </v-col>
                    <v-col cols="3">
                        <v-sheet 
                            class="pa-3 text-center"
                        >
                            <h2 class="text-h4 font-weight-bold" color="#212121">work report</h2>
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
                                        {{ agents_id }}
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
                            <h2>report data</h2>
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
                            label="Report Name"
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

                            prepend-icon="mdi-cog"
                            minWidth="120px"
                        >
                        More
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
                    height="200px"
                    :headers="headers"
                    :items="items"
                    style="background-color: #F5F5F5"
                >

                    

                </v-data-table>
            </v-container>
        </v-card>
       
        <v-card
            class="mx-auto"
            width="1480"
        >
            <v-card-title class="text-h5 font-weight-regular bg-white-grey">
                     Weekly work report generation
            </v-card-title>

            <v-card-text>
                <div class="text-caption pa-3">Please provide me with a summary of what you will do during the week, including the tasks you have completed, the key results achieved, and your plans and goals for the coming week. I will generate a detailed weekly report for you.</div>

            <v-autocomplete
                v-model="model"
                :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
                :items="states"
                :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
                :readonly="!isEditing"
                prepend-icon="mdi-city"
                persistent-hint
            >
            <template v-slot:append>
                <v-slide-x-reverse-transition mode="out-in">
                <v-icon
                :key="`icon-${isEditing}`"
                :color="isEditing ? 'success' : 'info'"
                :icon="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                @click="isEditing = !isEditing"
                ></v-icon>
                </v-slide-x-reverse-transition>
            </template>
            </v-autocomplete>
            </v-card-text>
        </v-card>

  
       </v-responsive>
    </v-card>
</template>

<script setup>

import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import AgentsOptionCard from './AgentsOptionCard.vue'

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
    {name: 'Sales reports', size: '666.6GB', udtime: '2077-2-31', state: 'Active', itemid: "sales_reports"}, 
    {name: 'Customer Profile', size: '777.7GB', udtime: '2077-2-31', state: 'Active', itemid: "customer_profile"},
    {name: 'Product Literature', size: '999.9GB', udtime: '2077-2-31', state: 'Active', itemid: "product_literature"}
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
    router.push("/agents")
}


const editItem = (item) => {
  alert(`Editing ${item.itemid}`);
  router.push(`${route.fullPath}/edititem/?itemid=${item.itemid}`)
};


const deleteItem = (item) => {
  alert(`Deleting ${item.itemid}`);
};



>>>>>>> a3c94eb75914e974b7ccc1c6dab513d32b163c3b
</script>
<template>
    <v-card class="fill-height align-center mx-auto ms-8">
        <v-responsive
            class="align-centerfill-height mx-auto align-centerfill-width"
            max-width="1500"
        >

        <v-card height="100px">
            <v-container class="align-centerfill-width" min-width="1500px">
                <v-row no-gutters>
                    <v-col 
                        cols="1"
                        style="margin-right: -140px; margin-top: 7px"
                    >
                        <v-icon
                            icon="mdi-file-document-plus"
                            size="50"
                        >
                        </v-icon>
                    </v-col>
                    <v-col cols="3">
                        <v-sheet 
                            class="pa-3 text-center"
                        >
                            <h2 class="text-h4 font-weight-bold" color="#212121">Upload File</h2>
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
                                        :ripple="false"
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
                                        class="align-center"
                                        variant="plain"
                                        @click="returnKnowbasePage"
                                        :ripple="false"
                                    >
                                        {{ knowbaseId }}
                                    </v-card>
                                </v-col>

                                <v-col 
                                    cols="1"
                                    style="margin-left: -40px"
                                >
                                    <p>/</p>
                                </v-col>

                                <v-col cols="1">
                                    <v-card
                                        min-width="30px"
                                        variant="plain"
                                        style="margin-left: -80px"
                                    >
                                        create_item
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <v-card
            height="700px"
        >
            <v-container class="fill-height" width="1600px" fluid>
            <v-row>

            <v-col cols="9">
            <v-card
                height="700px"

            >
                <v-container>
                    <v-row>
                        <v-col cols="8">
                            <v-file-input
                                width="850px"
                                style="margin-top: 10px"
                                label="File Input..."
                            ></v-file-input>
                        </v-col>
                        <v-col cols="2">
                            <v-btn
                                style="margin-left: 140px; margin-top: 20px"
                                color="green"
                               
                            >
                                Submit
                            </v-btn>
                        </v-col>
                        <v-col cols="2">
                            <v-btn
                                color="red"

                                style="margin-left: 60px; margin-top: 20px"
                            >
                                Cancel
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
                <v-data-table
                    style="background-color: #F5F5F5"
                    height="550px"
                    :headers="headers"
                    :items="items"
                >

                    <template v-slot:item.actions="{ item }">
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-btn
                                        
                                        size="30"
                                        variant="text"
                                        color="#F44336"
                                        @click="deleteItem(item)"
                                        icon="mdi-delete"
                                        style="margin-left: -15px"
                                    >
                                    </v-btn>
                                </v-col>

                            </v-row>
                        </v-container>
                    </template>


                    <template v-slot:item.upload_process="{ item }">
                        <v-container max-width="200px">
                            <v-row>
                                <v-col>
                                    <v-progress-linear
                                        color="green" 
                                        model-value="20"
                                        style="margin-left: -100px"
                                    >

                                    </v-progress-linear>
                                </v-col>

                            </v-row>
                        </v-container>
                    </template>
                </v-data-table>
            </v-card>
            </v-col>

            <v-col cols="3">
            <v-card
                height="700px"
            >
                <v-card
                    height="70px"
                    variant="text"
                >
                    <v-container>
                        <v-row>
                            <v-col cols="2">
                                <v-icon
                                    icon="mdi-text-box-multiple"
                                    size="30"
                                >
                                </v-icon>
                            </v-col>
                            <v-col cols="9">
                                <h2
                                >
                                    Process Options
                                </h2>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
        
        
            </v-card>
            </v-col>

            </v-row>
            </v-container>

        </v-card>


        

        </v-responsive>
    </v-card>
</template>



<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const knowbaseId = ref(route.query.baseid)


const headers = [
    {title: "Name", value: 'name'}, 
    {title: "Size", value: 'size'},
    {title: "Upload Process", key: 'upload_process', sortable: false}, 
    {title: "Action", key: 'actions', sortable: false}, 
]

const items = [
    {name: "Genshin Impact", size: "666.6GB"}
]




function returnRootPage()
{
    router.push("/knowbase")
}

function returnKnowbasePage()
{
    router.push(`/knowbase/configuration?baseid=${route.query.baseid}`)
}

</script>
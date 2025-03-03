<template>
    <v-card
        class="mx-auto rounded-lg"
        min-height="680px"
        min-width="1000px"
    >
        <v-container>
            <v-row no-gutters style="margin-bottom: -30px">
                <v-col col="1">
                    <v-icon
                        icon="mdi-database-cog"
                        color="#5865f2"
                        size="30"
                    ></v-icon>
                </v-col>
                <v-col col="4">
                    <v-sheet
                        height="60px"
                        min-width="450px"
                    >
                        <h2
                            class="font-weight-regular"
                            style="margin-left: -120px"
                        >
                            Knowbase Options
                        </h2>
                    </v-sheet>
                </v-col>

                <v-spacer></v-spacer>

                <v-col col="2">
                    <v-btn
                        density="comfortable"
                        icon="$close"
                        variant="plain"
                        style="margin-left: 130px"
                        @click="closeOverlay"
                    ></v-btn>

                </v-col>
            </v-row>

            <v-row no-gutters>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-container>
                                <v-row no-gutters class="mb-3">
                                    <v-col>
                                        <v-sheet
                                            class="ma-2"
                                        >
                                            Knowbase Name
                                        </v-sheet>

                                        <v-text-field
                                            
                                            hide-details
                                            single-line
                                            density="compact"
                                            label="Knowbase Name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="mb-3">
                                    <v-col>
                                        <v-sheet
                                            class="ma-2"
                                        >
                                            APIBase
                                        </v-sheet>

                                        <v-text-field
                                            
                                            hide-details
                                            single-line
                                            density="compact"
                                            label="http://<llm-apibase>.com:<port>/v1/"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="mb-3">
                                    <v-col>
                                        <v-sheet
                                            class="ma-2"
                                        >
                                            API-Key
                                        </v-sheet>

                                        <v-text-field
                                            
                                            hide-details
                                            single-line
                                            density="compact"
                                            label="http://<llm-apibase>.com:<port>/v1/"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="mb-3">
                                    <v-col>
                                        <v-sheet
                                            class="ma-2"
                                        >
                                            RAG Type
                                        </v-sheet>

                                        <v-select
                                            :items="items"
                                            density="comfortable"
                                            label="RAG Type"
                                        ></v-select>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="mb-3">
                                    <v-col 
                                        cols="8"
                                        style="margin-top: -10px"
                                    >
                                        <v-switch
                                            color="primary"
                                            label="Super COOL Mode!!!"
                                            value="NULL"
                                            hide-details
                                        ></v-switch>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>

                        <v-col>
                            <v-container>
                                <v-row>
                                    <v-col cols="1" style="margin-left: -10px">
                                        <v-icon
                                            icon="mdi-image"
                                            size="30"
                                        >
                                        </v-icon>
                                    </v-col>
                                    <v-col>
                                        <v-sheet>
                                            <h2 
                                                class="font-weight-medium"
                                                >
                                                Preface 
                                            </h2>
                                        </v-sheet>
                                    </v-col> 
                                </v-row>

                                <v-row class="mb-2">
                                    <v-img
                                        height="200px"
                                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                        cover
                                    ></v-img>
                                </v-row>
                                <v-row>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        
                                        color="#5865f2"
                                        prepend-icon="mdi-cloud-upload"
                                    >
                                        Upload Image
                                    </v-btn>
                                </v-row>

                                <v-row>
                                    <v-col cols="1" style="margin-left: -10px">
                                        <v-icon
                                            icon="mdi-text"
                                            size="30"
                                        >
                                        </v-icon>
                                    </v-col>
                                    <v-col>
                                        <v-sheet>
                                            <h2 class="font-weight-medium"> Description </h2>
                                        </v-sheet>
                                    </v-col> 
                                </v-row>

                                <v-row>
                                    <v-textarea
                                        label="Enter Your Description..."
                                        model-value=""
                                        name="input-7-1"
                                        variant="filled"
                                        auto-grow
                                    ></v-textarea>
                                </v-row>

                                <v-row>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="#4CAF50"
                                        @click="overlay = !overlay"
                                    >
                                        Submit
                                    </v-btn>
                                </v-row>
                            </v-container>
                        </v-col>

                    </v-row>

                </v-container>

            

            

                

            </v-row>

        </v-container>

    </v-card>



</template>

<script setup>

import { ref } from 'vue'

const $emit = defineEmits(['close-overlay'])

const items = ref(["Traditional RAG", "GraphRAG"])

function closeOverlay()
{
    console.log("Closing OVERLAY")
    $emit('close-overlay')
}

</script>
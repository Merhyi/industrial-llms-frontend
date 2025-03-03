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
            <CreateKnowBaseCard
                @close-overlay="closeOverlayHandler"
            ></CreateKnowBaseCard>

        </v-overlay>

        <v-card height="100px">
            <v-container class="align-centerfill-width" min-width="1500px">
                <v-row no-gutters>
                    <v-col 
                        cols="1"
                        style="margin-right: -105px; margin-top: 7px"
                    >
                        <v-icon
                            icon="mdi-database"
                            size="50"
                        >
                        </v-icon>
                    </v-col>
                    <v-col cols="3">
                        <v-sheet 
                            class="pa-3 text-center"
                        >
                            <h2 class="text-h4 font-weight-bold" color="#212121">Knowledge Bases</h2>
                        </v-sheet>
                    </v-col>
                    <v-col>
                        <v-sheet class="pa-0" border="0">
                            <v-container max-height="60px">
                                <v-row no-gutters>
                                    <v-col cols="6">
                                        <v-sheet>
                                        </v-sheet>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field
                                            prepend-icon="mdi-magnify"
                                            hide-details
                                            single-line
                                            max-width="320px"
                                            density="compact"
                                            label="Database Name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-btn
                                            color="#5865f2"
                                            @click="overlay = !overlay"
                                        >
                                        Create Knowbase
                                        </v-btn>  
                                    </v-col>
                                </v-row>
                            </v-container>
                            
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        


        <custom-scrollbar :style="{ width: '1500px', height: '700px' }">
            <v-card>
                <v-container class="align-centerfill-width" min-width="1500px">
                    <v-row no-gutters class="mb-7">
                        <v-col>
                            <KnowBaseCard />
                        </v-col>

                        <v-col>
                            <KnowBaseCard />
                        </v-col>

                        <v-col>
                            <KnowBaseCard />
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mb-5">
                        <v-col>
                            <KnowBaseCard />
                        </v-col>

                        <v-col>
                            <KnowBaseCard />
                        </v-col>

                        <v-col>
                            <KnowBaseCard />
                        </v-col>
                    </v-row>

                    <v-row no-gutters>
                        <v-col>
                            <KnowBaseCard />
                        </v-col>

                        <v-col>
                            <KnowBaseCard />
                        </v-col>

                        <v-col>
                            <KnowBaseCard />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </custom-scrollbar>


    
        </v-responsive>
    </v-card>
</template>


<script setup>

import { ref } from 'vue'

import KnowBaseCard from './KnowBaseCard.vue';
import CreateKnowBaseCard from './CreateKnowBaseCard.vue';

var overlay = ref(false)

const settings = {
    suppressScrollY: false,
    suppressScrollX: false,
    wheelPropagation: false
}


const closeOverlayHandler = () => {
  overlay.value = false
}

</script>

<style>
.scrollbar__thumbPlaceholder--vertical {
    width: 0px;
}
</style>
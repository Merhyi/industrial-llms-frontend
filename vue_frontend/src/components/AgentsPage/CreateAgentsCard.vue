<<<<<<< HEAD
<template>
    <v-card
        class="mx-auto rounded-lg"
        min-height="230px"
        min-width="600px"
    >
        <v-container>
            <v-row no-gutters>
                <v-col col="1">
                    <v-icon
                        icon="mdi-database-plus"
                        color="#5865f2"
                        size="30"
                    ></v-icon>
                </v-col>
                <v-col col="3">
                    <v-sheet
                        height="60px"
                        min-width="450px"
                    >
                        <h2
                            class="font-weight-regular mx-auto"
                            
                        >
                            Create Agent
                        </h2>
                    </v-sheet>
                </v-col>

                <v-spacer></v-spacer>

                <v-col col="2">
                    <v-btn
                        density="comfortable"
                        icon="$close"
                        variant="plain"
                        @click="closeOverlay"
                    ></v-btn>

                </v-col>
            </v-row>



            <v-row no-gutters class="mb-3">
                <v-col>
                    <v-sheet
                        class="ma-2"
                    >
                        Agent Name
                    </v-sheet>

                    <v-text-field
                        
                        hide-details
                        single-line
                        density="compact"
                        label="Agent Name"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row no-gutters class="mb-3">
                <v-col>
                    <v-sheet
                        class="ma-2"
                    >
                        Set a description
                    </v-sheet>

                    <v-text-field
                        
                        hide-details
                        single-line
                        density="compact"
                        label="Example: You're good at summarizing your work"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row no-gutters class="mb-3">
                <v-col 
                    cols="8"
                    style="margin-top: -10px"
                >
                    <v-switch
                        color="primary"
                        label="public"
                        value="NULL"
                        hide-details
                    ></v-switch>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="2">
                    <v-btn
                        color="#5865f2"
                        @click="overlay = !overlay"
                    >
                    Submit
                    </v-btn>
                </v-col>
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

=======
<template>
    <v-card
        class="mx-auto rounded-lg"
        min-height="230px"
        min-width="600px"
    >
        <v-container>
            <v-row no-gutters>
                <v-col col="1">
                    <v-icon
                        icon="mdi-database-plus"
                        color="#5865f2"
                        size="30"
                    ></v-icon>
                </v-col>
                <v-col col="3">
                    <v-sheet
                        height="60px"
                        min-width="450px"
                    >
                        <h2
                            class="font-weight-regular mx-auto"
                            
                        >
                            Create Agent
                        </h2>
                    </v-sheet>
                </v-col>

                <v-spacer></v-spacer>

                <v-col col="2">
                    <v-btn
                        density="comfortable"
                        icon="$close"
                        variant="plain"
                        @click="closeOverlay"
                    ></v-btn>

                </v-col>
            </v-row>



            <v-row no-gutters class="mb-3">
                <v-col>
                    <v-sheet
                        class="ma-2"
                    >
                        Agent Name
                    </v-sheet>

                    <v-text-field
                        
                        hide-details
                        single-line
                        density="compact"
                        label="Agent Name"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row no-gutters class="mb-3">
                <v-col>
                    <v-sheet
                        class="ma-2"
                    >
                        Set a description
                    </v-sheet>

                    <v-text-field
                        
                        hide-details
                        single-line
                        density="compact"
                        label="Example: You're good at summarizing your work"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row no-gutters class="mb-3">
                <v-col 
                    cols="8"
                    style="margin-top: -10px"
                >
                    <v-switch
                        color="primary"
                        label="public"
                        value="NULL"
                        hide-details
                    ></v-switch>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="2">
                    <v-btn
                        color="#5865f2"
                        @click="overlay = !overlay"
                    >
                    Submit
                    </v-btn>
                </v-col>
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

>>>>>>> a3c94eb75914e974b7ccc1c6dab513d32b163c3b
</script>
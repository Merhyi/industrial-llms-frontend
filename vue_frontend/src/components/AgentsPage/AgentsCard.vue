<<<<<<< HEAD
<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card
            class="mx-auto"
            max-width="400px"
            href=""
            v-bind="props"
        >
            <v-img
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
            ></v-img>
                                    
            <v-card-title>
                {{ agents_name }}
            </v-card-title>

            <v-card-subtitle>
                {{ agents_description }}
            </v-card-subtitle>

            <v-card-actions>


                <v-sheet class="ma-2">
                    {{ agents_tags }}
                </v-sheet>

                <v-spacer></v-spacer>
                
            </v-card-actions>

            <v-overlay
                :model-value="!!isHovering"
                class="align-center justify-center"
                contained
            >
                <v-container>
                    <v-row no-gutters class="ma-3">
                        <v-btn 
                            variant="flat"
                            prepend-icon="mdi-database-cog"
                            width="180px"
                            @click="revealAgentsOptionPage"
                        >
                            Modify
                        </v-btn>
                    </v-row>

                    <v-row no-gutters class="ma-3">
                        <v-btn 
                            variant="flat"
                            prepend-icon="mdi-export-variant"
                            width="180px"
                        >
                            Add
                        </v-btn>
                    </v-row>

                    <v-row no-gutters class="ma-3">
                        <v-btn 
                            variant="flat"
                            prepend-icon="mdi-database-remove"
                            color="red"
                            width="180px"
                        >
                            Remove
                        </v-btn>
                    </v-row>
                </v-container>

            
            </v-overlay>
        </v-card>
    </v-hover>


</template>



<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    agents_id: 
    {
        type: String,
        default: "11111"
    },

    agents_name:
    {
        type: String,
        default: "agent_name"
    },

    agents_description:
    {
        type: String,
        default: "description"
    }, 

    agents_tags:
    {
        type: String, 
        default: "tag"
    }
})

function revealAgentsOptionPage()
{
    router.push(`/agents/configuration/?baseid=${props.agents_id}`)
}

=======
<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card
            class="mx-auto"
            max-width="400px"
            href=""
            v-bind="props"
        >
            <v-img
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
            ></v-img>
                                    
            <v-card-title>
                {{ agents_name }}
            </v-card-title>

            <v-card-subtitle>
                {{ agents_description }}
            </v-card-subtitle>

            <v-card-actions>


                <v-sheet class="ma-2">
                    {{ agents_tags }}
                </v-sheet>

                <v-spacer></v-spacer>
                
            </v-card-actions>

            <v-overlay
                :model-value="!!isHovering"
                class="align-center justify-center"
                contained
            >
                <v-container>
                    <v-row no-gutters class="ma-3">
                        <v-btn 
                            variant="flat"
                            prepend-icon="mdi-database-cog"
                            width="180px"
                            @click="revealAgentsOptionPage"
                        >
                            Modify
                        </v-btn>
                    </v-row>

                    <v-row no-gutters class="ma-3">
                        <v-btn 
                            variant="flat"
                            prepend-icon="mdi-export-variant"
                            width="180px"
                        >
                            Add
                        </v-btn>
                    </v-row>

                    <v-row no-gutters class="ma-3">
                        <v-btn 
                            variant="flat"
                            prepend-icon="mdi-database-remove"
                            color="red"
                            width="180px"
                        >
                            Remove
                        </v-btn>
                    </v-row>
                </v-container>

            
            </v-overlay>
        </v-card>
    </v-hover>


</template>



<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    agents_id: 
    {
        type: String,
        default: "11111"
    },

    agents_name:
    {
        type: String,
        default: "agent_name"
    },

    agents_description:
    {
        type: String,
        default: "description"
    }, 

    agents_tags:
    {
        type: String, 
        default: "tag"
    }
})

function revealAgentsOptionPage()
{
    router.push(`/agents/configuration/?baseid=${props.agents_id}`)
}

>>>>>>> a3c94eb75914e974b7ccc1c6dab513d32b163c3b
</script>
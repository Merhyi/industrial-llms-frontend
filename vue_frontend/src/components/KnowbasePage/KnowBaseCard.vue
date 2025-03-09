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
                {{ knowbase_name }}
            </v-card-title>

            <v-card-subtitle>
                {{ knowbase_description }}
            </v-card-subtitle>

            <v-card-actions>


                <v-sheet class="ma-2">
                    {{ knowbase_tags }}
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
                            @click="revealKnowbaseOptionPage"
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
                            Export
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
    knowbase_id: 
    {
        type: String,
        default: "11111"
    },

    knowbase_name:
    {
        type: String,
        default: "Default Basename"
    },

    knowbase_description:
    {
        type: String,
        default: "Default Description"
    }, 

    knowbase_tags:
    {
        type: String, 
        default: "Default Tags"
    }
})

function revealKnowbaseOptionPage()
{
    router.push(`/knowbase/configuration/?baseid=${props.knowbase_id}`)
}

</script>
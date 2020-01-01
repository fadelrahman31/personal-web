<template>
    <v-container fluid fill-height>
        <v-layout justify-center align-center column pa-5>
            <v-container fluid>
                <v-row>
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-card
                             class="mx-auto"
                             dark
                             color="#61779c"
                             
                        >
                            <v-img
                                class="white--text align-end"
                                max-width="650px"
                                src="https://docs.google.com/uc?export=download&id=1uZL1Dc27cHEcNuQYecQosY2XpoNRzpKF"
                            >
                            </v-img>
                            <v-card-text class="text--primary">     
                                <div class="titel"><h2>Hi!</h2></div>
                                </v-card-text>
                        </v-card>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col
                        cols="12"
                        md="5"
                        class="flex-grow-1 flex-shrink-0"
                    >
                        <div class="titel">
                            <h3 class="text-left">My name is</h3>
                            <h1 class="text-left font-weight-bold">Fadel Nararia Rahman</h1>    
                        </div>
                        <v-spacer></v-spacer>
                        <div class="abstract">
                            <v-card
                                class="mx-auto ma-3 pa-2"
                                color="#bbc4d4"
                            >
                                I'm 19 years old, currently learning at Institut Teknologi Bandung. Majoring in Engineering, Information System and Technology Programme. Having a lot of interests in technology specifically the development of IT projects~management, business, and stuffs. Nice to meet you! 
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            
            <v-container fluid>
                <v-row>
                    <v-col>

                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>

                    </v-col>
                </v-row>
            </v-container>
        </v-layout>
    </v-container>
</template>

<style>
    .titel{
        color: white;
    }
    .abstract{
        font-style: italic;
        font-family: 'Nunito', sans-serif; 
    }
</style>

<script>
export default {
    name: 'HomePage',
    
}
</script>
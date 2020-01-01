<template>
    <v-container fluid fill-height>
        <v-layout justify-center align-center column pa-5>
            <v-card
                class="mx-auto ma-3 pa-2"
                color="#1f2647"
            >
            <v-container fluid>
                <v-row>
                    <v-col
                        cols="12"
                        md="5"
                    >
                        <v-card
                             class="mx-auto"
                             dark
                             color="#23394f"
                             tile
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
                        md="7"
                        class="flex-grow-1 flex-shrink-0"
                    >
                        <div class="titel">
                            <h3 class="text-left" id="khusus">Welcome! My name is</h3>
                            <h1 class="text-left font-weight-bold">Fadel Nararia Rahman</h1>   
                            <br>
                        </div>
                        <div class="abstract">
                            <v-card
                                class="mx-auto ma-3 pa-5"
                                color="#bbc4d4"
                            >
                                I'm 19 years old, currently learning at <b>Institut Teknologi Bandung</b>. Majoring in Engineering, <b>Information System and Technology</b> Programme. Having a lot of interests in technology specifically in the development of IT projects~management, business, and stuffs. <b>Nice to meet you! </b>
                            </v-card>
                        </div>
                        <v-card
                            class="mx-auto ma-3 pa-3"
                            color="#1f2647"
                            flat
                        >
                            <v-btn fab dark color="red" class="ma-2 justify-center" @click= "goToIG">
                                <v-icon dark>mdi-instagram</v-icon>
                            </v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            </v-card>
            <v-container fluid>
                <v-row>
                    <v-col
                        cols="12"
                        md="5"
                    >
                    <v-card
                        class="mx-auto ma-3 pa-2"
                        dark
                        color="#1f2647"
                    >
                        <div class="links ma-3 pa-0">
                            <h3>Also checkout my projects, story, and LinkedIn account from button below!</h3>
                        </div>
                        <v-card
                            class="mx-auto ma-3 pa-3"
                            color="#1f2647"
                            max-width="255px"
                            flat
                        >
                            <v-btn fab dark color="purple" class="ma-2 justify-center" @click= "goToGit">
                                <v-icon dark>mdi-github-circle</v-icon>
                            </v-btn>
                            <v-btn fab dark color="blue" class="ma-2 justify-center" @click= "goToLinkedin">
                                <v-icon dark>mdi-linkedin</v-icon>
                            </v-btn>
                            <v-btn fab dark color="black" class="ma-2 justify-center" @click= "goToMedium">
                                <v-icon dark>mdi-medium</v-icon>
                            </v-btn>
                            <br>
                        </v-card>
                    </v-card>  
                        <v-card
                            class="mx-auto ma-3 pa-2"
                            dark
                            color="#1f2647"
                        >
                            <div class="links ma-3 pa-0">
                                <h2>My Education Journey</h2>
                            </div>
                            <v-container fluid id="id2">
                                <v-row
                                    v-for= "(item,i) in educationList"
                                    :key= "i"
                                    justify="space-between"
                                    style= "flex-grow-1 flex-shrink-0"
                                >
                                    <v-col
                                        cols="12"
                                        style= "flex-grow-1 flex-shrink-0"
                                    >
                                        <v-card
                                            class="mx-auto ma-1 pa-0"
                                            raised
                                            tile
                                            color="#23394f"
                                        >
                                            <div class="d-flex flex-no-wrap justify-space-between">
                                                <div>
                                                    <v-card-title
                                                        class="headline font-weight-bold"
                                                        v-text= "item.nama"
                                                    ></v-card-title>
                                                    <v-card-subtitle
                                                        class="font-weight-medium"
                                                        v-text= "item.program"
                                                    ></v-card-subtitle>
                                                    <v-card-subtitle
                                                        class="font-weight-medium"
                                                        v-text= "item.tahun"
                                                    ></v-card-subtitle>
                                                </div>  
                                            </div>
                                        </v-card>
                                    </v-col>
                                </v-row>    
                            </v-container>            
                        </v-card>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col
                        cols= "12"
                        md= "7"
                    >
                        <v-card
                            class="mx-auto ma-3 pa-2"
                            dark
                            color="#1f2647"
                        >
                            <div class="links ma-3 pa-0">
                                <h2>Experiences</h2>
                            </div>

                            <v-container fluid>
                                <v-row
                                    v-for= "(point, i) in experienceList"
                                    :key= "i"
                                    justify="space-between"
                                    style= "flex-grow-1 flex-shrink-0"
                                >
                                    <v-col
                                        cols="12"
                                        style= "flex-grow-1 flex-shrink-0"
                                    >
                                        <v-card
                                            class="mx-auto ma-1 pa-0"
                                            raised
                                            tile
                                            color="#23394f"
                                        >
                                            <v-img
                                                :src= "point.gambar"
                                                max-height= "350px"
                                            ></v-img>
                                            <v-card-title
                                                v-text= "point.nama"
                                            ></v-card-title>
                                            <v-card-subtitle
                                                v-text= "point.org"
                                            ></v-card-subtitle>
                                            <v-card-text
                                                v-text= "point.waktu"
                                            ></v-card-text>

                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>
    </v-container>
</template>

<style>
    .titel{
        color: white;
        text-align: left;
    }
    .abstract{
        font-family: 'Nunito', sans-serif; 
    }
    .links{
        color: white;
        font-family: 'Nunito', sans-serif; 
    }
    #khusus{
        font-family: 'Nunito', sans-serif; 
    }
    #id2{
        font-family: 'Nunito', sans-serif; 
    }
</style>

<script>
export default {
    name: 'HomePage',
    data(){
        return{
            educationList: [
            {
                nama: "Institut Teknologi Bandung",
                tahun: "2017 - now",
                program: "Bachelor of Engineering, Information System and Technology",
                gambar: "https://docs.google.com/uc?export=download&id=1sUn2G0TbF32RvFl_ZEfyLCz8_9GYdok5"
            },{
                nama: "SMA Negeri 3 Bandung",
                tahun: "2016 - 2017",
                program: "Acceleration Program, Natural Sciences",
                gambar: "https://docs.google.com/uc?export=download&id=1kla_96ooTylKixBmEquIf4SV1hc3edbs"
            },{
                nama: "SMA Negeri 3 Malang",
                tahun: "2015 - 2016",
                program: "Acceleration Program, Natural Sciences",
                gambar: "https://docs.google.com/uc?export=download&id=1-T1A0lvmlaUG-Ky5pIpGGxkrRNsHwHyu"
            },{
                nama: "SMP Negeri 3 Malang",
                tahun: "2013 - 2015",
                program: "Acceleration Program",
                gambar: "https://docs.google.com/uc?export=download&id=19N4VTLOmvEKLXgtxrglPAMflqTkoSxQ9"
            }
            ],
            experienceList: [
                {
                    nama: "Non Technical Manager",
                    org: "Rakata Team ITB",
                    waktu: "January 2020 - now",
                    gambar: "https://docs.google.com/uc?export=download&id=1qbv6e84w6iWd2Mi3WqxCbv7Lgst5nJSp"
                },{
                    nama: "Head of Finance and Sponsorship Division",
                    org: "Rakata Team ITB",
                    waktu: "March 2019 - December 2019",
                    gambar: "https://docs.google.com/uc?export=download&id=1lNTy1LVhPnSpbwKIK5VxzdPpkdwypziL"
                },{
                    nama: "Staff of Sponsorship Division",
                    org: "Rakata Team ITB",
                    waktu: "March 2018 - February 2018",
                    gambar: "https://docs.google.com/uc?export=download&id=1NliCs8BM8ckoyHsC-VriV4GLvhvQOFjA"
                },{
                    nama: "Product Analyst Intern",
                    org: "Ruangguru",
                    waktu: "May 2019 - July 2019",
                    gambar: "https://docs.google.com/uc?export=download&id=1qEUljU38FmxcEzYgr1LAaEDAmYssnbAB"
                },{
                    nama: "XL Future Leaders Batch 7 Awardee",
                    org: "XL Axiata",
                    waktu: "October 2018 - now",
                    gambar: "https://docs.google.com/uc?export=download&id=1y_GMoO346vSXNcdoTmLWVIwv6-nGrlwa"
                },
            ]
        }
    },
    methods: {
        goToGit() {
            window.open("https://github.com/fadelrahman31")
        },
        goToLinkedin() {
            window.open("https://www.linkedin.com/in/fadelrahman31/")
        },
        goToMedium() {
            window.open("https://medium.com/@fadelnarariarahman31")
        },
        goToIG(){
            window.open("https://www.instagram.com/fadelrahman31/")
        }
    }
    
}
</script>
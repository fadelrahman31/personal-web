<template>
    <v-container fluid fill-height>
        <v-layout justify-center align-center column pa-5>
            <v-card
                class="mx-auto ma-3 pa-2"
                color="#1f2647"
            >
            <v-parallax
                dark
                src="/home.jpg"
            >
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col class="text-center" cols="12">
                        <h1 class="display-1 font-weight-thin mb-4">Welcome_</h1>
                        <h2 class="display-2 font-weight-thin mb-4">I'm <b>Fadel Nararia Rahman</b></h2>
                        <h4 class="font-weight-thin">print("Hello, world!");</h4>
                    </v-col>
                </v-row>
            </v-parallax>

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
                                src="https://i.ibb.co/wLPWWzq/welcome.jpg"
                            >
                            </v-img>
                            <v-card-actions>
                                <v-btn icon @click="show = !show">
                                   <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down'}}</v-icon> Personal Resume
                                </v-btn>
                            </v-card-actions>
                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>
                                    <v-card-text>
                                        Here is the link to view my personal professional resume!
                                    </v-card-text>
                                    <v-btn class="ma-3 pa-2" href="/resume" text>Click here</v-btn>
                                </div>
                            </v-expand-transition>

                        </v-card>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col
                        cols="12"
                        md="7"
                        class="flex-grow-1 flex-shrink-0"
                    >
                        
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
                            <v-btn dark color="red" class="ma-2 justify-center" @click="goToIG" text>
                                <v-icon dark>mdi-instagram</v-icon> <b> Instagram </b>
                            </v-btn>
                            <v-btn dark color="blue" class="ma-2 justify-center" @click="goToTwitter" text>
                                <v-icon dark>mdi-twitter</v-icon> <b> Twitter </b>
                            </v-btn>
                            <v-btn light color="green" class="ma-2 justify-center" @click="goToSpotify" text>
                                <v-icon dark>mdi-spotify</v-icon> <b> Spotify </b>
                            </v-btn>

                            <v-dialog v-model="dialog" persistent max-width="600px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        class = "ma-2 justify-center"
                                        color="blue"
                                        light
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        <v-icon dark>mdi-email</v-icon> Send Me an Email!
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Hi, You could send me a message here!</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" >
                                                    <v-text-field 
                                                        v-model = "name"
                                                        :rules= "rulesName"
                                                        label="Your name*" 
                                                        required
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field
                                                        v-model = "email" 
                                                        :rules = "rulesEmail"
                                                        label="Your email*" 
                                                        required
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field 
                                                        v-model = "subject"
                                                        :rules = "rulesSubject"
                                                        label="Subject*" 
                                                        required
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field 
                                                        v-model = "message"
                                                        label="Message*"
                                                        :counter = "500" 
                                                        required
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <small>*indicates required field</small>
                                    </v-card-text>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                        <v-btn color="green" dark  @click="dialog = false">Send</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
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
                            max-width="405px"
                            flat
                        >
                            <v-btn dark color = "purple" class="ma-1 justify-center" @click="goToGit" text>
                                <v-icon left>mdi-github</v-icon> <b> Github </b>
                            </v-btn>
                            <v-btn dark color = "blue" class="ma-1 justify-center" @click="goToLinkedin" text>
                                <v-icon left>mdi-linkedin</v-icon> <b> Linkedin </b>
                            </v-btn>
                            <v-btn dark color = "white" class="ma-1 justify-center" @click="goToMedium" text>
                               <b> Medium </b>
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
                    gambar: "https://i.ibb.co/dP3s7P7/IMG-5892-01-min.jpg"
                },{
                    nama: "Head of Finance and Sponsorship Division",
                    org: "Rakata Team ITB",
                    waktu: "March 2019 - December 2019",
                    gambar: "https://i.ibb.co/9qGB2nt/IMG-20190626-093853-min.jpg"
                },{
                    nama: "Product Analyst Intern",
                    org: "Ruangguru",
                    waktu: "May 2019 - July 2019",
                    gambar: "https://i.ibb.co/9nnB8fd/IMG-20190719-134847-01-min.jpg"
                },{
                    nama: "XL Future Leaders Batch 7 Awardee",
                    org: "XL Axiata",
                    waktu: "October 2018 - now",
                    gambar: "https://i.ibb.co/NFnBcqN/IMG-20181125-WA0061.jpg"
                },
            ],
            show: false,
            dialog: false,
            name: "",
            rulesName: [
                v => !!v || 'Your name is required',
            ],
            email: "",
            rulesEmail: [
                v => !!v || 'Valid email is required',
                v => /.+@.+\..+/.test(v) || 'Email must be valid'
            ],
            subject: "",
            rulesSubject: [
                v => !!v || 'Please fill in the email subject',
            ],
            message: ""
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
        },
        goToTwitter(){
            window.open("https://twitter.com/FadelRahman31")
        },
        goToSpotify(){
            window.open("https://open.spotify.com/user/vvkvygk8rbhe42hlykcubsrmt?si=B-5Vx5ipS-qsgagDzbBhgw")
        }
    }
    
}
</script>
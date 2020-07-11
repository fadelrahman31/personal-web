<template>
    <v-app class="projects" :style="style1">
        <app-navigation></app-navigation>
        <br><br><br><br>
        <v-card
            class="mx-auto ma-8 pa-2"
            color="#1f2647"
            dark
            id="id1"
            width= "650px"
        >
            <div class="links ma-3 pa-0">
                <h2>IT Projects</h2>
                <p>For the complete project repository, you could access to my GitHub repository at welcome page!</p>
            </div>

            <v-container fluid>
                <v-row
                    v-for= "(point, i) in projectList"
                    :key= "i"
                    justify="space-between"
                    style= "flex-grow-1 flex-shrink-0"
                    id="id1"
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
                            max-width="650px"
                        >
                            <div>
                                <v-card-title
                                    v-text= "point.nama"
                                ></v-card-title>
                                <v-card-subtitle
                                    v-text= "point.info"
                                ></v-card-subtitle>
                            </div>
                            <v-card-actions>
                                <v-avatar>
                                    <v-icon dark> {{ point.icon }} </v-icon>
                                </v-avatar>
                                <v-btn dark text>
                                    <a :href="point.link"> <h3 class="links">Github Page</h3></a>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

    </v-app>
</template>

<style>
    .projects{
        font-family: 'Roboto', sans-serif;
    }
    .links:link{
        color: white;
    }
</style>

<script>
import AppNavigation from '@/components/appNavigation'

export default {
    name:'ProjectsPage',
    components:{
        AppNavigation
    },
    data(){
        return{
            style1:{
                backgroundColor: "#2c4863"
            },
            projectList:[
                {
                    nama: 'Sportbabe Mobile Application',
                    info: 'Flutter-based productivity application that helps and facilitates a person in carrying out sports activities by providing a list of available sports venues along with the information needed plus facilitating someone to order the sports venue effectively and efficiently.”',
                    icon: 'mdi-cellphone',
                    link: 'https://github.com/fadelrahman31/sportbabe-app'
                },
                {
                    nama: 'Electronic Document Issuance Web App',
                    info: 'Aplikasi pengajuan dokumen kemahsiswaan pada Tata Usaha STEI ITB',
                    icon: 'mdi-text-box-multiple',
                    link: 'https://github.com/fadelrahman31/edi-project'
                },
                {
                    nama: 'Info Kost Web App',
                    info: 'Aplikasi penyediaan dan pengelolaan informasi kost',
                    icon: 'mdi-cellphone-information',
                    link: 'https://github.com/fadelrahman31/info-kost-app'
                },
                {
                    nama: 'Info Kost Data Crawler',
                    info: 'Crawler Data Engine untuk informasi kost dari internet',
                    icon: 'mdi-database-search',
                    link: 'https://github.com/fadelrahman31/HTTP-RESTful-API-Without-Framework'
                },
                {
                    nama: 'Python 3 HTTP Server',
                    info: 'HTTP Server custom berbasis Python 3',
                    icon: 'mdi-server',
                    link: 'https://github.com/fadelrahman31/HTTP-Server-with-SSL-Authentication'
                },
                {
                    nama: 'Sistem Informasi Registrasi Mahasiswa Baru',
                    info: 'Bagian dari project platform Smart Campus System',
                    icon: 'mdi-account-multiple-check',
                    link: ''
                }
            ]
        }
    }
}
</script>
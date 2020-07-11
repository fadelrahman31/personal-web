<template>
    <v-app class="gallery" :style="style1">
        <app-navigation></app-navigation>
        <br><br><br><br>
        <v-card
            class="mx-auto ma-8 pa-2"
            color="#1f2647"
            dark
            id="id1"
        >
            <div class="links ma-3 pa-0">
                <h2>Photos from Some Events that I attended!</h2>
            </div>

            <v-container fluid>
                <v-row
                    v-for= "(point, i) in galleryList"
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
                            <v-img
                                :src= "point.gambar"
                            ></v-img>
                            <v-card-title
                                v-text= "point.nama"
                            ></v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-app>
</template>

<style>
    .gallery{
        font-family: 'Roboto', sans-serif;
    }
    #id1{
        font-family: 'Nunito', sans-serif;
    }
</style>

<script>
import AppNavigation from '@/components/appNavigation'

export default {
    name:'GalleryPage',
    components:{
        AppNavigation
    }, 
    data(){
        return{
            style1:{
                backgroundColor: "#2c4863"
            },
            galleryList: [
                {
                    nama: 'As a Speaker at Internship Sharing Event!',
                    gambar: 'https://docs.google.com/uc?export=download&id=1aEV1bClh3XjNUDlPJGyvkQy9g1RXSI64'
                },
                {
                    nama: 'At KMHE 2018 Podium as The 3rd Winner of Gasoline Prototype Car Category!',
                    gambar: 'https://docs.google.com/uc?export=download&id=1ins1DoHfPKBgtPOAHL0R47NDeyoebugx'
                },
                {
                    nama: 'At KMHE 2019 Podium as The 2nd Winner of Ethanol Prototype Car Category!',
                    gambar: 'https://docs.google.com/uc?export=download&id=16qvwA4E6rREVyB0fY2MeaBNVZcqCgTbm'
                },
                {
                    nama: 'Having Sponsorship Contract Deal with Tempo Scan Group!',
                    gambar: 'https://docs.google.com/uc?export=download&id=14mC9rs2dWWmVMIU9lazW-zB8cr6166TJ'
                }
            ]
        }
    }
}
</script>
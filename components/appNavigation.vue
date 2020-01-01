<template>
    <span>
        <v-navigation-drawer
            v-model="drawer"
            light
            absolute
            temporary            
        >
            <v-list nav dense>
                <v-list-item
                    v-for= "item in items"
                    :key= "item.title"
                    :to= 'item.path'
                    link
                >
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            
            dark
            color="light-blue darken-4"
        >
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title class="font-weight-bold" >{{ appTitle }}</v-toolbar-title>
            

            <template v-slot:extension>
                <v-tabs 
                    align-with-title
                    background-color="transparent"
                >
                    <v-tab :href='`/`'>Welcome!</v-tab>
                    <v-tab :href='`/inspire`'>Gallery</v-tab>
                    <v-tab :href='`/#achievement`'>Projects</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
    </span>
</template>


<script>
 

export default {
    name: 'AppNavigation',
    data(){
        return{
            appTitle: 'FadelRahman',
            drawer : null,
            items: [
                {
                    title : 'About Me',
                    path : '/'
                },
                {
                    title : 'Meine Hobbies' 
                }
            ]
        }
    }
}
</script>
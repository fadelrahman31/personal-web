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
            elevate-on-scroll
            dark
            color="light-blue darken-4"
        >
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon><v-spacer></v-spacer>
            <v-toolbar-title class="font-weight-bold">{{ appTitle }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn>
                Find me!
            </v-btn>
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
                    title : 'About Me'
                },
                {
                    title : 'Experiences'
                },
                {
                    title : 'Educations'
                },
                {
                    title : 'Projects' 
                },
                {
                    title : 'Get to Know Me More!'
                }
            ]
        }
    }
}
</script>
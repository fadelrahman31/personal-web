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
            fixed
            dark
            color="light-blue darken-4"
        >
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title class="font-weight-bold" >{{ appTitle }}</v-toolbar-title>
            
        </v-app-bar>
    </span>
</template>


<script>
 

export default {
    name: 'AppNavigationLite',
    data(){
        return{
            appTitle: 'FadelRahman',
            drawer : null,
            items: [
                {
                    title : 'About Me',
                    path: '/'
                },
                {
                    title : 'Personal Resume',
                    path : '/resume'
                }
            ]
        }
    }
}
</script>
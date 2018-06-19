<template>
    <v-app>
        <v-toolbar
                app
                color="primary"
                dark
        >
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <Home></Home>
        </v-content>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
    import Home from '@/views/Home.vue';
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'App',
        components: {
            Home,
        },
        data() {
            return {
                fixed: false,
                title: 'Yapo.cl',
            };
        },
    })
    export default class App extends Vue {}
</script>

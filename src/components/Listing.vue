<template>
    <v-card>
        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12 v-for="(ad, index) in ads" :key='index'>
                    <v-card color="white" class="black--text">
                        <v-container fluid grid-list-lg>
                            <v-layout row>
                                <div class="listing--media">
                                    <v-card-media class="v-card-media--image"
                                                  :src="ad.image"
                                                  height="10em"
                                                  cover
                                    ></v-card-media>
                                </div>
                                <v-flex>
                                    <div>
                                        <div class="headline">{{ad.title}}</div>
                                        <div>{{ad.commune + ' - ' + ad.region}}</div>
                                        <div>{{ad.price}}</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>
<script lang="ts">
    /* tslint:disable max-line-length */
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Ad} from '@/store/types';

    @Component
    export default class Listing extends Vue {
        @Prop() public ads!: Ad[];
    }
</script>
<style lang="scss" scoped>
    .v-card-media--image {
        width: 10em;
    }

    .listing--media {
        width: 10em;
    }
</style>

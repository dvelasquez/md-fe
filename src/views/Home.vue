<template>
    <div class="home">
        {{listing}}
        <Listing></Listing>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Action, State} from 'vuex-class';
    import Listing from '@/components/Listing.vue';
    import {ListingState} from '../store/types';

    const namespace: string = 'listing';

    @Component({
        components: {
            Listing,
        },
    })
    export default class Home extends Vue {
        @State('listing')
        private listing!: ListingState;
        @Action('getAds', {namespace})
        private getAds: any;

        private mounted() {
            this.getAds();
        }
    }
</script>

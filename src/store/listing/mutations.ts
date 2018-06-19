import {Ad, ListingState} from '@/store/types';
import {MutationTree} from 'vuex';


export const mutations: MutationTree<ListingState> = {
    LISTING_LOADED(state, payload: Ad[]) {
        state.error = false;
        state.ads = payload;
    },
    LISTING_ERROR(state) {
        state.error = true;
        state.ads = undefined;
    },
};

import {Ad, ListingState} from '@/store/types';
import {MutationTree} from 'vuex';


export const mutations: MutationTree<ListingState> = {
    SET_ADS(state, payload: Ad[]) {
        state.error = false;
        state.ads = payload;
    },
};

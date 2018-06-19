import {ListingState, RootState} from '@/store/types';
import {GetterTree} from 'vuex';

export const getters: GetterTree<ListingState, RootState> = {
    ads(state: ListingState) {
        return state.ads;
    },
};

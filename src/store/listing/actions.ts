import {ActionTree} from 'vuex';
import {Ad, ListingState, RootState} from '@/store/types';
import ListingService from '@/services/ListingService';

const listingService = new ListingService();

export const actions: ActionTree<ListingState, RootState> = {
    getAds({commit}: any): any {
        return listingService.load()
            .then((response: Ad[]) => {
                commit('LISTING_LOADED', response);
            })
            .catch((error: any) => {
                commit('LISTING_ERROR');
            });
    },
};

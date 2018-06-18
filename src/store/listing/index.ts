import {Module} from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import {default as RootState, ListingState} from '@/store/types';

export const state: ListingState = {
    ads: undefined,
    error: false,
};

const namespaced: boolean = true;

export const listing: Module<ListingState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

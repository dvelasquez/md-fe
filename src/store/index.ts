import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {listing} from './listing';
import RootState from '@/store/types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0',
        ads: undefined,
    },
    modules: {
        listing,
    },
};

export default new Vuex.Store<RootState>(store);

import {ListingState, RootState} from '@/store/types';
import {GetterTree} from 'vuex';

// const ads = (state: { ads: Ad[] }) => state.ads;
//
// export default {
//     ads,
// };

export const getters: GetterTree<ListingState, RootState> = {
    ads(state: ListingState) {
        return state.ads;
    },
};

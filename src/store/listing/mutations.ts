import {Ad} from '@/store/types';

const SET_ADS = (state: any, ads: Ad[]) => {
    state.ads = ads;
};

export default {
    SET_ADS,
};

import {Ad} from '@/store/types';

const ads = (state: { ads: Ad[] }) => state.ads;

export default {
    ads,
};

import {Ad} from '@/store/types';
import RestDS from '@/ds/rest';
import {CRUD} from '@/ds/CRUD';

export default class ListingService {
    private ds: CRUD;

    constructor() {
        this.ds = new RestDS('http://localhost:3000/api/', {});
    }

    public load(): Promise<Ad[]> {
        return this.ds.$read('Ads', '?filter=' + JSON.stringify({where: {}, limit: 100}))
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }
}

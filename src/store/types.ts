
export interface RootState {
    version: string;
    ads?: ListingState;
}

export interface Ad {
    id: string;
    image?: string;
    link: string;
    region: string;
    commune: string;
    price?: string;
    currency?: string;
    secondaryPrice?: string;
    title: string;
    label: string;
    listTime: string;
    pro: number;
    category: string;
    discount: boolean;
}

export interface ListingState {
    ads?: Ad[];
    error: boolean;
}


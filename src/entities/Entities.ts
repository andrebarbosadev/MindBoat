export interface InterestPoint {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    type: string;
};

export interface Boat {
    id: number;
    name: string;
    description: string;
    image: NodeRequire;
};

export interface Service {
    id: number;
    name: string;
    icon: string;
};
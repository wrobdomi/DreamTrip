export interface TripInBasket {

    readonly tripId: string; // generated by db
    readonly name: string;
    readonly price: number;
    allBooked: number;
}

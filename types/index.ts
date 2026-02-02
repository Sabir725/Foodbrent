
export interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface Order {
    orderId: string;
    date: string;
    paymentStatus: string;
    totalItems: number;
    items: OrderItem[];
    totalPrice: number;
    orderType: 'Take Away' | 'Dine In';
    schedule: string;
    carPlate?: string;
}

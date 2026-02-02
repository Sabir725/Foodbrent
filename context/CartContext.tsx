
// context/CartContext.tsx
"use client";

import { createContext, useContext, useState, useMemo, ReactNode, Dispatch, SetStateAction } from 'react';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartSummary {
    totalItems: number;
    totalPrice: number;
}

export interface TakeawaySchedule {
    date: string;
    time: string;
    carPlate: string;
}

export type OrderType = 'Take Away' | 'Dine In';

interface CartContextType {
    cart: CartItem[];
    handleAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
    handleIncreaseQuantity: (itemId: string) => void;
    handleDecreaseQuantity: (itemId: string) => void;
    clearCart: () => void;
    cartSummary: CartSummary;
    takeawaySchedule: TakeawaySchedule;
    setTakeawaySchedule: Dispatch<SetStateAction<TakeawaySchedule>>;
    orderType: OrderType;
    setOrderType: Dispatch<SetStateAction<OrderType>>;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [takeawaySchedule, setTakeawaySchedule] = useState<TakeawaySchedule>({ date: '', time: '', carPlate: '' });
    const [orderType, setOrderType] = useState<OrderType>('Take Away');

    const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const handleIncreaseQuantity = (itemId: string) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecreaseQuantity = (itemId: string) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartSummary = useMemo<CartSummary>(() => {
        const totalItems = cart.length;
        const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { totalItems, totalPrice };
    }, [cart]);

    const value: CartContextType = {
        cart,
        handleAddToCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        clearCart,
        cartSummary,
        takeawaySchedule,
        setTakeawaySchedule,
        orderType,
        setOrderType,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

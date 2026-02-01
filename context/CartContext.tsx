
// context/CartContext.tsx
import { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [orderType, setOrderType] = useState('takeAway'); // 'takeAway' or 'dineIn'
    const [takeawaySchedule, setTakeawaySchedule] = useState({ date: '', time: '', carPlate: '' });
    const [dineInReservation, setDineInReservation] = useState({ date: '', time: '' });

    const handleAddToCart = (item) => {
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

    const handleIncreaseQuantity = (itemId) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecreaseQuantity = (itemId) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0));
    };

    const cartSummary = useMemo(() => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { totalItems, totalPrice };
    }, [cart]);

    const value = {
        cart,
        handleAddToCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        cartSummary,
        orderType,
        setOrderType,
        takeawaySchedule,
        setTakeawaySchedule,
        dineInReservation,
        setDineInReservation
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

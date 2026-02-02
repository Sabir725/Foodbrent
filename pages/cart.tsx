
// pages/cart.tsx
"use client";

import Head from 'next/head';
import { useState, ChangeEvent } from 'react';
import { useCart, TakeawaySchedule } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import ConfirmationDialog from '@/components/dialog/ConfirmationDialog';
import styles from '@/styles/Cart.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Order } from '@/types';

const CartPage = () => {
    const cartContext = useCart();
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [order, setOrder] = useState<Order | null>(null);

    if (!cartContext) {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Your Shopping Cart</title>
                </Head>
                <Header />
                <main className={styles.mainContent}>
                    <h1 className={styles.title}>Your Cart</h1>
                    <p className={styles.emptyMessage}>Your cart is empty. <Link href="/"><a>Continue shopping</a></Link></p>
                </main>
            </div>
        );
    }

    const {
        cart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        cartSummary,
        takeawaySchedule,
        setTakeawaySchedule,
        clearCart,
        orderType
    } = cartContext;

    const handleScheduleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'date') {
        setTakeawaySchedule((prev: TakeawaySchedule) => ({ ...prev, date: value, time: '' }));
    } else {
        setTakeawaySchedule((prev: TakeawaySchedule) => ({ ...prev, [name]: value }));
    }
};


    const handleCheckout = () => {
        const newOrder: Order = {
            orderId: `FF-${Date.now()}`,
            date: new Date().toLocaleDateString(),
            paymentStatus: 'Paid',
            totalItems: cartSummary.totalItems,
            items: cart,
            totalPrice: cartSummary.totalPrice,
            orderType: orderType,
            schedule: `${takeawaySchedule.date} at ${takeawaySchedule.time}`,
            carPlate: takeawaySchedule.carPlate
        };
        setOrder(newOrder);
        setDialogOpen(true);
    };

    const isCheckoutDisabled = !takeawaySchedule.date || !takeawaySchedule.time;

    return (
        <div className={styles.container}>
            <Head>
                <title>Your Shopping Cart</title>
            </Head>

            <Header />

            <main className={styles.mainContent}>
                <h1 className={styles.title}>Your Cart</h1>

                {cart.length === 0 ? (
                    <p className={styles.emptyMessage}>Your cart is empty.</p>
                ) : (
                    <div className={styles.cartLayout}>
                        <div className={styles.cartItems}>
                             <div className={styles.takeawaySchedule}>
                                <h3>Schedule Pickup</h3>
                                <div className={styles.scheduleInputs}>
                                    <input
                                        type="date"
                                        name="date"
                                        value={takeawaySchedule.date}
                                        min={new Date().toISOString().split("T")[0]}
                                        onChange={handleScheduleChange}
                                        className={styles.scheduleInput}
                                    />
                                    <input
                                        type="time"
                                        name="time"
                                        value={takeawaySchedule.time}
                                        onChange={handleScheduleChange}
                                        className={styles.scheduleInput}
                                    />
                                    <input
                                        type="text"
                                        name="carPlate"
                                        placeholder="Vehicle Plate No. (Optional)"
                                        value={takeawaySchedule.carPlate}
                                        onChange={handleScheduleChange}
                                        className={styles.scheduleInput}
                                    />
                                </div>
                                <p className={styles.carPlateNote}>Providing your car plate number allows for a faster and more convenient curbside pickup.</p>
                            </div>

                            {cart.map(item => (
                                <div key={item.id} className={styles.cartItem}>
                                    <Image src={item.image} alt={item.name} width={100} height={100} className={styles.itemImage} />
                                    <div className={styles.itemDetails}>
                                        <h3>{item.name}</h3>
                                        <p>Price: ${item.price}</p>
                                        <div className={styles.quantityControl}>
                                            <button onClick={() => handleDecreaseQuantity(item.id)}>−</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.cartSummary}>
                            <h2>Summary</h2>
                             {takeawaySchedule.date && takeawaySchedule.time && (
                                <div className={styles.summaryLine}>
                                    <span>Pickup:</span>
                                    <span>{takeawaySchedule.date} at {takeawaySchedule.time} {takeawaySchedule.carPlate && `(${takeawaySchedule.carPlate})`}</span>
                                </div>
                            )}
                            <div className={styles.summaryLine}><span>Order Type:</span> <span>{orderType}</span></div>
                            <div className={styles.summaryLine}><span>Total Items:</span> <span>{cartSummary.totalItems}</span></div>
                            <div className={styles.summaryLine}><span>Total Price:</span> <span>${cartSummary.totalPrice.toFixed(2)}</span></div>
                            <button 
                                className={styles.checkoutButton} 
                                onClick={handleCheckout} 
                                disabled={isCheckoutDisabled}
                            >
                                Proceed to Checkout
                            </button>
                            {isCheckoutDisabled && (
                                <p className={styles.scheduleWarning}>
                                    Please select a pickup date and time to continue.
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </main>

            {order && (
                <ConfirmationDialog
                    isOpen={isDialogOpen}
                    onClose={() => setDialogOpen(false)}
                    order={order}
                    clearCart={clearCart}
                />
            )}
        </div>
    );
};

export default CartPage;

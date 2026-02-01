
// pages/cart.tsx
import Head from 'next/head';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import ConfirmationDialog from '@/components/dialog/ConfirmationDialog';
import styles from '@/styles/Cart.module.css';
import Image from 'next/image';

const CartPage = () => {
    const {
        cart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        cartSummary,
        orderType,
        setOrderType,
        takeawaySchedule,
        setTakeawaySchedule,
        dineInReservation,
        setDineInReservation
    } = useCart();

    const [isDialogOpen, setDialogOpen] = useState(false);
    const [order, setOrder] = useState(null);

    const handleScheduleChange = (e) => {
        setTakeawaySchedule(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleReservationChange = (e) => {
        setDineInReservation(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCheckout = () => {
        const newOrder = {
            orderId: `FF-${Date.now()}`,
            date: new Date().toLocaleDateString(),
            paymentStatus: 'Paid',
            totalItems: cartSummary.totalItems,
            items: cart,
            totalPrice: cartSummary.totalPrice,
            orderType: orderType === 'dineIn' ? 'Dine In' : 'Take Away',
            schedule: orderType === 'dineIn' ? `${dineInReservation.date} at ${dineInReservation.time}` : `${takeawaySchedule.date} at ${takeawaySchedule.time}`,
            carPlate: takeawaySchedule.carPlate
        };
        setOrder(newOrder);
        setDialogOpen(true);
    };

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
                             <div className={styles.orderTypeToggle}>
                                <button
                                    className={`${styles.toggleButton} ${orderType === 'takeAway' ? styles.active : ''}`}
                                    onClick={() => setOrderType('takeAway')}
                                >
                                    Take Away
                                </button>
                                <button
                                    className={`${styles.toggleButton} ${orderType === 'dineIn' ? styles.active : ''}`}
                                    onClick={() => setOrderType('dineIn')}
                                >
                                    Dine In
                                </button>
                            </div>

                            {orderType === 'takeAway' && (
                                <div className={styles.takeawaySchedule}>
                                    <h3>Schedule Pickup</h3>
                                    <div className={styles.scheduleInputs}>
                                        <input
                                            type="date"
                                            name="date"
                                            value={takeawaySchedule.date}
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
                                            placeholder="Car Plate No. (Optional)"
                                            value={takeawaySchedule.carPlate}
                                            onChange={handleScheduleChange}
                                            className={styles.scheduleInput}
                                        />
                                    </div>
                                    <p className={styles.carPlateNote}>Providing your car plate number allows for a faster and more convenient curbside pickup.</p>
                                </div>
                            )}

                            {orderType === 'dineIn' && (
                                <div className={styles.dineInReservation}>
                                    <h3>Reserve a Table</h3>
                                    <div className={styles.scheduleInputs}>
                                        <input
                                            type="date"
                                            name="date"
                                            value={dineInReservation.date}
                                            onChange={handleReservationChange}
                                            className={styles.scheduleInput}
                                        />
                                        <input
                                            type="time"
                                            name="time"
                                            value={dineInReservation.time}
                                            onChange={handleReservationChange}
                                            className={styles.scheduleInput}
                                        />
                                    </div>
                                </div>
                            )}

                            {cart.map(item => (
                                <div key={item.id} className={styles.cartItem}>
                                    <Image src={item.image} alt={item.name} width={100} height={100} className={styles.itemImage} />
                                    <div className={styles.itemDetails}>
                                        <h3>{item.name}</h3>
                                        <p>Price: ₹{item.price}</p>
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
                            <div className={styles.summaryLine}><span>Order Type:</span> <span>{orderType === 'dineIn' ? 'Dine In' : 'Take Away'}</span></div>
                             {orderType === 'takeAway' && takeawaySchedule.date && takeawaySchedule.time && (
                                <div className={styles.summaryLine}>
                                    <span>Pickup:</span>
                                    <span>{takeawaySchedule.date} at {takeawaySchedule.time} {takeawaySchedule.carPlate && `(${takeawaySchedule.carPlate})`}</span>
                                </div>
                            )}
                            {orderType === 'dineIn' && dineInReservation.date && dineInReservation.time && (
                                <div className={styles.summaryLine}><span>Reservation:</span> <span>{dineInReservation.date} at {dineInReservation.time}</span></div>
                            )}
                            <div className={styles.summaryLine}><span>Total Items:</span> <span>{cartSummary.totalItems}</span></div>
                            <div className={styles.summaryLine}><span>Total Price:</span> <span>₹{cartSummary.totalPrice.toFixed(2)}</span></div>
                            <button className={styles.checkoutButton} onClick={handleCheckout}>Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </main>

            {order && (
                <ConfirmationDialog
                    isOpen={isDialogOpen}
                    onClose={() => setDialogOpen(false)}
                    order={order}
                />
            )}
        </div>
    );
};

export default CartPage;

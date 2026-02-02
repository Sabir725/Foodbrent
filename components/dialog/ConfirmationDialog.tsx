
import React from 'react';
import styles from '@/styles/ConfirmationDialog.module.css';
import { Order } from '@/types';
import SuccessIcon from '../icons/SuccessIcon';

interface ConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    order: Order;
    clearCart: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ isOpen, onClose, order, clearCart }) => {
    if (!isOpen) return null;

    const handleClose = () => {
        clearCart();
        onClose();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.dialog}>
                <div className={styles.header}>
                    <SuccessIcon className={styles.successIcon} />
                    <h2>Order Confirmed!</h2>
                    <p className={styles.thankYouMessage}>Thank you for your order!</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.details}>
                        <h3>Order Details</h3>
                        <div className={styles.detailItem}>
                            <span>Order ID:</span>
                            <span>{order.orderId}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span>Date:</span>
                            <span>{order.date}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span>Payment Status:</span>
                            <span>{order.paymentStatus}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span>Order Type:</span>
                            <span>{order.orderType}</span>
                        </div>
                        {order.orderType === 'Take Away' && order.schedule && (
                            <div className={styles.detailItem}>
                                <span>Pickup Time:</span>
                                <span>{order.schedule}</span>
                            </div>
                        )}
                        {order.orderType === 'Dine In' && order.schedule && (
                            <div className={styles.detailItem}>
                                <span>Reservation Time:</span>
                                <span>{order.schedule}</span>
                            </div>
                        )}
                        {order.carPlate && (
                            <div className={styles.detailItem}>
                                <span>Car Plate:</span>
                                <span>{order.carPlate}</span>
                            </div>
                        )}
                    </div>
                    <div className={styles.itemsList}>
                        <h3>Items ({order.totalItems})</h3>
                        {order.items.map((item) => (
                            <div className={styles.item} key={item.id}>
                                <span>{item.name} (x{item.quantity})</span>
                                <span></span>
                                <span>₹{item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.summary}>
                    <div className={styles.total}>
                        <span>Total:</span>
                        <span>₹{order.totalPrice}</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <button className={styles.closeButton} onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;

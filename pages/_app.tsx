import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from '../context/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}



// const shopData = {
//   id: 1,
//   name: 'Shagun Sweets',
//   coverImage: '',
//   rating: 4.8,
//   reviews:"8277",
//   cuisine: 'Japanese, Sushi',
//   deliveryTime: '20-30 mins',
//   distance: '3.2km',
//   address: '123 Sushi Lane, Foodie City',
//   timings: '11:00 AM - 10:00 PM',
//   license: 'FSSAI_LIC_1234567890',
//   offers: [
//       { code: 'SAVE20', description: '20% off on orders above ₹500' },
//       { code: 'FREEBIE', description: 'Free delivery on first order' },
//   ],
//   menu: {
//       'Snacks': [
//           { id: 201, name: 'Single Samosa with Chutney', description: 'Steamed soybeans with sea salt.', price: 6.99, image: 'https://picsum.photos/200/200?random=m3', isVeg: true },
//           { id: 202, name: 'Tikki with Chutney', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 203, name: 'Indian Tikki', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 204, name: 'Fries', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 205, name: 'Chaat Papdi', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 206, name: 'Golgappa Plate (6 pcs)', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true},
//           { id: 207, name: 'Dahi Bhalla', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Samosa Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Tikki Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Special Indian Tikki Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Veggie Pakora', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Paneer Pakora (6 pcs)', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Bhatura Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Puri Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Pita Bread Kulcha Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Amritsari Kulcha Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Noodle Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Manchurian', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Half Samosa Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Half Tikki Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Half Indian Tikki Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Half Bhatura Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Half Puri Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Half Kulcha Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
//           { id: 207, name: 'Half Pita Bread Kulcha Plate', description: 'Pan-fried chicken dumplings.', price: 6.99, image: 'https://picsum.photos/200/200?random=m4', isVeg: true },
  
//       ],
//       'Breakfast': [
//            { id: 301, name: 'Aloo Parantha Plate', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Plain Parantha Plate', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Mix Parantha Plate', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Gobi Parantha Plate', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Muli Parantha Plate', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Paneer Parantha Plate', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Aloo/Plain/Mix Parantha Half Plate', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Gobi/Muli Parantha Half Plate', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Paneer Parantha Half Plate', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Aloo/Plain/Mix Single Parantha', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Gobi/Muli Single Parantha', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//            { id: 301, name: 'Paneer Single Parantha', description: 'Crispy fried chicken cutlet with Japanese curry sauce.', price: 450, image: 'https://picsum.photos/200/200?random=m5', isVeg: false },
//           ],

//       'Lunch': [
//           { id: 401, name: 'Monday (Saag, Two Makki Roti, Raita, Salad)', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 402, name: 'Tuesday (Dal or Shahi Paneer, Roti or Naan, Raita, Salad)', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 403, name: 'Wednesday (Palak Paneer, Roti, Salad, Raita)', description: 'Sweet rice cake filled with ice cream.', price: 10.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Thursday (Yellow Dal, Bhartha, Roti, Salad)', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Friday (Kadhi, Dry Veggie, Roti, Rice, Salad)', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Saturday (Shahi Paneer, Roti, Raita, Salad)', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Sunday (Shahi Paneer, Roti, Raita, Salad)', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true }, 
//       ],

//       'Paneer Dishes': [
//           { id: 401, name: 'Shahi Paneer', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 402, name: 'Malai Kofta', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 403, name: 'Matar Paneer', description: 'Sweet rice cake filled with ice cream.', price: 10.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Palak Paneer', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Paneer Bhurji', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Chilli Cheese', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//       ],

//       'Veggie Dishes': [
//           { id: 401, name: 'Dal (Turka)', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 402, name: 'Yellow Dal', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 403, name: 'Bhartha', description: 'Sweet rice cake filled with ice cream.', price: 10.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Mix Veggie', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Aloo Gobhi', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Kadhi', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Saag', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true }, 
//           { id: 404, name: 'Arbi (Taro Root)', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true }, 
//           { id: 404, name: 'Chana', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true }, 
//           { id: 404, name: 'Karela', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true }, 
//           { id: 404, name: 'Bhindi', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true }, 
//       ],
//       'Naan & Roti': [
//           { id: 401, name: 'Tawa Roti', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 402, name: 'Tandoori Roti', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 403, name: 'Plain Naan', description: 'Sweet rice cake filled with ice cream.', price: 10.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Garlic Naan', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Extra Bhatura/Puri', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//        ],
//       'Rice': [
//           { id: 401, name: 'Plain Rice', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 402, name: 'Veggie Biryani', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//       ],
//       'Dessert': [
//           { id: 401, name: 'Ras Malai', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 402, name: 'Hot Gajrela', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 403, name: 'Hot Gulab Jamun', description: 'Sweet rice cake filled with ice cream.', price: 10.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//        ],
//       'Drinks': [
//           { id: 401, name: 'Mango Shake', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 402, name: 'Sweet Lassi', description: 'Sweet rice cake filled with ice cream.', price: 9.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 403, name: 'Salty Lassi', description: 'Sweet rice cake filled with ice cream.', price: 10.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Cold Coffee', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Mango Lassi', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Tea', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true },
//           { id: 404, name: 'Hot Coffee', description: 'Sweet rice cake filled with ice cream.', price: 11.99, image: 'https://picsum.photos/200/200?random=m6', isVeg: true }, 
//       ]
//   }
// };
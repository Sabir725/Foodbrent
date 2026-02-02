
// lib/data.ts

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    image: string;
    isVeg: boolean;
    options: {
        takeout: { price: number };
        dine_in: { price: number };
    };
}

export interface Menu {
    [key: string]: MenuItem[];
}

export interface Shop {
    id: number;
    name: string;
    coverImage: string;
    rating: number;
    reviews: string;
    cuisine: string;
    deliveryTime: string;
    distance: string;
    address: string;
    timings: string;
    license: string;
    offers: { code: string; description: string }[];
    menu: Menu;
}

const shops: Shop[] = [
    {
        id: 1,
        name: 'Vishal Sweets',
        coverImage: 'https://www.climatronics.in//wp-content/uploads/2021/03/Sweet-shop-2.png',
        rating: 4.8,
        reviews: "8277",
        cuisine: '123 Sweet Street, Foodie City',
        deliveryTime: '2,207 reviews',
        distance: 'www.vishalsweets.com',
        address: '123 Sweet Street, Foodie City',
        timings: '11:00 AM - 10:00 PM',
        license: 'FSSAI_LIC_1234567890',
        offers: [
            { code: 'SAVE20', description: '20% off on orders above $25' },
            { code: 'FREEBIE', description: 'Free delivery on first order' },
        ],
        menu: {
            'Snacks': [
                { id: 201, name: 'Single Samosa with Chutney', description: 'Crispy pastry filled with spiced potatoes and peas.', options: { takeout: { price: 2 }, dine_in: { price: 2.5 } }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSin688V2eLgmDv3ZaPMsblr94I-Gzo2xqsnQ&s', isVeg: true },
                { id: 202, name: 'Samosa Plate', description: 'Two samosas served with chana masala.', options: { takeout: { price: 8 }, dine_in: { price: 9 } }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6nLff5wcOV_c4v9Ov8dcpnR93PoezmcZow&s', isVeg: true },
                { id: 203, name: 'Tikki with Chutney', description: 'Spiced potato patties with chutneys.', options: { takeout: { price: 2 }, dine_in: { price: 2.5 } }, image: 'https://assets.bonappetit.com/photos/602c3f3947d6e85be58927ab/1:1/w_2560%2Cc_limit/Basically-AlooTikki.jpg', isVeg: true },
            ],
            'Sweets': [
                { id: 301, name: 'Gulab Jamun (2 pcs)', description: 'Soft, spongy balls in sugar syrup.', options: { takeout: { price: 2 }, dine_in: { price: 5 } }, image: 'https://cdn.dotpe.in/longtail/store-items/2518390/04EtB7od.jpeg', isVeg: true },
                { id: 302, name: 'Jalebi (100g)', description: 'Spiral-shaped sweet.', options: { takeout: { price: 3 }, dine_in: { price: 5 } }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhg80_ZPL5_vFvVNeWN68MqJap4NL8CvfHA&s', isVeg: true },
            ],
            'Drinks': [
                { id: 401, name: 'Sweet Lassi', description: 'A refreshing yogurt-based drink, sweetened and topped with a dollop of cream.', options: { takeout: { price: 4 }, dine_in: { price: 5 } }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WlVyvIacpsfZ_UrZJNPQ188Ojr2c-nuYjA&s', isVeg: true },
                { id: 402, name: 'Masala Chai', description: 'Aromatic Indian tea brewed with a blend of spices like cardamom, ginger, and cloves.', options: { takeout: { price: 5 }, dine_in: { price: 5.5 } }, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jP4Dd4hpBtcN6k02caLWC5Y67-i5Ps6n2w&s', isVeg: true },
                { id: 403, name: 'Badam Milk', description: 'Creamy and rich almond-flavored milk, garnished with slivered almonds and saffron.', options: { takeout: { price: 5 }, dine_in: { price: 5.5 } }, image: 'https://cdn.shopify.com/s/files/1/0687/1203/8627/files/THANDAI.jpg?v=1714218812', isVeg: true },
            ]
        },
    },
    {
        id: 2,
        name: 'Pizza Palace',
        coverImage: 'https://source.unsplash.com/1740x400/?pizza',
        rating: 4.5,
        reviews: "5432",
        cuisine: 'Italian, Pizza, Pasta',
        deliveryTime: '30-45 mins',
        distance: '5.1km',
        address: '456 Pizza Avenue, Foodie City',
        timings: '12:00 PM - 11:00 PM',
        license: 'FSSAI_LIC_0987654321',
        offers: [
            { code: 'PIZZA50', description: '50% off on second pizza' },
            { code: 'COMBO1', description: 'Pizza, drink, and garlic bread combo' },
        ],
        menu: {
            'Pizzas': [
                { id: 501, name: 'Margherita Pizza', description: 'Classic pizza with tomato, mozzarella, and basil.', options: { takeout: { price: 12 }, dine_in: { price: 14 } }, image: 'https://source.unsplash.com/400x300/?margherita-pizza', isVeg: true },
                { id: 502, name: 'Pepperoni Pizza', description: 'Pizza with pepperoni and cheese.', options: { takeout: { price: 15 }, dine_in: { price: 17 } }, image: 'https://source.unsplash.com/400x300/?pepperoni-pizza', isVeg: false },
            ],
            'Pastas': [
                { id: 601, name: 'Spaghetti Carbonara', description: 'Pasta with bacon, eggs, and cheese.', options: { takeout: { price: 10 }, dine_in: { price: 12 } }, image: 'https://source.unsplash.com/400x300/?spaghetti-carbonara', isVeg: false },
            ],
        },
    },
];

export const getShops = (): Shop[] => {
    return shops;
};

export const getShopById = (id: number): Shop | undefined => {
    return shops.find(shop => shop.id === id);
};

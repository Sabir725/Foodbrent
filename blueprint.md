
# Food Crawl - Application Blueprint

## Overview

Food Crawl is a modern, visually appealing food delivery application designed to provide a seamless user experience. It features a clean, intuitive interface with a focus on usability and performance. The application is built with Next.js and utilizes a component-based architecture with a global state management for the shopping cart.

## Style and Design

- **Color Theme:** The application uses a vibrant and energetic red color theme. The primary color is `#dc2626`, used for buttons, links, and other interactive elements. A dark theme (`#121212`) is used for the shop detail pages for a more immersive experience.
- **Typography:** A clean and readable font is used throughout the application, with a clear hierarchy for headings and body text.
- **Layout:** The layout is designed to be responsive and mobile-friendly, with a focus on clean spacing and a balanced visual hierarchy.
- **Iconography:** Modern and intuitive icons are used to enhance the user experience.
- **Visual Effects:** Subtle visual effects, such as shadows, gradients, and hover effects, are used to create a sense of depth and tactility.

## Features

- **Centralized Data Management:** Shop and product data is managed in a central file (`lib/data.ts`), making the application's data easy to manage and scale.
- **Dynamic Shop Listing:** The homepage dynamically fetches and displays a list of all available shops, each with a corresponding link to their detail page.
- **Dynamic Shop Detail Page:**
    - Fetches shop data dynamically based on the ID from the URL.
    - If a shop with the given ID is not found, the user is gracefully redirected to a custom 404 page.
- **Service Option Selection (Take Out / Dine In):** On the shop detail page, users can choose between "Take Out" and "Dine In" service options. Product prices dynamically update based on the selected option.
- **Global Header:** A consistent header is present across all pages, providing navigation and access to the shopping cart.
- **Global Shopping Cart:** The application features a global shopping cart that allows users to add, remove, and update the quantity of items. The cart state is managed globally and is accessible from all pages.
- **Cart Page:** A dedicated cart page displays the contents of the shopping cart, allowing users to review their order and schedule a pickup before proceeding to checkout. The page is fully responsive.
- **Order Confirmation Dialog:** After proceeding to checkout, a confirmation dialog appears, displaying a comprehensive summary of the order. The cart is automatically cleared after the user closes the dialog.
- **Custom 404 Page:** A user-friendly and styled "Page Not Found" page improves the user experience for invalid URLs.
- **Responsive Design:** The application is fully responsive and adapts to different screen sizes, providing a seamless experience on both mobile and desktop devices.

## UI/UX Improvements

*   **Removed Redundant Order Type Toggle:** The "Take Away" / "Dine In" toggle was removed from the cart page to create a more streamlined and logical user experience. The service option is now exclusively chosen on the shop detail page, where the pricing is determined. This eliminates confusion and simplifies the checkout process.
*   **Intuitive Cart Badge:** The cart badge now displays the number of unique items in the cart, rather than the total quantity of all items. This provides a more accurate and intuitive representation of the cart's contents.
*   **Simplified Time Input:** The custom time input in the cart has been replaced with a native HTML5 time input. This simplifies the code, improves accessibility, and provides a more consistent user experience across different browsers.

## Bug Fixes

### React Hook Rendering Error

-   **Error:** "Rendered more hooks than during the previous render."
-   **Cause:** This error occurred in the `pages/shops/[id].tsx` component because the `useMemo` hook was being called conditionally. It was placed after a conditional block that checked if the `shop` and `cartContext` data was available, causing the hook to be skipped on the initial render.
-   **Solution:** The `useMemo` hook was moved to the top level of the `ShopDetail` component to ensure it is called on every render, in the same order. Additionally, the `useCart` context is now safely destructured with default values to prevent errors during the initial render while the context is loading.

### Incorrect Class Name for Checkout Button

-   **Error:** The "Proceed to Checkout" button on the cart page was not styled correctly.
-   **Cause:** The button was assigned a plain string `className="checkoutButton"`, but since the project uses CSS Modules, it should have been `className={styles.checkoutButton}`.
-   **Solution:** The `className` was updated to correctly reference the CSS module, restoring the button's intended styling.

### Time Picker Rendering Issue

-   **Error:** The time picker on the cart page was not visible.
-   **Cause:** The dark theme of the application was interfering with the browser's default time picker styling, making it invisible against the dark background.
-   **Solution:** A CSS rule (`color-scheme: dark;`) was added to `styles/Cart.module.css` for the time input to ensure it renders correctly in the dark theme. Additionally, a `filter: invert(1)` rule was added to the `::-webkit-calendar-picker-indicator` pseudo-element to make the calendar icon visible.

### Invalid Date Selection in Cart

-   **Error:** The date picker on the cart page allowed users to select past dates.
-   **Cause:** The date input field was missing a `min` attribute to restrict date selection. Also, changing the date did not reset the time, which could lead to an invalid time selection.
-   **Solution:** I added a `min` attribute to the date input in `pages/cart.tsx` to prevent selection of past dates. I also updated the `handleScheduleChange` function to reset the time whenever the date is changed.

### TypeScript Build Error

- **Error:** The `npm run build` command failed with a TypeScript type error.
- **Cause:** The `orderType` state in `CartContext` was defined as a generic `string`, but the `Order` type expected a specific literal type (`'Take Away' | 'Dine In'`).
- **Solution:** A new `OrderType` was introduced in `context/CartContext.tsx`. The `orderType` state and the `CartContextType` interface were updated to use this new, more specific type, ensuring type safety and resolving the build error.

## Currency Change

- The currency throughout the application has been changed from Rupees (₹) to Dollars ($).

## Current Plan: UI Refinements, Bug Fixes, and Rebranding

The following steps were taken to improve the user experience, fix bugs, and rebrand the application:

1.  **Create Data Source:** A `lib/data.ts` file was created to act as a centralized source for all shop and menu data.
2.  **Implement Service Options:** The data structure was updated to include different prices for `takeout` and `dine_in` options.
3.  **Update Shop Detail Page:** The `pages/shops/[id].tsx` component was refactored to fetch shop data dynamically and to include a toggle for service options.
4.  **Create Custom 404 Page:** A custom `pages/404.tsx` page was created.
5.  **Update Homepage:** The `pages/index.tsx` component was updated to dynamically render the list of shops.
6.  **Styling:** Stylesheets were updated to support the new features and to improve the overall design.
7.  **Fix Hook Error:** The hook rendering order in `pages/shops/[id].tsx` was corrected to ensure stable and predictable component behavior.
8.  **Streamline Cart Page:** The cart page (`pages/cart.tsx`) was updated to remove the redundant "Take Away" / "Dine In" toggle, simplifying the user flow and removing unnecessary complexity from the cart's state management.
9.  **Fix Button Styling:** The `className` for the "Proceed to Checkout" button was corrected to use the appropriate CSS module, restoring its visual styling.
10. **Update Cart Badge Logic:** The `CartContext` was updated to calculate the number of unique items in the cart, rather than the total quantity.
11. **Fix Time Picker Rendering:** A CSS rule was added to `styles/Cart.module.css` to fix the rendering of the time picker in the dark theme.
12. **Fix Invalid Date Selection:** The date picker in the cart was updated to prevent the selection of past dates and to reset the time when the date is changed.
13. **Change Currency:** The currency was changed from Rupees (₹) to Dollars ($) throughout the application.
14. **Simplify Time Input:** The custom time input in the cart was replaced with a native HTML5 time input, simplifying the code and improving accessibility.
15. **Add Order Type to Cart:** The order type ("Take Away" or "Dine In") is now displayed in the cart summary, providing users with a clear overview of their order.
16. **Rebrand to Food Crawl:** The application has been rebranded from "Food Fleet" to "Food Crawl," and a new logo has been created to reflect the new name.

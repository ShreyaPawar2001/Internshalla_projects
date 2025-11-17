#  ShoppyGlobe — E-Commerce Demo (React + Vite + Redux)

ShoppyGlobe is a simple and clean e-commerce demo built using **React, Vite, React Router, Redux Toolkit, and Axios**.  
It fetches real product data from a public API and includes a fully functional shopping cart.

This project demonstrates component-based UI, API integration, Redux global state, and client-side routing.

---

##  Features
- Fetch products from **https://dummyjson.com/products**
- View product list and product details
- Add items to cart
- Increase/decrease item quantity
- Remove items from cart
- Cart state stored in **Redux Toolkit**
- Clean routing using **React Router**
- Simple and responsive UI with custom CSS

---

##  Project Structure (Important Files)

### **🏁 App Entry**
- `src/main.jsx` — mounts the React app and wraps with Redux Provider  
- `index.html` — base HTML file

### ** Routing**
- `src/App.jsx` — handles all routes:
  - `/` → Home (product list)
  - `/product/:id` → Product detail
  - `/cart` → Shopping cart
  - `*` → NotFound page

### ** Components**
- `Header.jsx` — navigation + cart item count (reads from Redux)
- `ProductList.jsx` — loads product list via custom hook
- `ProductItem.jsx` — single product card + “Add to Cart”
- `ProductDetail.jsx` — detailed product page
- `Card.jsx` — cart page with quantity update + remove
- `NotFound.jsx` — fallback for invalid routes

### ** Redux**
- `store.js` — configures Redux store
- `CardSlice.js` — cart reducer + actions:
  - `addToCart`
  - `removeFromCart`
  - `updateQuantity`

### ** API**
- `useFetchProducts.js` — Axios-based custom hook to fetch product data

### **Styling**
Each component has its own CSS file in `src/`, including:
- `ProductList.css`
- `ProductItem.css`
- `ProductDetail.css`
- `Card.css`
- `Header.css`

---

##  How the App Works (User Journey)

1. The app loads through `main.jsx`, which initializes the Redux store.
2. `App.jsx` renders the `Header` and the correct page based on the route.
3. On the Home page:
   - `ProductList` calls `useFetchProducts`
   - Products are fetched from `https://dummyjson.com/products`
   - Each product is shown using `ProductItem`
4. Clicking “View Details” opens `/product/:id`, which loads product details.
5. Clicking “Add to Cart” dispatches Redux action `addToCart`.
6. Cart state updates in `CardSlice.js`, and the cart count updates in the header.
7. `/cart` page shows:
   - Items added to cart  
   - Quantity controls  
   - Remove button  
   - Total updates automatically

---

##  Cart State Shape

**Initial state:**
```js
{
  items: []
}

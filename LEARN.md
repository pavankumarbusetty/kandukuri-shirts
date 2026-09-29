# Learn Kandukuri Shirts, one step at a time

First run the project. Keep the app open in one window and VS Code in another. Do not try to learn every file at once.

## Your two-day route

Day 1: main.jsx → App.jsx overview → product/shop data → Navbar/Footer → ProductCard → Home → Products.
Day 2: ProductDetails → addToCart → quantity/removal → derived totals → localStorage → WhatsApp drafts → demo rehearsal.

## Lesson 1: where the app starts

Open src/main.jsx. It imports App, finds the HTML element with id="root", and asks React to display App there. BrowserRouter wraps App so links and routes work inside it. StrictMode provides development checks.

Now open index.html. Find `<div id="root"></div>`. That is the place React fills with your application.

Next open App.jsx. Ignore the helper functions temporarily and look at its return statement. Navbar is above Routes, Footer is below it. Routes chooses Home, Products or Cart according to the URL. The product dialog is shown only when a product is selected.

Checkpoint: explain aloud why changing from Home to Products changes the middle of the screen while the navbar remains.

## Lesson 2: content and components

products.js is an array of ordinary JavaScript objects. shop.js holds the shop's contact details and a WhatsApp link helper. Neither is a database.

A component is a function that returns JSX describing part of the screen. ProductCard is reused for many products. Its product prop tells it which name, price and image to display. key identifies each repeated item to React.

Exercise: change one sample product name in products.js, save, and observe the app. Restore it afterward.

## Lesson 3: search, filters and routing

Products uses useState to remember search text, a price filter and a sorting choice. Input onChange handlers update that state. filter creates the matching list; sort orders it; map displays its ProductCards.

useSearchParams reads category and brand from the URL. That lets a Home brand card open a filtered Products page. Link changes routes without a full browser refresh.

Exercise: choose a brand from Home and inspect the URL. Then explain why no fourth page is needed.

## Lesson 4: the product options dialog

App stores selectedProduct. Clicking a ProductCard passes its product object upward by calling the function received through props. App then renders ProductDetails with that product.

The dialog keeps size, colour and style in its own state. useRef points to the native dialog element. The effect opens it and restores body scrolling when it closes. The form requires a size before adding.

Exercise: trace one click from ProductCard to App to ProductDetails. Do not focus on dialog styling yet.

## Lesson 5: the cart, carefully

App owns cart because both product pages and the Cart page need it. addToCart builds a key from product ID, size, colour and style. An existing key gets a larger quantity; a different key gets a new row.

setCart receives a function using the latest currentCart. map and filter create updated arrays. Spreading an item copies its properties before replacing quantity. This avoids changing existing React state directly.

reduce derives totalItems and totalPrice from the cart. Those totals do not need separate state, because the cart already contains everything needed to calculate them.

Exercise: add size 38 twice and size 40 once. Draw the two cart objects on paper, then calculate the total before checking the app.

## Lesson 6: persistence and enquiries

An effect saves cart selections to localStorage whenever cart changes. loadCart restores those selections on startup and matches them to the current product data. Prices are read from current product data, not trusted from saved storage. try/catch handles storage failures.

localStorage belongs to this browser and website origin. It is not a shared database or a live inventory system.

Cart creates a readable message from its items. encodeURIComponent safely puts that message into the WhatsApp URL. The link opens a draft; it does not automatically send a message, charge money or confirm an order.

Exercise: find where the business WhatsApp number is configured, and explain how a product's size reaches the draft text.

## Before the director demo

Be able to answer: Where is the cart stored? Why does App own it? What are props? How does a button update the screen? Why are two sizes separate items? What does localStorage preserve? What does React Router do? What happens when the customer clicks the WhatsApp button?

You do not need to memorise CSS. Learn the layout groups and the media queries after understanding the React flow.

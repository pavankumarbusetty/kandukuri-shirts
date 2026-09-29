# Kandukuri Shirts — complete React project

## Run in VS Code

1. Extract Kandukuri-Shirts.zip into a new folder. The earlier UrbanThread project is separate.
2. Open the `kandukuri-shirts` folder containing package.json in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install`, then `npm run dev`.
5. Open the local URL printed by Vite (normally http://localhost:5173).

Use Node.js 22.12 or newer; Node.js 24 works. Do not run create-vite inside this completed project.

## What is included

- Three pages: Home, Products, Cart.
- Shop identity, brand collection links, featured products, categories, new additions, offers enquiry, directions, calling, and FAQs.
- 14 reference catalogue items, including official Peaks by Kandukuri, Uathayam/Ariser, and Trident imagery, plus illustrative store selections.
- Search by name, brand, code, or category; category/brand/price filters; price and newest sorting.
- Product detail dialog, larger image viewing, size/colour/style selectors, and size-chart enquiries.
- Separate cart entries for different selections; quantities, removal, and totals.
- Cart saved in localStorage on this browser; invalid stored entries are ignored. Quantity range: 1–99.
- Individual-product and full-cart WhatsApp drafts, with an optional cart note. The customer reviews and sends the message.
- Keyboard labels, native dialog behaviour, and responsive CSS.

## Simple architecture

Only React, React DOM, React Router, Vite, and the React Vite plugin are installed. There is no backend, database, account system, Redux, Context API, or UI component library.

App.jsx owns the cart and selected product. Pages receive data and functions as props. ProductDetails owns only the current form choices. Products owns its search/filter controls. Cart owns its optional enquiry note.

## Before using this for real customers

This is a working shop prototype, with sample prices and enquiry options clearly labelled. It does not claim live stock or accept payments. Confirm actual items, prices, options and brand image reuse rights before publishing. Store selections use illustrative stock photos; official brand photos are collection references, not proof that the exact item is stocked.

Business phone 8639305478 and the Gandhi Road address came from the matching public business listing. Verify the WhatsApp number and address in src/data/shop.js before sharing publicly. Hours, exchange conditions, and delivery terms have not been invented: the app asks customers to check with the shop. No storefront photo was supplied; the hero is a Peaks collection image.

Trident bed/bath references are included as proposed; remove those entries if the shop does not stock these categories. No discount is fabricated: the offer section opens an enquiry.

Edit src/data/products.js for products, sample prices and available options. Edit src/data/shop.js for shop details and the catalogue notice. An owner changing localStorage does not update other customers' catalogues; publish a new build after editing the source data.

## Build

Run `npm run build`. To inspect the production build locally, run `npm run preview` and open the printed URL. For future hosting, configure SPA fallback to index.html for /products and /cart. Uploading the files to GitHub alone does not deploy the app.

## Demo rehearsal

1. Home: introduce Kandukuri Shirts and show the brand collection links.
2. Products: search for KS-001; clear filters; choose a brand and sort by price.
3. Open Uathayam White Shirt. Select size 38 and add it twice; select size 40 and add it once.
4. Cart: show two rows, three items, and reference total ₹3,897.
5. Increase/decrease a quantity and remove one size variant.
6. Refresh to show the cart is saved.
7. Show the WhatsApp enquiry button. Explain that it opens a draft and the shop confirms availability and price. You do not need to send a message during the demo.

Director explanation: “This is a React catalogue and enquiry app for our family shop. Customers can browse brands, filter products, choose options, and maintain a cart. App.jsx owns the cart state and shares it through props. React Router provides three pages, and localStorage preserves the cart in the same browser. The final action prepares a WhatsApp enquiry for our shop to confirm. Product data is kept in a simple JavaScript file.”

## Verification

The production build and 22 isolated React component/state checks passed, including variant identity, totals, persistence, corrupt storage, filters, sorting, and WhatsApp draft contents. No WhatsApp messages were sent. Browser visual QA was blocked by the environment's browser URL policy; check the rendered desktop/mobile layout in your local browser.

## Learning

Start with LEARN.md after the app runs. STEP-BY-STEP.md contains the exact creation commands, package installation, folder structure and every complete source file. Image credits are in public/images.

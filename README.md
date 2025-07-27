# 🌄 Mementum Dashboard

**Mementum Dashboard** is a minimalist and customizable new tab dashboard designed to enhance your focus and productivity. Inspired by projects like [Momentum](https://momentumdash.com/) and [Scrimba](https://scrimba.com/home) course, it displays the current time, date, and includes personal widgets such as a to-do list, cryptocurrency price and weather updates. The entire codebase was written by me from scratch, without copying from external sources.

> ⚠️ This project is a work in progress. Some features are not yet implemented, and full responsiveness is still being developed.

🔗 **Live Demo**: [friendly-pegasus-322d99.netlify.app](https://lukaszmateuszsobczak.github.io/dashBoard/)

---

## ✨ Features

### ✅ Implemented

-   🕒 Live clock and current date
-   🖼 Clean, modern UI with responsive fonts and icons
-   🎨 Custom fonts via Google Fonts
-   🧩 Font Awesome icons for visual polish
-   🪙 Crypto card component. It fetches real-time cryptocurrency price data from the [coingecko]([https://openweathermap.org/]https://www.coingecko.com/en/api) and displays it in a clean, user-friendly layout
-   ✅ **To-do list widget** with:
    -   Task adding and deleting
    -   Task persistence using `localStorage`
    -   Unique task IDs generated via `uuidv4`
    -   Smooth checkbox logic and DOM updates
-    🌡️ Weather card component. It fetches real-time weather data from the [OpenWeather API](https://openweathermap.org/) and displays it in a clean, user-friendly layout
-    📲 Fully responsive and adapts to different screen sizes, including mobile phones, tablets, and desktops.

### 🚧 In Progress / Planned

-   ⚙️ Customization options (backgrounds, user greeting, etc.)

---

## ⚙️ Built With

-   🔧 [Vite](https://vitejs.dev/) – for lightning-fast development environment and modern module bundling
-   📦 [`uuid`](https://www.npmjs.com/package/uuid) – used to generate unique IDs for list items in the to-do component
-   🧪 Vanilla JavaScript – no frameworks, minimal and performant
-   🎨 Google Fonts & Font Awesome – for fonts and icons

---

## 🚀 Getting Started

To run the project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/LukaszMateuszSobczak/dashBoard.git
    cd dashboard
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with your API keys:

    ```env
    VITE_COINGECKO_API_KEY=your_coingecko_api_key_here
    VITE_UNSPLASH_API_KEY=your_unsplash_api_key_here
    ```

    > 🔐 Make sure your `.env` file is listed in `.gitignore` and never committed to GitHub.  
    > 📝 In Vite, environment variables must start with `VITE_` to be accessible in your code via `import.meta.env`.

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Build for production:
    ```bash
    npm run build
    ```

---

## 📌 License

This project is for educational and personal learning purposes. Use freely and contribute if you'd like!

---

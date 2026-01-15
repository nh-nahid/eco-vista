# 🌿 EcoVista

EcoVista is a modern web application built with Next.js App Router that visualizes ecological and environmental data from external public APIs along with custom APIs built inside Next.js.
The project focuses on presenting climate, environmental, and sustainability-related information through a clean, responsive, and immersive user interface.

---

## 💻 Features


- 🌱 Ecological data dashboard as homepage
- 🔌 Data fetched from external environmental APIs
- 🧩 Custom API routes built with Next.js Route Handlers
- 📊 Formatted metrics (temperature, air quality, humidity, etc.)
- 🚫 Custom 404 pages for invalid routes or data
- ⚡ Optimized images using next/image
- 📊 Parallel slots for different segment

---

## 🛠 Tech Stack

- **Next.js 14** 
- **React.js**
- **Tailwind CSS**
- **External REST APIs (environment & ecology related)**


## 🖼️ Screenshots

| Home Page | News Detail Page |
|-----------|-----------------|
| ![Home Page](./public/home.png) | ![Video Detail Page](./public/details.png) |


## 📂 Project Structure

```
assignment-7/
├── app/
│   ├── [lang]          
|   |     ├── (.)news
|   |     |       └── [slug]
|   |     |            └── page.js
│   |     ├── dictionaries
|   |     |     ├── bn.json
|   |     |     └── en.json
|   |     ├── news
|   |     |     └── [slug]
|   |     |            ├── not-found.js
|   |     |            └── page.js
|   |     ├── dictionaries.js
|   |     ├── layout.js
|   |     └── page.js 
│   ├── api/
│   |    ├── news
|   |    ├── [slug]
|   |    ├──   └── route.js
│   |    └── route.js
|   ├── layout.js
|   └── not-found.js  
├── components/            
│   ├── Header.jsx
|   ├── Modal.jsx
│   └── ...other components
├── lib/
│   ├── data.json
|   └── exportData.js         
├── utils/
│   └── utils.js         
├── package.json
└── tailwind.config.js      

```


---

## 🚀 Getting Started
 
```bash
git clone https://github.com/Learn-with-Sumit/batch-4-assignment-7-dev-news-nh-nahid
cd assignment-7

npm install
npm run dev
# or
yarn dev

Open http://localhost:3000
to view the project.

```

## 📝 Usage

- Click on any news card from the home page to open its details.
- When opened from the home page, the news appears in a modal overlay.
- Reloading the page or visiting the URL directly opens the news as a full page.
- The URL includes the news title as a slug (e.g. /news/ai-agents-are-taking-over).
- Invalid or unknown slugs display a custom dark 404 page with a helpful message.
- Views, upvotes, and downvotes are automatically formatted (e.g. 1.2K, 3.4M).
- Published dates are converted to human-readable formats.
- Use the loading state (or throttle network speed in DevTools) to simulate data fetch delays.


## 🔗 Future Improvements

- Add server-side data persistence using a database or external API instead of static JSON.
- Implement user authentication to enable personalized experiences and protected actions.
- Introduce commenting and discussion threads to encourage community engagement.
- Enhance SEO and performance optimization with dynamic metadata and caching strategies.

## 👨‍💻 Author

Nahid Hossain
- 💻 I love building innovative web applications.
- 🎯 Focused on solving real-world problems with technology.
- 🌱 Always learning and experimenting with new technologies.

## 📄 License
All right reserved by LWS

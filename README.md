# CommunionHub React Application

A simple two-page React web application that connects people across faiths and communities.

## Overview

This project is a simplified version of the Communion app, designed to connect diverse faith communities through events and collaboration. The application consists of:

- **Home Page**: A landing page with information about the Communion platform
- **Events Page**: A page where users can view, filter, and add community events

## Features

- Responsive design for both desktop and mobile
- Animated UI with smooth transitions using Framer Motion
- Event filtering by category and search
- Form to add new events
- Clean, modern UI inspired by the reference design

## Screenshots

![Home Page](/public/home.png)

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion for animations
- React Router for navigation
- React Icons for UI icons
- Date-fns for date formatting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Hmtgit7/communionHub.git
   cd communionHub
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Deployment

This project can be deployed to Vercel or Netlify by connecting your repository to their platforms.

### Deploying to Vercel

1. Push your code to GitHub
2. Import your project on Vercel
3. Deploy

### Deploying to Netlify

1. Push your code to GitHub
2. Import your project on Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

## Project Structure

```
communion-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── EventCard.jsx
│   │   ├── EventForm.jsx
│   │   └── EventFilter.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Events.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
├── tailwind.config.js
└── README.md

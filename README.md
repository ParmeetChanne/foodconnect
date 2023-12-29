# 🍲 FoodSec - A Full Stack FoodSharing Platform

This project utilizes modern technologies to facilitate sharing surplus food and managing events efficiently.

**CHECK OUT THE LIVE APP! <a href="https://foodsecure.vercel.app">foodsecure.vercel.app</a>**

## Tech Stack

- Node.js: Backend
- Next.js: Frontend
- TypeScript: Scripting
- TailwindCSS: Styling
- Stripe: Authentication
- Zod: Schema Declaration & Error Handling
- React Hook Form: Easier Form Validation and Management
- Shadcn: Clean and Modern Frontend Components
- Uploadthing: Uploading Server For Images
- Vercel: Seamless Auto-Deployments with Github Integration

## Features

### Authentication with Clerk
- CRUD operations: User management via Clerk ensures secure and efficient authentication.

### Food Offerings Management Features (CRUD)
- Comprehensive CRUD functionality for food offerings: Create, Read, Update, and Delete offerings.
  - **Create Offerings:** Easily generate new offerings with title, availability, location, and additional details.
  - **Read:** Access detailed food information including descriptions, availability, and more.
  - **Update:** Dynamically modify food details for accuracy.
  - **Delete:** Streamlined process for administrators to manage and curate the platform effectively.
- **Related Offerings:** Smartly connects related offerings with similar categories, enhancing engagement on event details pages.

### Display Offerings
- Efficiently display offerings created by users on their profile.

### Search & Filter
- Robust search and filter system empowering users to find preferred offerings effortlessly.

### Category Management
- Dynamic categorization for seamless addition of new food categories, ensuring adaptability.

### Stripe Integration
- Smooth and secure payment transactions using Stripe, improving user checkout experience.

### Order Management
- Comprehensive order management system providing a clear overview of food-related transactions.
- Efficient search functionality for orders, facilitating easy tracking and management.
- Robust code architecture and reusability.

## Quick Start

Follow these steps to set up the project locally on your machine:

### Prerequisites
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository
```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

# Installation

```npm install```

# Setting Up Environment Variables
Create a new file named .env in the root of your project and add the following content:
```js
//NEXT
NEXT_PUBLIC_SERVER_URL=

//CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

//MONGODB
MONGODB_URI=

//UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

//STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

# Running the Project
```js
npm start
```

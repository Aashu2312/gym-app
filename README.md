GymTrackr 🏋️

GymTrackr is a frontend-based gym management and member engagement web application built with React and TypeScript.

The application provides separate interfaces for gym members and gym owners. Members can manage their membership, payments, workouts, nutrition information, and announcements, while owners can manage members, payments, and gym announcements.

Features

Member

* Member registration and login
* Membership status and expiry
* Monthly payment tracking
* Workout plans and exercise information
* Nutrition and calorie calculator
* Gym announcements

Owner

* Owner dashboard
* View registered members
* View and manage payment status
* Create and publish announcements

Integrations

* Wger API for exercise information
* MyPlate.food API for nutrition calculations

Tech Stack

* React
* TypeScript
* Tailwind CSS
* HeroUI
* React Router
* localStorage
* Wger API
* MyPlate.food API

Getting Started

Prerequisites

Make sure you have Node.js and npm installed.

Installation

Clone the repository:

git clone https://github.com/your-username/gymtrackr.git
cd gymtrackr

Install dependencies:

npm install

Start the development server:

npm run dev

Open the URL shown in the terminal, usually:

http://localhost:5173

Demo Owner Account

For the owner dashboard:

Email: pavbhatura@gmail.com
Password: horse123

Members can create their own accounts through the registration option.

Project Structure

src/
├── data/
│   ├── announcements.ts
│   ├── members.ts
│   └── payments.ts
├── pages/
│   ├── loginPage.tsx
│   ├── memberDash.tsx
│   ├── memberMembership.tsx
│   ├── memberPayment.tsx
│   ├── memberWorkout.tsx
│   ├── memberDiet.tsx
│   ├── memberAnnouncements.tsx
│   ├── ownerDash.tsx
│   ├── ownerMembers.tsx
│   ├── ownerPayments.tsx
│   ├── ownerAnnouncements.tsx
│   └── protectedRoute.tsx
├── auth.ts
├── App.tsx
└── main.tsx

Note

GymTrackr is currently a frontend-only prototype. Authentication and data storage are implemented on the client side using localStorage. It does not currently include a backend, database, or real payment gateway.

Future Scope

* Backend and database integration
* Secure server-side authentication
* Real payment gateway
* Push notifications
* Cloud deployment
* Advanced gym administration features

# Pickup Lines Ultra

Welcome to **Pickup Lines Ultra**, a modern, cross-platform application designed to provide users with a curated collection of Hinglish quotes for every mood. Built with a powerful tech stack, this app ensures a high-quality user experience, 100% offline capabilities, and a dynamic, emotionally engaging interface.

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/ecstatic-mhefl.appspot.com/o/app-screenshot.png?alt=media&token=81c1c72f-5b87-4221-829d-4394017c603b)

## Table of Contents

1.  [Why This App is the Best](#why-this-app-is-the-best)
2.  [Core Features](#core-features)
3.  [Tech Stack](#tech-stack)
4.  [Getting Started](#getting-started)
5.  [Compatibility](#compatibility)
6.  [Android Publishing Guide](#android-publishing-guide)

---

## Why This App is the Best

While there are many quote apps available, **Pickup Lines Ultra** stands out for several key reasons:

-   **100% Offline Capable**: Unlike most apps that require an internet connection, this app is designed to work completely offline. All quotes, categories, and core features are available anytime, anywhere, making it the perfect companion for your daily commute, travel, or any situation with limited connectivity.

-   **High-Quality UI/UX**: This is not just another list of text. It features a professional, aesthetically pleasing design with smooth animations powered by Framer Motion, a custom animated splash screen, and a beautiful, themeable interface (light/dark modes) that feels premium and responsive.

-   **Progressive Web App (PWA)**: The app is a fully installable PWA. This means you can add it to your home screen on any device (mobile, tablet, or desktop) and use it just like a native app, with the added benefit of offline access.

-   **True Cross-Platform Experience**: Built on a single, modern codebase using Next.js and Capacitor, it runs flawlessly on the web, as a desktop PWA, and as a native app on both iOS and Android. This ensures a consistent and high-quality experience no matter which device you use.

-   **Interactive & Shareable Content**: The app goes beyond simple text display. Users can swipe through beautifully designed quote cards, copy text with one tap, bookmark their favorites, and—most importantly—share quotes as clean, branded images perfect for social media platforms like Instagram, WhatsApp, and Facebook.

---

## Core Features

-   **Hinglish Quote Display**: A curated collection of mood-based quotes in Hinglish, tailored for a casual and emotional user experience.
-   **Dashboard with Category Cards**: An elegant home screen with a search bar and beautifully styled category cards.
-   **Category Detail Screen**: Interactive content cards displaying an emoji, a heading, and action buttons (like, save, copy, share).
-   **Image Generator**: Instantly create and share beautiful, branded images of your favorite quotes.
-   **Offline PWA Support**: The entire app, including all quotes and categories, works perfectly without an internet connection.
-   **Theme Management**: Switch between light, dark, and system-default themes.
-   **Animated Splash Screen**: A smooth, animated splash screen with a progress bar for a professional first impression.
-   **Settings Page**: A clean, card-based settings page for feedback, support, and app preferences.

---

## Tech Stack

This project is built using a modern and robust technology stack:

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **UI Library**: [React](https://reactjs.org/) with [ShadCN UI](https://ui.shadcn.com/) components
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Database**: Offline-first using bundled data.
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Mobile Bridge**: [Capacitor](https://capacitorjs.com/) (for iOS and Android)
-   **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

To get the project up and running on your local machine, follow these simple steps.

### Prerequisites

-   Node.js (v20 or later)
-   npm or yarn
-   Android Studio (for Android SDK)

### Installation & Running the App

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/pickup-lines-ultra.git
    cd pickup-lines-ultra
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will now be running on `http://localhost:3000`.

---

## Compatibility

This application is designed for modern devices and browsers to ensure the best user experience.

-   **Android:** Version 6.0 (Marshmallow) and above.
-   **iOS:** Version 12.0 and above.
-   **Web Browsers:** Latest versions of Google Chrome, Mozilla Firefox, and Safari.

Users on older devices or unsupported browsers may see a warning and experience limited functionality.

---

## Android Publishing Guide

Publishing your app to the Google Play Store is a straightforward process. Here is a step-by-step guide.

### Step 1: Get Your App Files (.aab & .apk) from GitHub

Your app files are **automatically built by GitHub** every time you push new code. You just need to download them.

1.  **Push Code to GitHub**: This happens automatically when you click "Apply Changes" in Firebase Studio.
2.  **Go to the "Actions" Tab on GitHub**:
    *   In your GitHub repository, click on the **"Actions"** tab at the top. If you are unsure where your repository is, you can find the link in the "Source" tab of your Firebase Studio environment.
3.  **Find Your Completed Workflow**:
    *   You will see a list of workflows. Look for the latest one named **"Build Android App Bundle & APK"**.
    *   Wait for it to finish. It will show a **green checkmark (✅)** when it's done. This can take 5-10 minutes.
    *   Click on the name of the completed workflow (e.g., "Final cleanup and prep for release").
4.  **Download the Artifacts**:
    *   On the new page, scroll down to the bottom. You will see a section called **"Artifacts"**.
    *   You will find two files available for download:
        *   **`app-release-bundle`**: This contains your `.aab` file for the Play Store.
        *   **`app-release-apk`**: This contains a universal `.apk` file for direct testing on phones.
    *   Click on each one to download it.
5.  **Unzip and Find Your Files**:
    *   The downloaded files will be in `.zip` format. Unzip them.
    *   Inside `app-release-bundle`, you will find your **`app-release-unsigned.aab`** file. This is the file you will upload to the Play Store.
    *   Inside `app-release-apk`, you will find your **`app-release-unsigned.apk`** file. You can use this to test the app directly.

### Step 2: Add Release Keys to Firebase

This is a **crucial** step. If you miss this, Google Sign-In or other Firebase services will **not** work in your published app.

1.  **Get Your Release Keys from Google Play Console:**
    *   Login to your [Google Play Console](https://play.google.com/console).
    *   Select your app and go to **Setup > App integrity**.
    *   Under "App signing key certificate", copy your **SHA-1** and **SHA-256** fingerprints.

2.  **Add Keys to Firebase:**
    *   Go to your [Firebase Console](https://console.firebase.google.com/) and open your project.
    *   Go to **Project settings** (⚙️ icon) > **Your apps** > Select your Android app.
    *   Scroll to **"SHA certificate fingerprints"**.
    *   Click **"Add fingerprint"** and paste the **SHA-1** key, then repeat for the **SHA-256** key.

### Step 3: Publish to Google Play Store

1.  **Login to Play Console** and select your app.
2.  **Create New Release**: Go to the **Production** track and click **"Create new release"**.
3.  **Upload App Bundle**: Upload the `app-release-unsigned.aab` file you downloaded from GitHub. Google will handle the signing for you.
4.  **Enter Release Details**: Fill in the "Release name" (e.g., `1.1.0`) and write release notes describing the changes.
5.  **Review and Rollout**: Click **"Review release"**, and if everything looks good, click **"Start rollout to Production"**.

That's it! Google will review your update, and it will be live on the Play Store within a few hours to a day.

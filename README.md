# Pickup Lines Ultra

Welcome to **Pickup Lines Ultra**, a modern, cross-platform application designed to provide users with a curated collection of pickup lines in Hinglish. The app is built with a powerful tech stack, ensuring a high-quality user experience, offline capabilities, and a dynamic backend.

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/ecstatic-mhefl.appspot.com/o/app-screenshot.png?alt=media&token=81c1c72f-5b87-4221-829d-4394017c603b)

## Table of Contents

1.  [Getting Started](#getting-started)
2.  [Tech Stack](#tech-stack)
3.  [Core Features](#core-features)
4.  [Deployment](#deployment)
5.  [Android Publishing Guide](#android-publishing-guide)
    *   [Generating Firebase SHA Fingerprints](#generating-firebase-sha-fingerprints)
    *   [Building the App Bundle for Google Play](#building-the-app-bundle-for-google-play)

---

## Getting Started

To get the project up and running on your local machine, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn

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

The application will now be running on [http://localhost:9002](http://localhost:9002).

## Tech Stack

This project is built using a modern and robust technology stack:

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **UI Library**: [React](https://reactjs.org/) with [ShadCN UI](https://ui.shadcn.com/) components
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Database**: [Firebase Firestore](https://firebase.google.com/docs/firestore) (for real-time data)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Mobile Bridge**: [Capacitor](https://capacitorjs.com/) (for iOS and Android)
-   **Icons**: [Lucide React](https://lucide.dev/)

## Core Features

-   **Dynamic Backend**: Categories and quotes are fetched in real-time from Firebase Firestore, allowing for easy content updates without code changes.
-   **High-Quality UI/UX**: A professional design with smooth animations, a custom splash screen, and a themeable interface (light/dark modes).
-   **Progressive Web App (PWA)**: Fully installable on user devices with offline access to cached content.
-   **Interactive Quote Cards**: Users can swipe through quotes, copy them, bookmark favorites, and share them as clean, branded images.
-   **Cross-Platform**: A single codebase that runs on the web, as a desktop PWA, and as a native app on iOS and Android.

## Deployment

The application is a Progressive Web App (PWA) and can be deployed to various platforms:

-   **Web**: Easily deploy to [Firebase Hosting](https://firebase.google.com/docs/hosting) (recommended), Vercel, or Netlify. The project is pre-configured for static export.
-   **Mobile (iOS & Android)**: Using Capacitor, the web app can be wrapped and published to the Apple App Store and Google Play Store. The necessary configuration files and build scripts are already included.

## Android Publishing Guide

To publish the app on the Google Play Store, you need to configure Firebase and generate a signed App Bundle.

### Generating Firebase SHA Fingerprints

To use Firebase services like Google Sign-In or Push Notifications, you must add your app's SHA-1 and SHA-256 fingerprints to your Firebase project.

**1. Get Debug Keys (for development):**
   - Navigate to the `android` folder in your project: `cd android`
   - Run the command: `./gradlew signingReport`
   - Copy the **SHA-1** and **SHA-256** values from the output under the `Variant: debug` section.

**2. Add Keys to Firebase:**
   - Go to your **Firebase Console** > **Project settings**.
   - Select your Android app.
   - Click **"Add fingerprint"** and paste the SHA-1 key.
   - Click **"Add fingerprint"** again and paste the SHA-256 key.

**3. Get Release Keys (for publishing):**
   - When you upload your app to the Google Play Console, Google manages your release key.
   - In the **Play Console**, navigate to **Setup > App integrity**.
   - Under the **"App signing"** tab, you will find the SHA-1 and SHA-256 fingerprints for your release build.
   - Copy these keys and add them to the Firebase Console, just as you did with the debug keys.

### Building the App Bundle for Google Play

This project is configured with **GitHub Actions** to automatically build your Android App Bundle (`.aab`) every time you push code to the `main` branch.

**How to get your signed `.aab` file:**

1.  **Push to `main`**: Ensure your latest code is on the `main` branch on GitHub.
2.  **Go to GitHub Actions**: Open your repository on GitHub and click the **"Actions"** tab.
3.  **Download the Artifact**:
    *   Wait for the "Build Android App Bundle" workflow to complete (it will show a ✅).
    *   Click on the completed workflow run.
    *   Scroll down to the **"Artifacts"** section and download the **`app-release`** artifact.
4.  **Upload to Play Store**:
    *   Unzip the downloaded file to find your `app-release.aab`.
    *   This is the file you upload to the Google Play Console for publishing.

> **Note**: For the automated build to work, you must first create your own release key and add its credentials as secrets in your GitHub repository. The workflow file (`.github/workflows/android-build.yml`) expects the following secrets: `MY_KEYSTORE_BASE64`, `MY_KEYSTORE_PASSWORD`, `MY_KEY_ALIAS`, and `MY_KEY_PASSWORD`.

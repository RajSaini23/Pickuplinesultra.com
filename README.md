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

To publish the app on the Google Play Store, you need to configure Firebase and generate an App Bundle.

### Generating Firebase SHA Fingerprints

To use Firebase services like Google Sign-In, App Check (Play Integrity), or Push Notifications, you must add your app's SHA-1 and SHA-256 fingerprints to your Firebase project.

**1. Get Your SHA Keys (Easiest Method):**
   - This project includes a simple command to get your debug and release keys.
   - Run the following command in your terminal:
     ```bash
     npm run android:signingreport
     ```
   - This command will output the **SHA-1** and **SHA-256** fingerprints for both your `debug` and `release` builds.

**2. Manual Method (Using Keytool):**
   - If you manage your own keystore file, you can use the `keytool` utility (part of the Java JDK).
   - The default debug keystore is typically located at `~/.android/debug.keystore`.
   - To get the SHA-1 fingerprint, run the following command:
     ```bash
     # For Debug Keystore
     keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

     # For a custom Release Keystore
     keytool -list -v -keystore <path-to-your-release-keystore> -alias <your-release-key-alias>
     ```
   - You will be prompted for the keystore password.

**3. Understanding Debug vs. Release Keys:**
   - **Debug Keys**: The `Variant: debug` section shows the keys used when you run the app on your local machine or an emulator. You need these for testing Firebase services during development.
   - **Release Keys**: When you upload your app to the Google Play Console, Google manages your release key using a feature called **Play App Signing**. You can find these keys in the Play Console under **Setup > App integrity**. These are the official keys for your live app.

**4. Add All Four Keys to Firebase:**
   - Go to your **Firebase Console** > **Project settings** (click the ⚙️ icon).
   - Select your Android app.
   - Scroll down to the **"SHA certificate fingerprints"** section.
   - Click **"Add fingerprint"** and paste the **debug SHA-1** key from the terminal output.
   - Repeat this process to add all four fingerprints:
     - Debug SHA-1
     - Debug SHA-256
     - Release SHA-1 (from Play Console)
     - Release SHA-256 (from Play Console)
   - It is crucial to add all four fingerprints to ensure Firebase works correctly in all scenarios.

### Building the App Bundle for Google Play

This project is configured with **GitHub Actions** to automatically build an **unsigned** Android App Bundle (`.aab`) every time you push code to the `main` branch. You can then upload this file directly to the Google Play Store, and Google will handle the signing for you.

**How to get your `.aab` file:**

1.  **Push to `main`**: Ensure your latest code is on the `main` branch on GitHub.
2.  **Go to GitHub Actions**: Open your repository on GitHub and click the **"Actions"** tab.
3.  **Download the Artifact**:
    *   Wait for the "Build Android App Bundle" workflow to complete (it will show a ✅).
    *   Click on the completed workflow run.
    *   Scroll down to the **"Artifacts"** section and download the **`app-release-unsigned`** artifact.
4.  **Upload to Play Store**:
    *   Unzip the downloaded file to find your `app-release-unsigned.aab`.
    *   This is the file you upload to the Google Play Console for publishing. Google Play will sign the app for you using a secure key that it manages.

# Pickup Lines Ultra

Welcome to **Pickup Lines Ultra**, a modern, cross-platform application designed to provide users with a curated collection of pickup lines in Hinglish. The app is built with a powerful tech stack, ensuring a high-quality user experience, offline capabilities, and a dynamic backend.

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/ecstatic-mhefl.appspot.com/o/app-screenshot.png?alt=media&token=81c1c72f-5b87-4221-829d-4394017c603b)

## Table of Contents

1.  [Getting Started](#getting-started)
2.  [Tech Stack](#tech-stack)
3.  [Core Features](#core-features)
4.  [Android Publishing Guide](#android-publishing-guide)
    *   [Step 1: Set Up Firebase for Android](#step-1-set-up-firebase-for-android)
    *   [Step 2: Update App Version](#step-2-update-app-version)
    *   [Step 3: Get Your App Bundle (.aab) File](#step-3-get-your-app-bundle-aab-file)
    *   [Step 4: Publish to Google Play Store](#step-4-publish-to-google-play-store)

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

The application will now be running on `http://localhost:9002`.

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

## Core Features

-   **100% Offline Capable**: The entire app, including all quotes and categories, works perfectly without an internet connection.
-   **High-Quality UI/UX**: A professional design with smooth animations, a custom splash screen, and a themeable interface (light/dark modes).
-   **Progressive Web App (PWA)**: Fully installable on user devices with offline access to cached content.
-   **Interactive Quote Cards**: Users can swipe through quotes, copy them, bookmark favorites, and share them as clean, branded images.
-   **Cross-Platform**: A single codebase that runs on the web, as a desktop PWA, and as a native app on iOS and Android.

---

## Android Publishing Guide

Publishing your app to the Google Play Store is a straightforward process. Here is a step-by-step guide.

### Step 1: Set Up Firebase for Android

To use Firebase services like Google Sign-In, App Check, or Push Notifications, you must add your app's SHA-1 and SHA-256 fingerprints to your Firebase project.

**1. Get Your SHA Keys:**
   - This project includes a simple command to get your debug keys.
   - Run the following command in your terminal:
     ```bash
     npm run android:signingreport
     ```
   - This command will output the **SHA-1** and **SHA-256** fingerprints for your `debug` build.

**2. Find Your Release Keys in Google Play Console:**
   - When you upload your app to the Google Play Console for the first time, Google manages your release key using a feature called **Play App Signing**.
   - You can find these keys in the Play Console under **Your App > Setup > App integrity**.
   - Look for the "App signing key certificate" section to find the SHA-1 and SHA-256 fingerprints.

**3. Add All Four Keys to Firebase:**
   - Go to your **Firebase Console** > **Project settings** (click the ⚙️ icon).
   - Select your Android app.
   - Scroll down to the **"SHA certificate fingerprints"** section.
   - Click **"Add fingerprint"** and paste the **debug SHA-1** key from the terminal output.
   - Repeat this process to add all four fingerprints:
     - Debug SHA-1 (from terminal)
     - Debug SHA-256 (from terminal)
     - Release SHA-1 (from Play Console)
     - Release SHA-256 (from Play Console)
   - It is crucial to add all four fingerprints to ensure Firebase services work correctly in all scenarios.

### Step 2: Update App Version

Before creating a new release, you must increase the version number of your app.

-   **File to Edit**: `android/app/build.gradle`
-   **What to do**:
    1.  Find the `android` block.
    2.  Increase the `versionCode` by 1 (e.g., if it's `1`, change it to `2`).
    3.  Update the `versionName` to reflect your new version (e.g., from `"1.0"` to `"1.1"`).

    ```groovy
    // Example from android/app/build.gradle
    android {
        ...
        defaultConfig {
            ...
            versionCode 2
            versionName "1.1"
            ...
        }
    }
    ```

### Step 3: Get Your App Bundle (.aab) File

This project is configured with **GitHub Actions** to automatically build an **unsigned** Android App Bundle (`.aab`) every time you push code to the `main` branch.

1.  **Push to `main`**: Ensure your latest code is on the `main` branch on GitHub.
2.  **Go to GitHub Actions**: Open your repository on GitHub and click the **"Actions"** tab.
3.  **Download the Artifact**:
    *   Wait for the "Build Android App Bundle" workflow to complete (it will show a ✅).
    *   Click on the completed workflow run.
    *   Scroll down to the **"Artifacts"** section and download the **`app-release-unsigned`** artifact.
4.  **Unzip and Find File**:
    *   Unzip the downloaded file. Inside, you will find your `app-release-unsigned.aab` file. This is the file you will upload to Google Play.

### Step 4: Publish to Google Play Store

1.  **Login to Play Console**: Go to your [Google Play Console](https://play.google.com/console) account.
2.  **Select Your App**: Click on your app, "Pickup Lines Ultra".
3.  **Create New Release**:
    *   In the left menu, navigate to the **Production** track.
    *   Click on **"Create new release"**.
4.  **Upload App Bundle**:
    *   In the "App bundles" section, upload the `app-release-unsigned.aab` file you downloaded from GitHub.
    *   **Play App Signing**: Google will automatically use its secure signing key to sign your app. This is the standard and recommended practice.
5.  **Enter Release Details**:
    *   **Release name**: This will likely auto-fill with the `versionName` you set (e.g., `1.1`).
    *   **Release notes**: In the "What's new in this release?" box, write down the changes you made (e.g., "Bug fixes and performance improvements.").
6.  **Review and Rollout**:
    *   Click **"Review release"**.
    *   The Play Console will show a summary. If there are no errors, click **"Start rollout to Production"**.

That's it! Google will review your update, and it will be live on the Play Store for all users within a few hours to a day.

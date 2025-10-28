# Pickup Lines Ultra

Welcome to **Pickup Lines Ultra**, a modern, cross-platform application designed to provide users with a curated collection of pickup lines in Hinglish. The app is built with a powerful tech stack, ensuring a high-quality user experience, offline capabilities, and a dynamic backend.

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/ecstatic-mhefl.appspot.com/o/app-screenshot.png?alt=media&token=81c1c72f-5b87-4221-829d-4394017c603b)

## Table of Contents

1.  [Getting Started](#getting-started)
2.  [Tech Stack](#tech-stack)
3.  [Core Features](#core-features)
4.  [Android Publishing Guide](#android-publishing-guide)
    *   [Step 1: Add Release Keys to Firebase](#step-1-add-release-keys-to-firebase)
    *   [Step 2: Update App Version](#step-2-update-app-version)
    *   [Step 3: Get Your App Bundle (.aab) File from GitHub](#step-3-get-your-app-bundle-aab-file-from-github)
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

### Step 1: Add Release Keys to Firebase

This is a **crucial** step. If you miss this, Google Sign-In, App Check, or Push Notifications will **not** work in your published app.

**1. Get Your Release Keys from Google Play Console:**
   - When you upload your app to the Google Play Console for the first time, Google manages your release key using a feature called **Play App Signing**.
   - Login to your [Google Play Console](https://play.google.com/console).
   - Select your app.
   - In the left menu, go to **Setup > App integrity**.
   - Under the "App signing key certificate" section, you will find your **SHA-1** and **SHA-256** fingerprints. Copy them.

**2. Add Keys to Firebase:**
   - Go to your [Firebase Console](https://console.firebase.google.com/) and open your project.
   - Go to **Project settings** (click the ⚙️ icon).
   - Select your Android app (`com.indgrowsive.pickuplines.app`).
   - Scroll down to the **"SHA certificate fingerprints"** section.
   - Click **"Add fingerprint"** and paste the **SHA-1** key from the Play Console.
   - Click **"Add fingerprint"** again and paste the **SHA-256** key.
   - Make sure you have added both keys.

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
            versionCode 2 // Change this to a new number
            versionName "1.1" // Change this to a new version name
            ...
        }
    }
    ```

### Step 3: Get Your App Bundle (.aab) File from GitHub

Your app file is **automatically built by GitHub** every time you push code. You just need to download it.

1.  **Push Code to GitHub**: Make sure all your latest changes are pushed to the `main` branch.

2.  **Go to the "Actions" Tab**: In your GitHub repository, click on the **"Actions"** tab at the top.

3.  **Find Your Completed Workflow**:
    *   You will see a list of workflows. Look for the latest one named "Build Android App Bundle".
    *   Wait for it to finish. It will show a **green checkmark (✅)** when it's done.
    *   Click on the name of the completed workflow.

4.  **Download the Artifact**:
    *   On the new page, scroll down to the bottom. You will see a section called **"Artifacts"**.
    *   Inside this section, you will find a file named **`app-release-unsigned`**. Click on it to download it.

5.  **Unzip and Find Your File**:
    *   The downloaded file will be a `.zip` file. Unzip it.
    *   Inside, you will find your **`app-release-unsigned.aab`** file. This is the final app file you need.

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

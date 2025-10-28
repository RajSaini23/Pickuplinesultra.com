
# Pickup Lines Ultra

Welcome to **Pickup Lines Ultra**, a modern, cross-platform application designed to provide users with a curated collection of pickup lines in Hinglish. The app is built with a powerful tech stack, ensuring a high-quality user experience, offline capabilities, and a dynamic backend.

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/ecstatic-mhefl.appspot.com/o/app-screenshot.png?alt=media&token=81c1c72f-5b87-4221-829d-4394017c603b)

## Table of Contents

1.  [Getting Started](#getting-started)
2.  [Tech Stack](#tech-stack)
3.  [Core Features](#core-features)
4.  [Android Publishing Guide](#android-publishing-guide)
    *   [Step 1: Get Your App Files (.aab & .apk) from GitHub](#step-1-get-your-app-files-aab--apk-from-github)
    *   [Step 2: Add Release Keys to Firebase](#step-2-add-release-keys-to-firebase)
    *   [Step 3: Publish to Google Play Store](#step-3-publish-to-google-play-store)

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

# **App Name**: Ecstatic

## Core Features:

- Hinglish Quote Display: Display mood-based quotes in Hinglish, tailored for a casual and emotional user experience targeting both urban and desi audiences.
- Offline PWA Support: Enable offline access to cached quotes, templates, and mood data, allowing at least 50% of the app's content to be used without an internet connection using Next-PWA.
- Theme Management: Allow users to switch between light, dark, and auto themes, with the auto theme switching between light mode from 6 am to 6 pm and dark mode from 6 pm to 6 am. Store user preferences locally.
- Animated Splash Screen: Show an animated splash screen for 3-4 seconds on launch, featuring the app logo with a smooth progress bar.
- Dashboard with Category Cards: Implement a home screen dashboard with a top header (app name and settings icon), a search bar for categories, and category cards with defined styles (size, rounded corners, shadow, hover effects, background color from categories.ts).
- Category Detail Screen: Show detail screens with content cards displaying an emoji, a heading, and like/save/copy/share buttons. Include an image generator for sharing on social media.
- Settings Page: Include card-based sections with settings rows, each containing an icon, title, and subtitle, as well as options for feedback and support.

## Style Guidelines:

- Primary color: Deep indigo (#4B0082), reflecting a blend of traditional and modern styles, aligning with the DESI SWAG category. This selection is optimal because the goal is to elicit strong emotion.
- Background color: Light gray (#E0E0E0) for light mode; very dark gray (#1A1A1A) for dark mode; these create a neutral backdrop that keeps focus on the content. This hue matches that of the primary.
- Accent color: Crimson (#EF476F), drawn from the ROMANTIC category, which complements the indigo, adding energy to interactive elements without overwhelming the interface.
- Primary font: 'Urbanist' (sans-serif) for a modern, clean feel.
- Hindi Support: 'Noto Sans Devanagari'.
- Use theme-adaptive icons (white or black) from flutter_vector_icons, applying Cupertino style for iOS and Material style for Android.
- Implement a mobile-first, responsive card grid layout, ensuring safe-area padding for iOS notch and Android status bar, designed to adapt smoothly to different screen sizes.
- Integrate Framer Motion, Lottie, and Rive for animations, optimizing card hover effects, splash screen pulses, and transitions to maintain 60fps.
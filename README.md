# 3D Portfolio - Francesco Alongi

A modern 3D portfolio built with React, Three.js, TypeScript and Tailwind CSS. Showcasing projects, skills, and experience with a fully functional contact form powered by EmailJS.

## 📋 Table of Contents

- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Acknowledgements](#acknowledgements)
- [Deploy on Netlify](#deploy-on-netlify)

## 📁 Folder Structure

```bash
3d-portfolio/
  |- public/
    |-- desktop_pc/
    |-- planet/
    |-- logo_clean.png
  |- src/
    |-- assets/
        |--- company/
        |--- projects/
        |--- socials/
        |--- tech/
        |--- index.ts
    |-- components/
        |--- canvas/
        |--- about.tsx
        |--- contact.tsx
        |--- experience.tsx
        |--- footer.tsx
        |--- hero.tsx
        |--- index.ts
        |--- loader.tsx
        |--- navbar.tsx
        |--- tech.tsx
        |--- works.tsx
    |-- constants/
        |--- index.ts
    |-- hoc/
        |--- index.ts
        |--- section-wrapper.tsx
    |-- locales/
        |--- index.ts
        |--- translations.ts
    |-- utils/
        |--- lib.ts
        |--- motion.ts
    |-- app.tsx
    |-- env.d.ts
    |-- index.css
    |-- main.tsx
    |-- styles.ts
  |- .env
  |- .gitignore
  |- index.html
  |- package.json
  |- tailwind.config.ts
  |- tsconfig.json
  |- vite.config.ts
```

## 🛠️ Getting Started

### Prerequisites

- Git
- NodeJS

### Setup Instructions

1. Clone this repository:
```bash
git clone https://github.com/Eagle1705/Portfolio.git
cd Portfolio
```

2. Create `.env` file in root directory with EmailJS configuration:

```env
VITE_APP_SERVICE_ID=your_service_id
VITE_APP_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_KEY=your_public_key
VITE_APP_EMAILJS_RECIEVER=your@email.com
```

3. Install dependencies:
```bash
npm install --legacy-peer-deps
```

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

### EmailJS Configuration

To set up EmailJS for the contact form:

1. Visit [EmailJS](https://emailjs.com)
2. Create/Log in to your account
3. Set up an Email Service
4. Create an Email Template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
5. Copy your **Service ID**, **Template ID**, and **Public Key** to `.env`

## 📸 Features

- 3D interactive background with Three.js
- Responsive mobile-first design
- Dark theme with modern UI/UX
- Multi-language support (English/Italian)
- Smooth animations with Framer Motion
- Functional contact form with EmailJS
- Optimized performance

## ⚙️ Tech Stack

- **React 18+** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - 3D Graphics
- **React Router** - Navigation
- **EmailJS** - Contact form service
- **Sonner** - Toast notifications

## 📦 Dependencies

Main dependencies:
- `@emailjs/browser` - Email service
- `@react-three/drei` - 3D utilities
- `@react-three/fiber` - 3D rendering
- `framer-motion` - Animations
- `react-router-dom` - Routing
- `react-vertical-timeline-component` - Timeline UI
- `tailwindcss` - CSS framework
- `three` - 3D library

See `package.json` for complete list.

## 📝 Acknowledgements

This project uses the following open-source libraries and resources:

- [React](https://react.dev/)
- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://emailjs.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)


## 📄 License

This project is open source and available under the MIT License. See [LICENSE](./LICENSE.md) for details.

---

**Built with ❤️ by Francesco Alongi**



Here is the folder structure of this app.

```bash
3d-portfolio/
  |- public/
    |-- desktop_pc/
    |-- planet/
    |-- apple-touch-icon.png
    |-- favicon.ico
    |-- favicon16.png
    |-- favicon32.png
  |- src/
    |-- assets/
        |--- company/
        |--- projects/
        |--- socials/
        |--- tech/
        |--- testimonials/
        |--- index.ts
    |-- components/
        |--- canvas/
        |--- about.tsx
        |--- banner.tsx
        |--- contact.tsx
        |--- experience.tsx
        |--- feedbacks.tsx
        |--- footer.tsx
        |--- hero.tsx
        |--- index.ts
        |--- loader.tsx
        |--- navbar.tsx
        |--- tech.tsx
        |--- works.tsx
    |-- constants/
        |--- index.ts
    |-- hoc/
        |--- index.ts
        |--- section-wrapper.tsx
    |-- utils/
        |--- lib.ts
        |--- motion.ts
    |-- app.tsx
    |-- env.d.ts
    |-- index.css
    |-- main.tsx
    |-- styles.ts
  |- .env
  |- .env.example
  |- .gitignore
  |- index.html
  |- package-lock.json
  |- package.json
  |- postcss.config.cjs
  |- tailwind.config.ts
  |- tsconfig.json
  |- vite.config.ts
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# .env

# email js configuration
VITE_APP_SERVICE_ID=XXXXXXXXXXXXXXXX
VITE_APP_TEMPLATE_ID=XXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_KEY=XXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_RECIEVER=your@email.com
```

5. ### Service ID (Replace VITE_APP_SERVICE_ID):

- Visit the website where you are obtaining the service ID.
- Log in to your account or sign up if needed.
- Navigate to the section related to API keys or services.
- Find and copy the Service ID associated with your account.

6. ### Template ID (Replace VITE_APP_TEMPLATE_ID):

- Visit [EmailJS](https://emailjs.com "EmailJS") Website.
- Log in to your account or sign up if necessary.
- Access the section for email templates or integration.
- Locate the template you want to use and copy its Template ID.

7. ### EmailJS Public Key (Replace VITE_APP_EMAILJS_KEY):

- Go to the EmailJS website.
- Log in to your account or create one if you haven't.
- Navigate to the dashboard or settings page.
- Look for API keys or integration settings.
- Copy the Public Key associated with your account.

![Copy public key](/.github/images/step_emailjs.png "Copy public key")

8. ### EmailJS Receiver (Replace VITE_APP_EMAILJS_RECIEVER):

- Choose the email address where you want to receive emails.
- If needed, create an email address or use an existing one.
- Ensure that the chosen email address is accessible and ready to receive emails.

9. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

10. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.


## :gear: Tech Stack

- **React JS** - UI Library
- **Vite JS** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Netlify** - Hosting

## :gem: Acknowledgements

Main dependencies used in this project:

- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser)
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei)
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber)
- [framer-motion](https://www.npmjs.com/package/framer-motion)
- [react](https://www.npmjs.com/package/react)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)
- [three](https://www.npmjs.com/package/three)

See `package.json` for complete list of dependencies.

## :page_with_curl: Deploy on Netlify

The easiest way to deploy your Vite.js app is to use the [Netlify Platform](https://netlify.app).

Check out [Vite.js deployment documentation](https://vitejs.dev/guide/static-deploy) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

---

**Built with ❤️ by Francesco Alongi**


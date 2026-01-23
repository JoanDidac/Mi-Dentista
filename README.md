# Mi Dentista - Clínica Dental Modern Website

A modern, responsive, and performant dental clinic website built with the latest web technologies. This project focuses on providing a premium user experience, seamless navigation, and easy contact integration.

## 🚀 Technologies

This project is built with a modern frontend stack:

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) for fast development and building.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety and better developer experience.
- **Components**: [shadcn/ui](https://ui.shadcn.com/) for high-quality, accessible UI components.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for rapid and consistent styling.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth, complex animations.
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, uniform iconography.
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) for elegant toast notifications.

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm installed on your machine.
- [Node.js](https://nodejs.org/en/)

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/JoanDidac/Mi-Dentista.git
    cd Mi-Dentista
    ```

2.  **Install dependencies**
    ```sh
    npm install
    # or
    bun install
    ```

3.  **Start the development server**
    ```sh
    npm run dev
    ```

4.  Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## 🔌 Features & Integration

-   **Contact Forms**: Integrated with Google Apps Script to save submissions directly to a Google Sheet.
    -   *Configuration*: Update `src/utils/googleSheets.ts` with your deployed Web App URL.
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.
-   **Interactive Elements**: Smooth scrolling, hover effects, and animated transitions.

## 📁 Project Structure

```
├── src
│   ├── components  # Reusable UI components
│   ├── assets      # Static assets (images, icons)
│   ├── utils       # Utility functions (Google Sheets integration)
│   ├── App.tsx     # Main application component
│   └── main.tsx    # Entry point
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License.

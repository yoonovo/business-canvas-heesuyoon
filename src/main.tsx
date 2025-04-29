import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// [추후 개발예정]
// if (import.meta.env.DEV) {
//   const { worker } = await import("./mocks/browser.ts");
//   await worker.start({
//     onUnhandledRequest: "warn", // 가로채지 못한 요청 경고
//   });
// }

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

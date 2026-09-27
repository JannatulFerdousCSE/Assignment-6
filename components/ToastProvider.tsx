"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return <Toaster position="bottom-center" toastOptions={{ style: { background: "#151921", color: "#fff", border: "1px solid #2a303b" } }} />;
}

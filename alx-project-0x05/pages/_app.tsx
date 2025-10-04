// pages/_app.tsx
import Layout from "@/components/layouts/Layout";
// Remove or update this import based on your actual file location
// import "@/styles/globals.css"; // Comment out or remove this line
import "../styles/globals.css"; // If file is in parent styles directory
import "./globals.css"; // If file is in pages directory
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  )
}
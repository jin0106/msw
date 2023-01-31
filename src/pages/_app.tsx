import "@/styles/globals.css";
import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development") {
    if (typeof window !== undefined) {
        async () => {
            const { worker } = await import("../mocks/browser");
            worker.start();
        };
    } else {
        async () => {
            const { server } = await import("../mocks/server");
            server.listen();
        };
    }
}
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

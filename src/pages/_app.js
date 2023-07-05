import "@/styles/global.css";
import { ThemeProvider } from "../../ThemeProvider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

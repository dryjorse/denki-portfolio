import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // @ts-ignore
  <HashRouter hashType="hashbang">
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </HashRouter>
);

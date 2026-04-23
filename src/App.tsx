import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { CookieBanner } from "./components/CookieBanner";
import NotFound from "./pages/NotFound";
import ServiceDynamic from "./pages/ServiceDynamic";
import Tratamientos from "./pages/Tratamientos";
import FobiaDental from "./pages/FobiaDental";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <FloatingWhatsApp />
        <CookieBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tratamientos" element={<Tratamientos />} />
          <Route path="/tratamientos/:slug" element={<ServiceDynamic />} />
          <Route path="/fobia-dental" element={<FobiaDental />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

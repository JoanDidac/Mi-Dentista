import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EsteticaDental from "./pages/services/EsteticaDental";
import Ortodoncia from "./pages/services/Ortodoncia";
import Periodoncia from "./pages/services/Periodoncia";
import Endodoncia from "./pages/services/Endodoncia";
import OdontologiaGeneral from "./pages/services/OdontologiaGeneral";
import Odontopediatria from "./pages/services/Odontopediatria";
import OclusionRehabilitacion from "./pages/services/OclusionRehabilitacion";
import RonquidoApnea from "./pages/services/RonquidoApnea";
import Implantes from "./pages/services/Implantes";
import CirugiaOral from "./pages/services/CirugiaOral";
import RehabilitacionImplantes from "./pages/services/RehabilitacionImplantes";
import PatologiaATM from "./pages/services/PatologiaATM";
import MedicinaEstetica from "./pages/services/MedicinaEstetica";
import EsteticaFacial from "./pages/services/EsteticaFacial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/estetica-dental" element={<EsteticaDental />} />
          <Route path="/servicios/ortodoncia" element={<Ortodoncia />} />
          <Route path="/servicios/periodoncia" element={<Periodoncia />} />
          <Route path="/servicios/endodoncia" element={<Endodoncia />} />
          <Route path="/servicios/odontologia-general" element={<OdontologiaGeneral />} />
          <Route path="/servicios/odontopediatria" element={<Odontopediatria />} />
          <Route path="/servicios/oclusion-rehabilitacion" element={<OclusionRehabilitacion />} />
          <Route path="/servicios/ronquido-apnea" element={<RonquidoApnea />} />
          <Route path="/servicios/implantes-dentales" element={<Implantes />} />
          <Route path="/servicios/cirugia-oral" element={<CirugiaOral />} />
          <Route path="/servicios/rehabilitacion-implantes" element={<RehabilitacionImplantes />} />
          <Route path="/servicios/patologia-atm" element={<PatologiaATM />} />
          <Route path="/servicios/medicina-estetica-facial" element={<MedicinaEstetica />} />
          <Route path="/servicios/estetica-facial-avanzada" element={<EsteticaFacial />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

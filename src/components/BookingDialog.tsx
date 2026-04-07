import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const BookingDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[1000px] w-[95vw] sm:w-[90vw] h-[90vh] sm:h-[85vh] p-0 flex flex-col overflow-hidden bg-white/95 backdrop-blur-sm shadow-2xl border-none">

        {/* Simple header loader logic */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white">
            <Loader2 className="w-10 h-10 animate-spin text-brand-primary mb-4" />
            <p className="text-gray-500 font-medium font-montserrat animate-pulse">Cargando portal de citas...</p>
          </div>
        )}

        <div className="relative w-full h-full flex-grow">
          {/* Subtle pattern background for iframe container edge-cases */}
          <div className="absolute inset-0 bg-brand-light/5 pointer-events-none"></div>

          <iframe
            src="https://portal.clinicaenlanube.com/clinicas/99/cita_peticiones/widget"
            className="w-full h-full relative z-20 border-0"
            title="Reserva tu cita en Mi Dentista"
            onLoad={() => setIsLoading(false)}
            allow="geolocation; microphone; camera"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;

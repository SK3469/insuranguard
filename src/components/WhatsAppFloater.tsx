
import { MessageCircle } from "lucide-react";

const WhatsAppFloater = () => {
  const phoneNumber = "9013488512";
  const message = encodeURIComponent("Hello! I'd like to get more information about vehicle insurance.");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-md flex items-center justify-center z-50 transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppFloater;

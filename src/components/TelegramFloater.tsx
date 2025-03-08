
import { Send } from "lucide-react";

const TelegramFloater = () => {
  const phoneNumber = "9013488512";

  const handleTelegramClick = () => {
    window.open(`https://t.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleTelegramClick}
      className="fixed bottom-6 left-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-md flex items-center justify-center z-50 transition-all duration-300 hover:scale-110"
      aria-label="Contact us on Telegram"
    >
      <Send className="h-6 w-6" />
    </button>
  );
};

export default TelegramFloater;

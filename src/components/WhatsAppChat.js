
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppChat.css";

export default function WhatsAppChat() {
  const phoneNumber = "923187216752"; // Apna WhatsApp number country code ke sath likho
  const message = encodeURIComponent(
    "Hi Moiz! I visited your portfolio and would like to connect."
  );

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span>Let's chat</span>
    </a>
  );
}

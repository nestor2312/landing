import { useState } from "react";

import "./index.css";

const WhatsAppButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://wa.me/573124690188?text=¡Hola!%20Quiero%20más%20información%20sobre%20la%20demo%20de%20Fubol."
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float ${hover ? "hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
 <i className="fa-brands fa-whatsapp whatsapp-icon "></i>
      {hover && <span className="whatsapp-text ">¿Tienes dudas? Escríbenos</span>}
    </a>
  );
};

export default WhatsAppButton;

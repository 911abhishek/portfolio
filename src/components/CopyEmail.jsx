import React, { useState } from "react";
import { motion } from "framer-motion";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    // 3. Reset text after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <p className={copied ? "text-green-500" : ""}>
        {copied ? "Email Copied!" : "Lets connect"}
      </p>
    </motion.button>
  );
};

export default CopyEmail;

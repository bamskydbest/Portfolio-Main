import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Header() {
  return (
    <motion.header
      className="text-center py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
    >
      <div className="text-yellow-400 text-4xl font-bold mb-2">
        Hi, I am <span className="text-white">Mahmoud Abdulmajeed Taiye</span>
      </div>
      <p className="text-gray-400 max-w-xl mx-auto">
        I am a frontend web developer. I can provide clean code and pixel
        perfect design. I also make websites more & more interactive with web
        animations.
      </p>
      <div className="flex justify-center gap-4 mt-4 text-white">
        <a
          href="https://x.com/Aladagbangba/"
          target="_blank"
          rel="noopener noreferrer"
          aria-aria-label
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/bamskydbest"
          target="_blank"
          rel="noopener noreferrer"
          aria-aria-label
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mahmoud-abdulmajeed-taiye/"
          target="_blank"
          rel="noopener noreferrer"
          aria-aria-label
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.header>
  );
}

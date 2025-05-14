import { FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "DJ Console App",
    description:
      "A DJ mixing console interface built with React and Tailwind. Allows users to manage tracks, control BPM, and apply effects in real-time.",
    link: "https://djconsole.netlify.app",
    image: "/dj-console.png",
  },
  {
    title: "Blog App",
    description:
      "A real-time blog and chat web app built with modern web technologies, showcasing my skills in full-stack development, real-time communication, and responsive design. This project highlights services I offer including web app development, real-time features integration, and clean UI/UX design.",
    link: "https://blogappchat.netlify.app",
    image: "/blog-app.png",
  },
  {
    title: "To-Do App",
    description:
      "A sleek and responsive to-do list app demonstrating my expertise in front-end development, state management, and user-centric design. This project showcases services I offer such as interactive UI development, task management features, and optimized performance for daily productivity tools.",
    link: "https://mahmoud-to-do.netlify.app",
    image: "/to-do.png",
  },
  {
    title: "Somo Tech Consult",
    description:
      "A professional tech consultancy website highlighting my skills in building business-focused web solutions. This project reflects the services I offer including responsive web design, business website development, and clean, modern UI tailored to showcase company services effectively.",
    link: "https://somotechconsult.netlify.app",
    image: "/somo.png",
  },
];

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-16 px-6 md:px-20 transition-colors duration-300 ${
        isDark ? "bg-[#1a1a2e]" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-yellow-400 text-2xl font-semibold mb-12 text-center">
          PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 ${
                isDark ? "bg-[#0f0f1b] text-white" : "bg-white text-black"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl text-yellow-400 font-semibold mb-2">
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 underline hover:text-blue-500"
                >
                  <FaExternalLinkAlt className="text-xl text-yellow-400 font-semibold mt-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTheme } from "../context/ThemeContext";

const services = [
  {
    title: "Custom Website Development",
    description:
      "I specialize in building custom websites tailored to your business needs. Using modern web technologies, I ensure that each website is responsive, performant, and easy to maintain.",
  },
  {
    title: "React & Next.js Application Development",
    description:
      "I develop fast and scalable React and Next.js applications that provide excellent user experiences. From SSR (Server Side Rendering) to static site generation, I leverage the power of Next.js to optimize performance.",
  },
  {
    title: "TailwindCSS-based Design & Theming",
    description:
      "I create beautiful, custom UI designs using TailwindCSS. By utilizing utility-first design principles, I craft responsive, modular, and easy-to-maintain themes and components.",
  },
  {
    title: "UI/UX Design",
    description:
      "I focus on creating intuitive user interfaces and seamless user experiences. I design with the user in mind, ensuring that the website or app is visually appealing, functional, and easy to navigate.",
  },
  {
    title: "Frontend Performance Optimization",
    description:
      "I analyze and optimize the performance of frontend applications. Using techniques like code splitting, lazy loading, and image optimization, I ensure your website loads fast and runs smoothly.",
  },
  {
    title: "Web Accessibility (a11y) Audits & Enhancements",
    description:
      "I help make your websites more inclusive by improving accessibility. I conduct thorough audits and implement enhancements to ensure your site is usable by everyone, including those with disabilities.",
  },
];

export default function Services() {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-16 px-6 md:px-20 ${
        isDark ? "bg-[#1a1a2e]" : "bg-gray-100"
      }`}
    >
      <h2 className="text-yellow-400 text-xl font-semibold mb-10 text-center">
        SERVICES
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className={`p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ${
              isDark ? "bg-[#0f0f1b] text-white" : "bg-white text-black"
            }`}
          >
            <div className="text-yellow-400 font-semibold text-lg mb-2">
              {service.title}
            </div>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

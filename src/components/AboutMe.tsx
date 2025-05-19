import cv from "../assets/images/MAHMOUD ABDULMAJEED TAIYE CV (New).pdf";

export default function AboutMe() {
  return (
    <section className="px-6 md:px-20 py-16">
      <h2 className="text-yellow-400 text-xl font-semibold mb-8 text-center">
        ABOUT ME
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center ">
        <img
          src="/profile.jpeg"
          alt="Portrait of Mahmoud Abdulmajeed Taiye"
          loading="lazy"
          className="w-72 rounded-lg"
        />
        <div>
          <h3 className="text-2xl font-semibold">
            Hi There! I'm Mahmoud Abdulmajeed Taiye
          </h3>
          <p className="text-yellow-400 mb-4">Front End Web Developer</p>
          <p className="text-gray-400 max-w-xl">
            A passionate frontend developer with expertise in HTML, CSS, Vanilla
            JavaScript, React, Next.js, and Tailwind CSS. I also have design
            skills... As a UI/UX designer, I craft user‑centered experiences
            that marry aesthetics with functionality. Currently honing my skills
            in React and TypeScript, building responsive and performant
            applications. I love bringing ideas to life through clean,
            maintainable code and intuitive design.
          </p>
          <ul className="mt-4 space-y-1 text-sm text-gray-300">
            <li>
              <b>Phone:</b> +2349032320786
            </li>
            <li>
              <b>Email:</b> mahmoudabdulmajeedtaiye@gmail.com
            </li>
            <li>
              <b>From:</b> 405, Olofa Way , Offa Kwara State.
            </li>
            <li>
              <b>Language:</b> English
            </li>
            <li>
              <b>Freelance:</b> Available
            </li>
          </ul>
          <a href={cv} download>
            <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:scale-105, transition-all">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

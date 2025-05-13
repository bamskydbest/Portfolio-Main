export default function Contact() {
  return (
    <section className="px-6 md:px-20 py-16">
      <h2 className="text-yellow-400 text-xl font-semibold mb-8 text-center">
        CONTACT ME
      </h2>
      <form
        action="https://formspree.io/f/xrbpljlr"
        method="POST"
        className="space-y-4 max-w-2xl mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Please Enter Your Name"
          required
          className="w-full p-3 rounded bg-[#1a1a2e] text-white border-4 border-yellow-500 mt-2 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Please Enter A Valid Email"
          required
          className="w-full p-3 rounded bg-[#1a1a2e] text-white border-4 border-yellow-500 mt-2 outline-none"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Please Enter Your Message"
          required
          className="w-full p-3 rounded bg-[#1a1a2e] text-white border-4 border-yellow-500 resize-none mt-2 outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold mt-2"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

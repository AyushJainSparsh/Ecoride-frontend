const Contact = () => {
  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        Have questions or feedback? We'd love to hear from you! Reach out via the form below.
      </p>

      <form className="grid gap-4 max-w-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

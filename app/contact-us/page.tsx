export const metadata = {
  title: "Contact Us",
};

export default function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We'd love to hear from you. Reach out to us anytime!
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Address */}
        <div className="p-6 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Our Address</h2>
          <p className="text-gray-600">123 Jindo Street, City, State, ZIP</p>
        </div>

        {/* Email */}
        <div className="p-6 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Email Us</h2>
          <p className="text-gray-600">contact@adoptjindo.org</p>
        </div>

        {/* Phone */}
        <div className="p-6 border rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Call Us</h2>
          <p className="text-gray-600">+1 (234) 567-890</p>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Send Us a Message
        </h2>
        <form className="max-w-3xl mx-auto bg-white p-8 border rounded-lg shadow">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={4}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-jindo-black text-white py-2 px-4 rounded-md hover:bg-jindo-green"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

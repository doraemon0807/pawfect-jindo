export const metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about our mission, vision, and the team behind it.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to ensure every Jindo dog finds a loving and caring
          home...
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Team Member Card */}
          <div className="text-center p-4 border rounded-lg shadow">
            <img
              src="/images/team-member-1.jpg"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>
          {/* Repeat for more team members */}
        </div>
      </section>
    </div>
  );
}

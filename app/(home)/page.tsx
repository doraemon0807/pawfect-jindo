export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-300">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Adopt a Jindo - Your Perfect Companion
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Adopt a loyal and loving dog today!
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            About the Jindo Breed
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The Korean Jindo is a highly intelligent and loyal breed known for
            its hunting abilities and strong family bonds. Jindos make wonderful
            companions for families and individuals alike.
          </p>
        </div>
      </section>

      {/* Adoption Process Section */}
      <section id="adopt" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">How to Adopt</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Step 1: Application
              </h3>
              <p className="mt-4 text-gray-600">
                Fill out the adoption application form to begin the process.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Step 2: Home Visit
              </h3>
              <p className="mt-4 text-gray-600">
                A home visit will be scheduled to ensure a safe environment for
                the dog.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Step 3: Adoption
              </h3>
              <p className="mt-4 text-gray-600">
                Once approved, you can bring your new Jindo companion home!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dog Listings Section */}
      <section id="dogs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Meet Our Jindos
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Dog Card Placeholder */}
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="relative border border-gray-300 rounded-lg overflow-hidden"
                >
                  <div className="h-56 bg-gray-400"></div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Dog Name
                    </h3>
                    <p className="text-gray-600 mt-2">Breed: Jindo</p>
                    <p className="text-gray-600 mt-2">Age: 2 years</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? Reach out to us for more information about the Jindo
            breed or adoption process.
          </p>
          <div className="mt-6">
            <a
              href="mailto:info@adoptjindo.org"
              className="text-yellow-500 hover:text-yellow-600"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

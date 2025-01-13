import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-jindo-lighter-gray">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-jindo-lighter-gray">
        <div className="absolute inset-0 bg-jindo-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center text-jindo-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Adopt a Jindo - Your Perfect Companion
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Adopt a loyal and loving dog today!
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-jindo-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-jindo-darker-gray">
            About the Jindo Breed
          </h2>
          <p className="mt-4 text-lg text-jindo-gray">
            The Korean Jindo is a highly intelligent and loyal breed known for
            its hunting abilities and strong family bonds. Jindos make wonderful
            companions for families and individuals alike.
          </p>
        </div>
      </section>

      {/* Adoption Process Section */}
      <section id="adopt" className="py-16 bg-jindo-lighter-gray">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-jindo-darker-gray">
            How to Adopt
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-jindo-lighter-gray rounded-lg">
              <h3 className="text-xl font-semibold text-jindo-darker-gray">
                Step 1: Application
              </h3>
              <p className="mt-4 text-jindo-gray">
                Fill out the adoption application form to begin the process.
              </p>
            </div>
            <div className="p-6 border border-jindo-lighter-gray rounded-lg">
              <h3 className="text-xl font-semibold text-jindo-darker-gray">
                Step 2: Home Visit
              </h3>
              <p className="mt-4 text-jindo-gray">
                A home visit will be scheduled to ensure a safe environment for
                the dog.
              </p>
            </div>
            <div className="p-6 border border-jindo-lighter-gray rounded-lg">
              <h3 className="text-xl font-semibold text-jindo-darker-gray">
                Step 3: Adoption
              </h3>
              <p className="mt-4 text-jindo-gray">
                Once approved, you can bring your new Jindo companion home!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dog Listings Section */}
      <section id="dogs" className="py-16 bg-jindo-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-jindo-darker-gray">
            Meet Our Jindos
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Dog Card Placeholder */}
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="relative border border-jindo-lighter-gray rounded-lg overflow-hidden"
                >
                  <div className="h-56 bg-jindo-light-gray"></div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-jindo-darker-gray">
                      Dog Name
                    </h3>
                    <p className="text-jindo-gray mt-2">Breed: Jindo</p>
                    <p className="text-jindo-gray mt-2">Age: 2 years</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-jindo-lighter-gray">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-jindo-darker-gray">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-jindo-gray">
            Have questions? Reach out to us for more information about the Jindo
            breed or adoption process.
          </p>
          <div className="mt-6">
            <Link href="mailto:info@adoptjindo.org" className="button">
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

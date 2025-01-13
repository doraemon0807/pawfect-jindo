import Link from "next/link";

export const metadata = {
  title: "Adoption Process",
};

export default function AdoptionProcess() {
  interface Step {
    id: number;
    title: string;
    description: string;
    icon: string;
  }

  const steps: Step[] = [
    {
      id: 1,
      title: "Step 1: Application",
      description: "Fill out our adoption application form.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Step 2: Interview",
      description: "Participate in a phone or video interview.",
      icon: "📞",
    },
    {
      id: 3,
      title: "Step 3: Home Visit",
      description: "We’ll arrange a home visit to ensure a good fit.",
      icon: "🏠",
    },
    {
      id: 4,
      title: "Step 4: Meet the Dog",
      description: "Meet and interact with your potential new family member.",
      icon: "🐾",
    },
    {
      id: 5,
      title: "Step 5: Finalize Adoption",
      description: "Sign the adoption agreement and welcome your dog home!",
      icon: "🎉",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-jindo-darker-gray">
          Adoption Process
        </h1>
        <p className="mt-4 text-lg text-jindo-gray">
          Our streamlined adoption process ensures every dog finds the perfect
          home.
        </p>
      </section>

      {/* Steps Section */}
      <section className="space-y-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 p-6 border rounded-lg shadow-lg bg-jindo-white"
          >
            <div className="text-4xl mb-4 md:mb-0">{step.icon}</div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-jindo-gray">{step.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Adopt?</h2>
        <p className="text-jindo-gray mb-6">
          Start your adoption journey by filling out our application form today.
        </p>
        <Link href="/adopt-dog" className="button">
          Start Application
        </Link>
      </section>
    </div>
  );
}

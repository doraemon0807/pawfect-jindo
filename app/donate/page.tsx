import Link from "next/link";

export const metadata = {
  title: "Donate",
};

export default function Adopt() {
  interface DonationOption {
    id: number;
    title: string;
    amount: string;
    description: string;
  }

  const donationOptions: DonationOption[] = [
    {
      id: 1,
      title: "One-Time Donation",
      amount: "$50",
      description: "Support with a one-time contribution.",
    },
    {
      id: 2,
      title: "Monthly Donation",
      amount: "$25/month",
      description: "Provide ongoing support every month.",
    },
    {
      id: 3,
      title: "Custom Donation",
      amount: "Custom",
      description: "Choose any amount to give.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-jindo-darker-gray">
          Support Our Mission
        </h1>
        <p className="mt-4 text-lg text-jindo-gray">
          Your generous contributions help us rescue and care for Jindo dogs in
          need.
        </p>
      </section>

      {/* Donation Options */}
      <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {donationOptions.map((option) => (
          <div
            key={option.id}
            className="p-6 border rounded-lg shadow-lg text-center"
          >
            <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
            <p className="text-2xl font-bold text-jindo-blue mb-2">
              {option.amount}
            </p>
            <p className="text-jindo-gray mb-4">{option.description}</p>
            <button className="button">Donate Now</button>
          </div>
        ))}
      </section>

      {/* Custom Donation Form */}
      <section className="bg-jindo-lighter-gray p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Make a Custom Donation
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-jindo-dark-gray"
            >
              Donation Amount
            </label>
            <input
              id="amount"
              type="number"
              placeholder="Enter amount"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-jindo-dark-gray"
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
              className="block text-sm font-medium text-jindo-dark-gray"
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

          <button type="submit" className="w-full button">
            Donate Now
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Help</h2>
        <p className="text-jindo-gray mb-6">
          You can also support us by volunteering or spreading the word.
        </p>
        <Link href="/contact-us" className="button">
          Get Involved
        </Link>
      </section>
    </div>
  );
}

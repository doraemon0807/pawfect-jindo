import { API_URL, Dog } from "@/app/find-a-dog/page";
import Link from "next/link";

interface IParams {
  params: { id: string }; // This ti
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const dog: Dog = await getDog(id);
  return {
    title: dog.title,
  };
}

// const dogData: Dog[] = [
//   {
//     id: "roji",
//     name: "Roji",
//     image: "/images/dog-roji.jpg",
//     age: "2 years",
//     breed: "Jindo Mix",
//     description:
//       "Roji is a playful and affectionate dog looking for a loving forever home.",
//     gender: "Male",
//   },
// ];

export async function getDog(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return fetch(`${API_URL}/${id}`).then((response) => response.json());
}

export default async function DogProfile({ params }: IParams) {
  const { id } = await params;
  const dog: Dog = await getDog(id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={dog.poster_path}
            alt={dog.title}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h1 className="text-4xl font-bold text-jindo-darker-gray mb-2">
            {dog.title}
          </h1>
          <p className="text-lg text-jindo-gray mb-4">{dog.overview}</p>
          <ul className="mb-6 space-y-2">
            <li>
              <strong>Age:</strong> {dog.release_date}
            </li>
            <li>
              <strong>Breed:</strong> {dog.popularity}
            </li>
            <li>
              <strong>Gender:</strong> {dog.original_language}
            </li>
          </ul>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-jindo-lighter-gray p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4">About {dog.title}</h2>
        <p className="text-jindo-gray">
          {dog.title} is currently in our care and ready to find a loving home.
          If you're interested in adopting {dog.title}, please fill out our
          adoption application.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Give {dog.title} a Home?
        </h2>
        <p className="text-jindo-gray mb-6">
          Take the first step towards adopting {dog.title} today.
        </p>
        <Link href="/adopt-dog" className="button">
          Start Adoption Process
        </Link>
      </section>
    </div>
  );
}

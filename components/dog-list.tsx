import { API_URL, Dog } from "@/app/find-a-dog/page";
import Link from "next/link";

async function getDogs() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return fetch(API_URL).then((response) => response.json());
}

export default async function DogList() {
  const dogs: Dog[] = await getDogs();

  return (
    <>
      {/* Filter Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter Dogs</h2>
        <div className="flex flex-wrap gap-4">
          <select className="dropdown">
            <option value="">Select Age</option>
            <option value="puppy">Puppy</option>
            <option value="adult">Adult</option>
          </select>
          <select className="dropdown">
            <option value="">Select Breed</option>
            <option value="jindo">Jindo</option>
            <option value="mix">Mix</option>
          </select>
          <button className="button">Apply Filters</button>
        </div>
      </section>

      {/* Dog List Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Available Dogs for Adoption
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <div
              key={dog.id}
              className="border rounded-lg shadow overflow-hidden"
            >
              <Link href={`/dog/${dog.id}`} className="relative">
                <img
                  src={dog.poster_path}
                  alt={dog.title}
                  className="object-cover"
                />
                <div className="absolute right-5 bottom-5 bg-jindo-dark-yellow px-4 py-1 rounded-md text-jindo-white">
                  Available
                </div>
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{dog.title}</h3>
                <p className="text-jindo-gray">Age: {dog.release_date}</p>
                <p className="text-jindo-gray">Breed: {dog.popularity}</p>
                <Link href={`/dog/${dog.id}`}>
                  <button className="mt-4 w-full bg-jindo-black text-white py-2 px-4 rounded-md hover:bg-jindo-green">
                    View {dog.title}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

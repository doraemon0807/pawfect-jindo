import DogList from "@/components/dog-list";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Find a Dog",
};

export interface Dog {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// interface Dog {
//   id: number;
//   name: string;
//   age: string;
//   breed: string;
//   image: string;
// }

export default async function FindADog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-jindo-darker-gray">
          Find a Dog
        </h1>
        <p className="mt-4 text-lg text-jindo-gray">
          Find your perfect furry friend and give them a forever home.
        </p>
      </section>

      {/* Dog List Section */}
      <Suspense fallback={<h1>Loading Dog List...</h1>}>
        <DogList />
      </Suspense>
    </div>
  );
}

// {/* Filter Section */}
// <section className="mb-8">
// <h2 className="text-xl font-semibold mb-4">Filter Dogs</h2>
// <div className="flex flex-wrap gap-4">
//   <select className="dropdown">
//     <option value="">Select Age</option>
//     <option value="puppy">Puppy</option>
//     <option value="adult">Adult</option>
//   </select>
//   <select className="dropdown">
//     <option value="">Select Breed</option>
//     <option value="jindo">Jindo</option>
//     <option value="mix">Mix</option>
//   </select>
//   <button className="button">Apply Filters</button>
// </div>
// </section>

// {/* Dog List Section */}
// <section>
// <h2 className="text-2xl font-semibold mb-6 text-center">
//   Available Dogs for Adoption
// </h2>
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//   {dogs.map((dog) => (
//     <div
//       key={dog.id}
//       className="border rounded-lg shadow overflow-hidden"
//     >
//       <Link href={`/dog/${dog.id}`} className="relative">
//         <img
//           src={dog.poster_path}
//           alt={dog.title}
//           className="object-cover"
//         />
//         <div className="absolute right-5 bottom-5 bg-jindo-dark-yellow px-4 py-1 rounded-md text-jindo-white">
//           Available
//         </div>
//       </Link>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold">{dog.title}</h3>
//         <p className="text-jindo-gray">Age: {dog.release_date}</p>
//         <p className="text-jindo-gray">Breed: {dog.popularity}</p>
//         <Link href={`/dog/${dog.id}`}>
//           <button className="mt-4 w-full bg-jindo-black text-white py-2 px-4 rounded-md hover:bg-jindo-green">
//             View {dog.title}
//           </button>
//         </Link>
//       </div>
//     </div>
//   ))}
// </div>
// </section>

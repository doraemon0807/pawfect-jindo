export const metadata = {
  title: "Find a Dog",
};

export default function FindADog() {
  interface Dog {
    id: number;
    name: string;
    age: string;
    breed: string;
    image: string;
  }

  const dogs: Dog[] = [
    {
      id: 1,
      name: "Buddy",
      age: "2 years",
      breed: "Jindo Mix",
      image: "/images/dog-1.jpg",
    },
    {
      id: 2,
      name: "Bella",
      age: "1 year",
      breed: "Purebred Jindo",
      image: "/images/dog-2.jpg",
    },
    {
      id: 3,
      name: "Max",
      age: "3 years",
      breed: "Jindo Mix",
      image: "/images/dog-3.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Find a Dog</h1>
        <p className="mt-4 text-lg text-gray-600">
          Find your perfect furry friend and give them a forever home.
        </p>
      </section>

      {/* Filter Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter Dogs</h2>
        <div className="flex flex-wrap gap-4">
          <select className="p-2 border rounded-md">
            <option value="">Select Age</option>
            <option value="puppy">Puppy</option>
            <option value="adult">Adult</option>
          </select>
          <select className="p-2 border rounded-md">
            <option value="">Select Breed</option>
            <option value="jindo">Jindo</option>
            <option value="mix">Mix</option>
          </select>
          <button className="bg-jindo-black text-white px-4 py-2 rounded-md hover:bg-jindo-green">
            Apply Filters
          </button>
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
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{dog.name}</h3>
                <p className="text-gray-600">Age: {dog.age}</p>
                <p className="text-gray-600">Breed: {dog.breed}</p>
                <button className="mt-4 w-full bg-jindo-black text-white py-2 px-4 rounded-md hover:bg-jindo-green">
                  Adopt {dog.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

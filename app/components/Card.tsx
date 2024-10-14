type CountryProps = {
    name: string;
    population: string;
    capital: string;
};
  
export default function CountryCard({ name, population, capital }: CountryProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto transition-transform transform hover:scale-105">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{name}</h1>
            <p className="text-lg text-gray-700">Population: <span className="font-semibold">{population}</span></p>
            <p className="text-lg text-gray-700">Capital: <span className="font-semibold">{capital}</span></p>
        </div>
    );
}


import Link from 'next/link';
import countries from '@/countries/page';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-50 p-4">
      <h1 className="text-4xl font-bold mb-6 text-teal-950">Country List</h1>
      <ul className="space-y-4">
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey} className="w-full max-w-md">
            <Link
              href={`/country/${countryKey}`}
              className="block p-4 bg-teal-50 text-teal-950 rounded-lg shadow-md hover:bg-teal-100 transition-colors"
            >
              {countries[countryKey].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

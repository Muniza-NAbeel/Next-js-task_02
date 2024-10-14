import countries from '../../../countries/page';
import CountryCard from '@/app/components/Card';

type CountryPageProps = {
    params: { country_name: string };
};
  
export default function CountryPage({ params }: CountryPageProps) {
    const { country_name } = params;
    const country = countries[country_name];
  
    if (!country) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-teal-50">
                <h1 className="text-2xl font-bold text-red-600">Country not found.</h1>
                <a href="/" className="mt-4 text-blue-500 hover:underline">Country List</a>
            </div>
        );
    }
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-teal-50 p-4">
            <div className="text-teal-950">
            <CountryCard 
                name={country.name} 
                population={country.population} 
                capital={country.capital} 
            />
            </div>
            <a href="/" className="mt-4 text-teal-950 hover:underline hover:bg-teal-400 rounded-md">Country List</a>
        </div>
    );
}

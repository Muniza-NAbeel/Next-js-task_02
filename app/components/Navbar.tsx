import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-teal-950 p-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link href="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
        <span className="text-white">|</span>
        <Link href="/About" className="text-white hover:text-gray-300 transition-colors">About Us</Link>
        <span className="text-white">|</span>
        <Link href="/Contact" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
      </div>
    </nav>
  );
}


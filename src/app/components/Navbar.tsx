import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-[#252B42] p-6 text-[#FFFFFF] flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold mb-4 md:mb-0">BrandName</div>
      <nav className="space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/product" className="hover:text-blue-400">Product</Link>
        <Link href="/pricing" className="hover:text-blue-400">Pricing</Link>
        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      </nav>
      <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row mt-4 md:mt-0">
        <Link href="/login" className="hover:text-blue-400">Login</Link>
        <button className="bg-[#23A6F0] hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-4 rounded">
          JOIN US
        </button>
      </div>
    </header>
  );
}
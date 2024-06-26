import Link from 'next/link';

const Header = () => {
  return (
    <header className=" text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
        
  <div className='ml-8'>
    <img src="/logo.svg" alt="Logo" className="h-120 w-160" />
  </div>

  {/* Navigation */}
  <nav className="flex ml-32 space-x-8">
    <Link href="/exchange">
      <div className="cursor-pointer hover:[#9945FF]">Exchange</div>
    </Link>
    <Link href="/transactions">
      <div className="cursor-pointer hover:[#9945FF]">Last Transactions</div>
    </Link>
    <Link href="/invite">
      <div className="cursor-pointer hover:[#9945FF]">Invite Friend</div>
    </Link>
    <Link href="/notifications">
      <div className="cursor-pointer hover:[#9945FF]">Notifications</div>
    </Link>
  </nav>
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="border-2 border-[#9945FF] text-white py-2 px-4 rounded-tl-lg rounded-br-lg hover:[#9945FF] transition-all duration-300 transform hover:scale-105">
              Login
            </button>
            <button className="bg-[#9945FF] text-white py-2 px-4 rounded-tl-lg rounded-br-lg hover:bg-[#9945FF] transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

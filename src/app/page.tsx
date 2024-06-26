import React from 'react';
import Header from './Components/Header';
import AssetTables from './Components/AssetTables';
import Footer from './Components/Footer';

const Home: React.FC = () => {
  return (
    <main style={{ backgroundImage: "url('/home.svg')",backgroundRepeat:'no-repeat' , backgroundSize:"cover"}}  >
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="text-white text-center mb-32 w-full max-w-screen-lg mx-auto px-4 ">
          <h1 className="text-6xl mb-6">
            <span className="block">Easy send and Request</span>
            <span className="block">Crypto.</span>
          </h1>
          <p className="text-lg mb-8 mt-8">
            Bring blockchain to the people. Solana supports experiences <br /> for power users, new consumers, and everyone
            in between.
          </p>
          <div className="mt-8 ">
            <AssetTables />
            
          </div>
          <div className='mt-8'>
          <Footer/>
          </div>

        
        </div>
      </main>
    </main>
  );
};

export default Home;

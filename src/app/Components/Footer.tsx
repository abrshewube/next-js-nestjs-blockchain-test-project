import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
        
      <div className="  border border-[#464646] text-white rounded-lg p-6 " style={{
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        border: '1px solid #464646',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '1.5rem',

        height: '21rem',
      }}>
        <footer>
        <div className="flex items-center justify-between">

        <p className="text-white ">Swap Tokens</p>
        <Image src="/key.svg" width={20} height={20} alt='key svg'/>
        </div>
          <div className="flex w-full items-center mt-16 gap-0">
            <div className="w-1/2 space-y-2 rounded-tl-lg rounded-bl-lg bg-[#1E1E1E] px-5 py-4 text-white -mr-4">
              <div className="flex items-center justify-between gap-2">
                <h1 className="text-4xl font-bold text-white">0.00</h1>
                <div className="flex gap-1 bg-black px-4 py-2">
                  <Image height={15} width={15}
                    src="https://res.cloudinary.com/dhphfcgxt/image/upload/v1719385698/isnvp1eve2azojytuo7r.svg"
                    alt=""
                  />
                  <Image height={25} width={25}
                    src="https://res.cloudinary.com/dhphfcgxt/image/upload/v1719385987/okuh2frvuipzuckaf1zq.svg"
                    alt=""
                  />
                  <Image height={15} width={15}
                    src="https://res.cloudinary.com/dhphfcgxt/image/upload/v1719385987/au40aujrutydcilb8qpn.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>$0.00</p>
                <div className="flex gap-1">
                  <p>Balance:</p>
                  <span className="text-[#3980FF]">24,240</span>
                </div>
              </div>
            </div>

            <Image height={15} width={15}
              src="https://res.cloudinary.com/dhphfcgxt/image/upload/v1719385987/xsdnx2pt3vkxi97lkhn2.svg"
              className="bg-black h-14 w-14 p-1 z-10 -mx-2 rounded-full"
              alt=""
            />

            <div className=" -ml-4 w-1/2 space-y-2 rounded-tr-lg rounded-br-lg bg-[#1E1E1E] px-5 py-4 text-white">
              <div className="flex items-center justify-between gap-2">
                <h1 className="text-4xl font-bold text-white">0.00</h1>
                <div className="flex gap-1 bg-black px-4 py-2">
                  <Image height={25} width={25}
                    src="https://res.cloudinary.com/dhphfcgxt/image/upload/v1719385987/vzmnvh0zhyvlstgirlop.svg"
                    alt=""
                  />
                  <Image height={30} width={30}
                    src="https://res.cloudinary.com/dhphfcgxt/image/upload/v1719385987/mkiusqgd0f2i7bssi9vd.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>$0.00</p>
                <div className="flex gap-1">
                  <p>Balance:</p>
                  <span className="text-[#3980FF]">67,790</span>
                </div>
              </div>
            </div>
          </div>
          <button className="py-3 mt-3 px-14 bg-[#9945FF] rounded-tl-md rounded-br-md">Swop tokens</button>
          <div className="flex items-center justify-between">

   <div className='flex items-start justify-start flex-col'>
    <p className='text-sm'>1 BTC = 32.4039 ETH</p>
    <p className='text-[#3980FF] text-sm'>Free exchage</p>
   </div>
        <p className="text-[#666666] ">update in 4s</p>
        </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

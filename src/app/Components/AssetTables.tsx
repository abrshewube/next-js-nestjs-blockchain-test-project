"use client"; 
import React, { useState, useEffect } from 'react';

interface Asset {
  _id: string;
  icon: string;
  name: string;
  lastTrade: number;
  change24h: number;
  changeValue24h: number;
}

const AssetTables: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await fetch('/api/assets');
        const data = await res.json();

        // Validate and parse data
        const validatedData = data.map((asset: any) => ({
          ...asset,
          change24h: parseFloat(asset.change24h)
        }));

        setAssets(validatedData);
      } catch (error) {
        console.error('Error fetching assets:', error);
        // Handle error state or logging
      } finally {
        setLoading(false);
      }
    };

    // Ensure useEffect runs only on the client-side
    if (typeof window !== 'undefined') {
      fetchAssets();
    }
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="overflow-x-auto bg-black bg-opacity-70 backdrop-filter backdrop-blur-md w-full p-4 border border-white border-opacity-25">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-full">
          <div className="ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4" style={{ borderTopColor: '#3498db', animation: 'spin 1s linear infinite' }}></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      ) : (
        <table className="w-full bg-black bg-opacity-10 border-collapse shadow-lg rounded-lg overflow-hidden border border-white">
          <thead>
            <tr className="text-white border-b border-[#4F4F4F] px-6">
              <th className="py-3 px-6 ">ASSETS</th>
              <th className="py-3 px-6 ">LAST TRADE</th>
              <th className="py-3 px-6 ">24H %</th>
              <th className="py-3 px-6 ">24H CHANGE</th>
              <th className="py-3 px-6  text-blue-500">MORE &gt;</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {assets.map((asset) => (
              <tr key={asset._id} className="bg-black bg-opacity-10">
                <td className="py-4 px-6 text-white flex items-center">
                  <img src={asset.icon} alt={asset.name} className="w-16 h-16 mr-2" />
                  {asset.name}/<span className="text-gray-400">USD</span>
                </td>
                <td className="py-4 px-6 text-white">${asset.lastTrade.toFixed(2)}</td>
                <td className={`py-4 px-6 ${asset.change24h === 0 ? 'text-gray-400' : asset.change24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {`${asset.change24h > 0 ? '+' : ''}${asset.change24h.toFixed(2)}%`}
                </td>
                <td className={`py-4 px-6 ${asset.changeValue24h === 0 ? 'text-gray-400' : asset.change24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {`${asset.change24h > 0 ? '+' : ''}$${asset.changeValue24h.toFixed(2)}`}
                </td>
                <td className="py-4 px-6">
                  <button style={{ color: '#4a5568', backgroundColor: '#6DFF8B', border: '1px solid #464646' }} className="rounded px-4 py-2">
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssetTables;

// src/pages/api/assets.ts

import { NextApiRequest, NextApiResponse } from 'next';

import Asset from '@/models/Asset';
import { connectDb } from '@/app/utils/mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDb();

  if (req.method === 'GET') {
    try {
      const assets = await Asset.find({});
      res.status(200).json(assets);
    } catch (error) {
      console.error('Error fetching assets:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { icon, name, lastTrade, change24h } = req.body;
      const newAsset = new Asset({ icon, name, lastTrade, change24h });
      await newAsset.save();
      res.status(201).json(newAsset);
    } catch (error) {
      console.error('Error creating asset:', error);
      res.status(500).json({ error: 'Failed to create asset' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

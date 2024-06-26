// src/models/Asset.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface AssetDocument extends Document {
  icon: string;
  name: string;
  lastTrade: number;
  change24h: number;
}

const AssetSchema: Schema = new mongoose.Schema({
  icon: { type: String, required: true },
  name: { type: String, required: true },
  lastTrade: { type: Number, required: true },
  change24h: { type: Number, required: true },
});

const Asset = mongoose.models.Asset || mongoose.model<AssetDocument>('Asset', AssetSchema);

export default Asset;

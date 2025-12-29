export type TokenCategory = "new" | "final" | "migrated";

export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  priceChange: number;
  volume: number;
  liquidity: number;
  marketCap: number;
  age: string;
  category: TokenCategory;
}
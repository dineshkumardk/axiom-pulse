import { Token } from "@/types/token";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://axiom-pulse.onrender.com";

export async function fetchTokens(): Promise<Token[]> {
  const res = await fetch(`${API_BASE_URL}/api/tokens`);
  if (!res.ok) {
    throw new Error("Failed to fetch tokens");
  }
  return res.json();
}
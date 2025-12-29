import { Token } from "@/types/token";

interface Props {
  tokens: Token[];
  onSort: (key: keyof Token) => void;
}

export function TokenTable({ tokens, onSort }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide">
          <tr>
            <th className="px-4 py-3 text-left">Token</th>

            <th
              className="px-4 py-3 text-right cursor-pointer"
              onClick={() => onSort("price")}
            >
              Price
            </th>

            <th
              className="px-4 py-3 text-right cursor-pointer"
              onClick={() => onSort("priceChange")}
            >
              24h %
            </th>

            <th
              className="px-4 py-3 text-right cursor-pointer"
              onClick={() => onSort("volume")}
            >
              Volume
            </th>

            <th
              className="px-4 py-3 text-right cursor-pointer"
              onClick={() => onSort("liquidity")}
            >
              Liquidity
            </th>

            <th
              className="px-4 py-3 text-right cursor-pointer"
              title="Total market capitalization"
              onClick={() => onSort("marketCap")}
            >
              Market Cap
            </th>

            <th className="px-4 py-3 text-right">Age</th>
          </tr>
        </thead>

        <tbody>
          {tokens.map((token) => (
            <tr
              key={token.id}
              className="border-t hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-4 py-3">
                <div className="font-medium">{token.name}</div>
                <div className="text-xs text-gray-500">{token.symbol}</div>
              </td>

              <td className="px-4 py-3 text-right transition-colors duration-300">
                ${token.price.toFixed(2)}
              </td>

              <td
                className={`px-4 py-3 text-right font-medium ${
                  token.priceChange >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {token.priceChange}%
              </td>

              <td className="px-4 py-3 text-right">
                {token.volume.toLocaleString()}
              </td>

              <td className="px-4 py-3 text-right">
                {token.liquidity.toLocaleString()}
              </td>

              <td className="px-4 py-3 text-right">
                {token.marketCap.toLocaleString()}
              </td>

              <td className="px-4 py-3 text-right">{token.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
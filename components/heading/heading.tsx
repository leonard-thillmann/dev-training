import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"], weight: "400" });

export default function Heading({ children }: { children: string }) {
  return (
    <h1 className={antonio.className} style={{ fontSize: "4rem" }}>
      {children}
    </h1>
  );
}

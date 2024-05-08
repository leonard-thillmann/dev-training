import { Petrona } from "next/font/google";

const petrona = Petrona({ subsets: ["latin"], weight: "400" });

export default function Text({ children }: { children: string }) {
  return (
    <p
      className={petrona.className}
      style={{ fontSize: "1rem", color: "gray", fontStyle: "italic" }}
    >
      {children}
    </p>
  );
}

import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"], weight: "400" });

interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return (
    <h1 className={antonio.className} style={{ fontSize: "4rem" }}>
      {text}
    </h1>
  );
}

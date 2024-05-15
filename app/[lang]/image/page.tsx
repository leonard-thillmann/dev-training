import printImg from "@/public/images/print.png";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Image",
  description: "Displaying an image.",
};

export default function Page() {
  return <Image src={printImg} height={400} alt="3D print" />;
}

import printImg from "@/public/images/print.jpg";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Image",
  description: "Displaying an image.",
};

export default function Page() {
  return (
    <div className="m-4">
      <Image src={printImg} alt="3D print" />
    </div>
  );
}

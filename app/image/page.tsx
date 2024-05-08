import printImg from "@/public/images/print.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="m-4">
      <Image src={printImg} alt="3D print" />
    </div>
  );
}

import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return <p className="text-xs">Not signed in</p>;

  return (
    <Image
      src={`${session.user.image}`}
      width={24}
      height={24}
      alt="User Avatar"
    />
  );
}

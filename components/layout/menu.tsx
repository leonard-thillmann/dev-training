import { auth } from "@/auth";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/common/menubar";
import Link from "next/link";
import { SignOut } from "../auth/sign-out";
import UserAvatar from "../auth/userAvatar";

export default async function Menu(props: any) {
  const session = await auth();

  return (
    <Menubar className="mb-4 w-full">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"./"}>Dashboard</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Create</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={"../create-group"} className="flex items-center">
              Group
            </Link>
            <MenubarShortcut>-</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href={"./"} className="flex items-center">
              List
            </Link>
            <MenubarShortcut>-</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Link href={"./groups-grid"} className="flex items-center">
              Grid
            </Link>{" "}
            <MenubarShortcut>-</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Link href={"./groups-data-table"} className="flex items-center">
              Data Table
            </Link>
            <MenubarShortcut>-</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Link href={"./image"} className="flex items-center">
              Image
            </Link>
            <MenubarShortcut>-</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Link href={"./currency-converter"} className="flex items-center">
              Currency converter
            </Link>
            <MenubarShortcut>-</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {session?.user ? (
        <>
          <MenubarMenu>
            <SignOut />
          </MenubarMenu>
        </>
      ) : (
        <></>
      )}
      <MenubarMenu>
        <UserAvatar />
      </MenubarMenu>
    </Menubar>
  );
}

import Link from "next/link";
import { auth } from "../../auth";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../components/common/menubar";
import LangSwitcher from "../auth/lang-switcher";
import { SignOut } from "../auth/sign-out";
import UserAvatar from "../auth/userAvatar";

export default async function Menu() {
  const session = await auth();

  return (
    <Menubar className="mb-4 w-full">
      <MenubarMenu>
        <Link href={"/?view=list"}>
          <MenubarTrigger>Dashboard</MenubarTrigger>
        </Link>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger data-testid="create">Create</MenubarTrigger>
        <MenubarContent>
          <Link
            data-testid="group"
            href={"../create-group"}
            className="flex items-center"
          >
            <MenubarItem>Group</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger data-testid="other">Other</MenubarTrigger>
        <MenubarContent>
          <Link href={"./image"} className="flex items-center">
            <MenubarItem>Image</MenubarItem>
          </Link>
          <Link
            data-testid="currency-converter"
            href={"./currency-converter"}
            className="flex items-center"
          >
            <MenubarItem>Currency converter</MenubarItem>
          </Link>
          <Link href={"./tanstack"} className="flex items-center">
            <MenubarItem>Tanstack Demo</MenubarItem>
          </Link>
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
      <LangSwitcher />
    </Menubar>
  );
}

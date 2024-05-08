import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/common/menubar";
import Link from "next/link";

export default function Menu(props: any) {
  return (
    <Menubar className="mb-4">
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
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

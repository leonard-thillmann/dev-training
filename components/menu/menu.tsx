import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/menu/menubar";
import Link from "next/link";

export default function Menu(props: any) {
  return (
    <>
      <Menubar className="m-4">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"./"}>Dashboard</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Create</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href={"../createGroup"} className="flex items-center">
                Group
              </Link>
              <MenubarShortcut>-</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Placeholder <MenubarShortcut>-</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Placeholder</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Placeholder</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Placeholder</MenubarItem>
                <MenubarItem>Placeholder</MenubarItem>
                <MenubarItem>Placeholder</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Placeholder <MenubarShortcut>-</MenubarShortcut>
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
              <Link href={"./groupsGrid"} className="flex items-center">
                Grid
              </Link>{" "}
              <MenubarShortcut>-</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Placeholder</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Placeholder</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Placeholder</MenubarItem>
                <MenubarItem>Placeholder</MenubarItem>
                <MenubarItem>Placeholder</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Placeholder</MenubarItem>
            <MenubarItem>Placeholder</MenubarItem>
            <MenubarItem>Placeholder</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Placeholder</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Placeholder</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Placeholder</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Placeholder</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Placeholder</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Placeholder</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}

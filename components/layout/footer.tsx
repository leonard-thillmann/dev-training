import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "../common/menubar";

export default function Footer() {
  return (
    <Menubar className="inset-x-0 bottom-0 m-4 mt-60 justify-center">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"./imprint"}>Imprint</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "../menu/menubar";

export default function Footer() {
  return (
    <Menubar className="fixed inset-x-0 bottom-0 m-4 justify-center">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={"./imprint"}>Imprint</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

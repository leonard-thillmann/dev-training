"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Label } from "../common/label";
import { MenubarMenu } from "../common/menubar";
import { Switch } from "../common/switch";

export default function LangSwitcher() {
  const [isChecked, setIsChecked] = useState(false);
  let pathname: string = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setIsChecked(false);
    } else if (pathname.startsWith("/de")) {
      setIsChecked(true);
    }
  }, [pathname]);

  const checkHandler = () => {
    if (pathname.startsWith("/en")) {
      const newPath = pathname.replace("/en", "/de");
      window.location.href = newPath;
    } else if (pathname.startsWith("/de")) {
      const newPath = pathname.replace("/de", "/en");
      window.location.href = newPath;
    }
  };

  return (
    <>
      <MenubarMenu>
        <Label htmlFor="language">EN</Label>
        <Switch
          id="language"
          checked={isChecked}
          onCheckedChange={checkHandler}
        />
        <Label htmlFor="language">DE</Label>
      </MenubarMenu>
    </>
  );
}

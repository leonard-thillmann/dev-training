"use client";

import { usePathname, useRouter } from "next/navigation";
import { Label } from "../common/label";
import { RadioGroup, RadioGroupItem } from "../common/radio-group";

export default function GroupsRadio() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="p-2">
      <RadioGroup
        defaultValue="list"
        onValueChange={(newViewType) => {
          // Create new url with the new view type
          const newUrl = `${pathname}?view=${newViewType}`;

          // Push new url to the router
          router.push(newUrl);
        }}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            // checked={viewType === "list"}
            value="list"
            id="list"
          />
          <Label htmlFor="list">List</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            // checked={viewType === "grid"}
            value="grid"
            id="grid"
          />
          <Label htmlFor="grid">Grid</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            // checked={viewType === "table"}
            value="table"
            id="table"
          />
          <Label htmlFor="table">Data Table</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

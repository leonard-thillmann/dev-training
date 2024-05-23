"use client";

import { Label } from "@/components/common/label";
import { RadioGroup, RadioGroupItem } from "@/components/common/radio-group";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/table";
import Text from "@/components/common/text";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GroupsDataTable from "./groups-data-table";
import GroupsGrid from "./groups-grid";

type Group = {
  id: string;
  name: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
};

type dict = {
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  currency: string;
  description: string;
};

type GroupTableProps = {
  groups: Group[];
  dict: dict; // Include the lang prop
};

export default function Groups({ groups, dict }: GroupTableProps) {
  const [view, setView] = useState("");
  const searchParams = useSearchParams();
  const search = searchParams.get("view");

  useEffect(() => {
    if (view !== "") {
      window.location.href = "?view=" + view;
    }
  });

  return (
    <>
      <div className="p-2">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              onClick={() => setView("list")}
              checked={search === "list"}
              value="option-one"
              id="option-one"
            />
            <Label htmlFor="option-one">List</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              onClick={() => setView("grid")}
              checked={search === "grid"}
              value="option-two"
              id="option-two"
            />
            <Label htmlFor="option-two">Grid</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              onClick={() => setView("data-table")}
              checked={search === "data-table"}
              value="option-three"
              id="option-three"
            />
            <Label htmlFor="option-three">Data Table</Label>
          </div>
        </RadioGroup>
      </div>

      {search === "list" ? (
        <Table className="w-11/12">
          <TableCaption>
            <Text>{dict.description}</Text>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>{dict.name}</TableHead>
              <TableHead>{dict.id}</TableHead>
              <TableHead>{dict.createdAt}</TableHead>
              <TableHead>{dict.updatedAt}</TableHead>
              <TableHead className="text-right">{dict.currency}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((group: Group) => (
              <TableRow
                key={group.id}
                onClick={() => (window.location.href = `./groups/${group.id}`)}
              >
                <TableCell>{group.name}</TableCell>
                <TableCell>{group.id}</TableCell>
                <TableCell>{group.createdAt}</TableCell>
                <TableCell>{group.updatedAt}</TableCell>
                <TableCell className="text-right">{group.currency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : search === "grid" ? (
        <GroupsGrid />
      ) : search === "data-table" ? (
        <GroupsDataTable />
      ) : null}
    </>
  );
}

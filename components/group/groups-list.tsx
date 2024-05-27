"use client";

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
  dict: dict;
};

export default function GroupsList({ groups, dict }: GroupTableProps) {
  return (
    <>
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
    </>
  );
}

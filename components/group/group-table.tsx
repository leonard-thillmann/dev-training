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

function GroupTable({ groups }: { groups: Group[] }) {
  return (
    <Table className="w-11/12">
      <TableCaption>
        <Text>A list of all groups.</Text>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Created at</TableHead>
          <TableHead>Updated at</TableHead>
          <TableHead className="text-right">Currency</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {groups.map((group: Group) => (
          <TableRow
            key={group.id}
            onClick={() => (window.location.href = `./${group.id}`)}
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
  );
}

export default GroupTable;

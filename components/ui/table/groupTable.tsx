"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table";

type Group = any;

function GroupTable({ props }: any) {
  return (
    <Table className="m-4 w-11/12">
      <TableCaption>A list of all groups.</TableCaption>
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
        {props.map((group: Group) => (
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

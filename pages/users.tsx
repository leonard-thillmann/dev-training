import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export async function getStaticProps() {
  // fetch the users from the mock API
  const res = await fetch("http://localhost:3001/users");
  const users = await res.json();

  return {
    props: { users }, // props will be passed to the page
  };
}

export default function Users({ users }: { users: any[] }) {
  return (
    <>
      <Button>test</Button>
      <Table>
        <TableCaption>A list of all users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">First name</TableHead>
            <TableHead>Last name</TableHead>
            <TableHead>ID</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell className="text-right">{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{users.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";

import { Label } from "@/components/ui/label";

export default function GroupCard(props: any) {
  return (
    <Card key={props.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 m-4">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>ID: {props.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Created at</Label>
              <CardDescription>{props.createdAt}</CardDescription>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Updated at</Label>
              <CardDescription>{props.updatedAt}</CardDescription>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Currency</Label>
              <CardDescription>{props.currency}</CardDescription>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary">Edit</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}

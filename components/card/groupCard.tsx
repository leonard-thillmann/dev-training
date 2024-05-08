import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card/card";

import { Label } from "@/components/label/label";

export default function GroupCard(props: any) {
  return (
    <Card key={props.id}>
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
    </Card>
  );
}

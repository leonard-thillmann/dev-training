import { Button } from "@/components/ui/button";
import { GroupForm } from "@/components/ui/form/groupForm";

export default function Page() {
  return (
    <div className="m-4">
      <GroupForm />
      <Button variant="outline" className="mt-4">
        Cancel
      </Button>
    </div>
  );
}

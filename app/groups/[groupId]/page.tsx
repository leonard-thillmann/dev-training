export default function GroupDetails({
  params,
}: {
  params: { groupId: string };
}) {
  return <h1>Group: {params.groupId}</h1>;
}

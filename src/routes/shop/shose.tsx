import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shop/shose")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/shop/shose"!</div>;
}

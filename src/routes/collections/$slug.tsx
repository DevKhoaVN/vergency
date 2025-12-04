import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailComponent } from "../../features/products/components/ProductDetail";

export const Route = createFileRoute("/collections/$slug")({
  component: ProductDetailComponent,
});

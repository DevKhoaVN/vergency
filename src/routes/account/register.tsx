import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from "../../features/authencation/components/RegisterForm";

export const Route = createFileRoute("/account/register")({
  component: RegisterForm,
});

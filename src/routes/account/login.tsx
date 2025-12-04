import { createFileRoute } from "@tanstack/react-router";
import LoginForm from "../../features/authencation/components/LoginForm";

export const Route = createFileRoute("/account/login")({
  component: LoginForm,
});

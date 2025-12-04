import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="min-h-screen">
        <Header />
        <Outlet />
        <Footer />
        <TanStackRouterDevtools />
      </div>
    );
  },
});

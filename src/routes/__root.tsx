import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div>
          <Link to="/" className="text-black">
            Home
          </Link>
          <Link to="/about">About</Link>
        </div>

        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },

  notFoundComponent: () => <div>not found</div>,
  errorComponent: () => <div>Erorr</div>,
});

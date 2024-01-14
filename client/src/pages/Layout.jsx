import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>navigation</nav>
      <Outlet />
    </div>
  );
};
export default Layout;

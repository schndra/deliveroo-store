// import { useSelector } from "react-redux";

import MenuHeader from "../components/MenuHeader";
// import MenuNavigation from "../components/MenuNavigation";
import MenuItems from "../components/MenuItems";

const Menu = () => {
  // const data = useSelector((state) => state.restaurant);
  // console.log(data);
  return (
    <>
      {/* menu header*/}
      <MenuHeader />
      {/* menu navigation*/}

      {/* popular list*/}
      <MenuItems />

      {/* <Test /> */}
    </>
  );
};
export default Menu;

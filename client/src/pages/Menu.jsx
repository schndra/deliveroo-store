import { useSelector } from "react-redux";

import MenuHeader from "../components/MenuHeader";
import MenuNavigation from "../components/MenuNavigation";

const Menu = () => {
  const data = useSelector((state) => state.restaurant);
  console.log(data);
  return (
    <>
      {/* menu header*/}
      <MenuHeader />
      {/* menu navigation*/}

      <MenuNavigation />
      {/* popular list*/}
      {/* <Test /> */}
    </>
  );
};
export default Menu;

import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const Menu = () => {
  const data = useSelector((state) => state.restaurant);
  console.log(data);
  return (
    <Box>
      {/* restaurant info*/}

      {/* popular list*/}
      {/* category */}
    </Box>
  );
};
export default Menu;

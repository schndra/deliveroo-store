/* eslint-disable no-unused-vars */
import { Box, Container } from "@mui/material";
import { useEffect, useRef } from "react";
import MenuNavigation from "./MenuNavigation";

const MenuItems = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  //   const section5Ref = useRef();

  const commonStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    // console.log(section1Ref.current.id);
    // console.log(section1Ref.current);
  });

  const navItems = [
    {
      link: "#",
      text: "New Daily Specials",
      navItemRef: section1Ref,
      navItemID: "section1",
    },
    {
      link: "#",
      text: "Salads",
      navItemRef: section2Ref,
      navItemID: "section2",
    },
    {
      link: "#",
      text: "Hot Power Bowls",
      navItemRef: section3Ref,
      navItemID: "section3",
    },
    {
      link: "#",
      text: "Gym food",
      navItemRef: section4Ref,
      navItemID: "section4",
    },
    // { link: "#", text: "Rainbow Wraps", headerRef: section5Ref },
    // { link: "#", text: "Vegain Menu", headerRef: section6Ref },
    // { link: "#", text: "Snacks & fruit", headerRef: section7Ref },
    // { link: "#", text: "Cold Drinks", headerRef: section8Ref },
    // { link: "#", text: "Smoothies, shakes & juice", headerRef: section9Ref },
  ];

  return (
    <>
      <MenuNavigation navItems={navItems} />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#2b7ec2",
            height: "100vh",
            ...commonStyles,
          }}
          ref={section1Ref}
          id="section1"
        >
          item 1
        </Box>
        <Box
          sx={{ bgcolor: "#7e9ab0", height: "100vh", ...commonStyles }}
          ref={section2Ref}
          id="section2"
        >
          item 2
        </Box>
        <Box
          sx={{ bgcolor: "#101c25", height: "100vh", ...commonStyles }}
          ref={section3Ref}
          id="section3"
        >
          item 3
        </Box>
        <Box
          sx={{ bgcolor: "#2d7259", height: "100vh", ...commonStyles }}
          ref={section4Ref}
          id="section4"
        >
          item 4
        </Box>
        {/* <Box sx={{ bgcolor: "#0fa95c", height: "100vh", ...commonStyles }}>
          item 5
        </Box>
        <Box sx={{ bgcolor: "#0fa95c", height: "100vh", ...commonStyles }}>
          item 6
        </Box>
        <Box sx={{ bgcolor: "#0fa95c", height: "100vh", ...commonStyles }}>
          item 7
        </Box> */}
      </Container>
    </>
  );
};
export default MenuItems;

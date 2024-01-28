/* eslint-disable no-unused-vars */
import { Box, Container, Grid } from "@mui/material";
import { useEffect, useRef } from "react";
import MenuNavigation from "./MenuNavigation";

const MenuItems = () => {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();
  const section7Ref = useRef();
  const section8Ref = useRef();
  const section9Ref = useRef();
  //   const section5Ref = useRef();
  // const commonRef = useRef();

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
    {
      link: "#",
      text: "Rainbow Wraps",
      navItemRef: section5Ref,
      navItemID: "section5",
    },
    {
      link: "#",
      text: "Vegain Menu",
      navItemRef: section6Ref,
      navItemID: "section6",
    },
    {
      link: "#",
      text: "Snacks & fruit",
      navItemRef: section7Ref,
      navItemID: "section7",
    },
    {
      link: "#",
      text: "Cold Drinks",
      navItemRef: section8Ref,
      navItemID: "section8",
    },
    {
      link: "#",
      text: "Smoothies, shakes & juice",
      navItemRef: section9Ref,
      navItemID: "section9",
    },
  ];

  return (
    <>
      <MenuNavigation navItems={navItems} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
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
          <Box
            sx={{ bgcolor: "#0fa95c", height: "100vh", ...commonStyles }}
            ref={section5Ref}
            id="section5"
          >
            item 5
          </Box>
          <Box
            sx={{ bgcolor: "#0fa95c", height: "100vh", ...commonStyles }}
            ref={section6Ref}
            id="section6"
          >
            item 6
          </Box>
          <Box
            sx={{ bgcolor: "#0fa95c", height: "100vh", ...commonStyles }}
            ref={section7Ref}
            id="section7"
          >
            item 7
          </Box>
          <Box
            sx={{ bgcolor: "#0fa95c", height: "100vh", ...commonStyles }}
            ref={section8Ref}
            id="section8"
          >
            item 8
          </Box>
          <Box
            sx={{ bgcolor: "#0fa95c", height: "100vh", ...commonStyles }}
            ref={section9Ref}
            id="section9"
          >
            item 9
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <h1>Cart container</h1>
        </Grid>
      </Grid>
    </>
  );
};
export default MenuItems;

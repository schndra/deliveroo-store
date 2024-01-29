/* eslint-disable no-unused-vars */
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import MenuNavigation from "./MenuNavigation";
import { dummyCategoryData } from "../utils";
import SingleMenuItem from "./SingleMenuItem";

const MenuItems = () => {
  const menuSectionStyle = {
    mt: "2rem",
    ml: {
      lg: "4rem",
    },
    top: "10rem",
  };

  // useEffect(() => {
  //   // console.log(section1Ref.current.id);
  //   // console.log(section1Ref.current);
  // });

  // const navItems = [
  //   {
  //     link: "#",
  //     name: "New Daily Specials",
  //     navItemRef: section1Ref,
  //     navItemID: "section1",
  //   },
  //   {
  //     link: "#",
  //     name: "Salads",
  //     navItemRef: section2Ref,
  //     navItemID: "section2",
  //   },
  //   {
  //     link: "#",
  //     name: "Hot Power Bowls",
  //     navItemRef: section3Ref,
  //     navItemID: "section3",
  //   },
  //   {
  //     link: "#",
  //     name: "Gym food",
  //     navItemRef: section4Ref,
  //     navItemID: "section4",
  //   },
  //   {
  //     link: "#",
  //     name: "Rainbow Wraps",
  //     navItemRef: section5Ref,
  //     navItemID: "section5",
  //   },
  //   {
  //     link: "#",
  //     name: "Vegain Menu",
  //     navItemRef: section6Ref,
  //     navItemID: "section6",
  //   },
  //   {
  //     link: "#",
  //     name: "Snacks & fruit",
  //     navItemRef: section7Ref,
  //     navItemID: "section7",
  //   },
  //   {
  //     link: "#",
  //     name: "Cold Drinks",
  //     navItemRef: section8Ref,
  //     navItemID: "section8",
  //   },
  //   {
  //     link: "#",
  //     name: "Smoothies, shakes & juice",
  //     navItemRef: section9Ref,
  //     navItemID: "section9",
  //   },
  // ];

  // console.log(dummyCategoryData);
  return (
    <>
      <MenuNavigation navItems={dummyCategoryData} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          {dummyCategoryData.map((catSection, index) => {
            // console.log(catSection);
            const { dishes, name, id, slug } = catSection;
            return (
              <Box key={id + slug} sx={menuSectionStyle} id={slug}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: "22px", fontWeight: "700", mb:"1rem" }}
                >
                  {name}
                </Typography>
                <SingleMenuItem dishes={dishes} />
              </Box>
            );
          })}
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
          <Box
            position="sticky"
            sx={{
              top: "10rem",
            }}
          >
            <h1>Cart container</h1>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default MenuItems;

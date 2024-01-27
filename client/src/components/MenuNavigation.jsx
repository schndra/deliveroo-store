/* eslint-disable no-unused-vars */
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";

// const navItems = [
//   { link: "#", text: "New Daily Specials" },
//   { link: "#", text: "Salads" },
//   { link: "#", text: "Hot Power Bowls" },
//   { link: "#", text: "Gym food" },
//   { link: "#", text: "Rainbow Wraps" },
//   { link: "#", text: "Vegain Menu" },
//   { link: "#", text: "Snacks & fruit" },
//   { link: "#", text: "Cold Drinks" },
//   { link: "#", text: "Smoothies, shakes & juice" },
// ];
const getSectionIndex = (sectionList, currPosition) => {
  // console.log(currPosition)
  // console.log();
  let currActiveSectionIndex = 0;
  sectionList.forEach((section, index) => {
    const { navItemRef, navItemID } = section;
    // console.log(section);
    if (window.scrollY + 100 >= navItemRef.current.offsetTop) {
      // console.log(section);
      // currentSection = section.
      currActiveSectionIndex = index;
    }
  });

  return currActiveSectionIndex;
};

const MenuNavigation = ({ navItems }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentActiveIndex = getSectionIndex(navItems, window.scrollY);
      console.log("active-index:", currentActiveIndex);
      setActiveSectionIndex(currentActiveIndex);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        top: "4.8rem",
      }}
    >
      <Toolbar>
        <Box>
          {navItems.map((item, index) => {
            const { text, navItemID, navItemRef } = item;

            return (
              <Button
                disableRipple
                key={index}
                sx={{
                  color:
                    activeSectionIndex === index ? "white" : "primary.main",
                  textTransform: "none",
                  backgroundColor:
                    activeSectionIndex === index ? "primary.main" : "white",
                  ":hover": {
                    backgroundColor:
                      activeSectionIndex === index ? "primary.main" : "white",
                    color:
                      activeSectionIndex === index ? "white" : "primary.light",
                  },
                }}
                href={`#${navItemID}`}
              >
                {text}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default MenuNavigation;

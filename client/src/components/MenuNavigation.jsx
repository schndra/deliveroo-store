/* eslint-disable no-unused-vars */
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";

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
    // console.log(navItemRef)
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
  const menuBarSlider = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentActiveIndex = getSectionIndex(
        navItems,
        window.scrollY,
        menuBarSlider
      );
      // console.log("active-index:", currentActiveIndex);
      setActiveSectionIndex(currentActiveIndex);
    };
    window.addEventListener("scroll", handleScroll);

    menuBarSlider.current.scrollLeft += activeSectionIndex * 100;
    // console.log(menuBarSlider.current, "yelow");
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
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            // width: "100%",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            py: "1rem",
            overflow: "hidden",
            scrollBehavior: "smooth",
          }}
          id="slider"
          ref={menuBarSlider}
        >
          {navItems.map((item, index) => {
            const { text, navItemID, navItemRef } = item;

            return (
              <Button
                disableRipple
                key={index}
                sx={{
                  fontWeight: activeSectionIndex === index ? 600 : 400,
                  fontSize: "14px",
                  borderRadius: "3rem",
                  textTransform: "none",
                  color:
                    activeSectionIndex === index ? "white" : "primary.main",
                  backgroundColor:
                    activeSectionIndex === index ? "primary.main" : "white",
                  ":hover": {
                    backgroundColor:
                      activeSectionIndex === index ? "primary.main" : "white",
                    color:
                      activeSectionIndex === index ? "white" : "primary.light",
                  },
                  py: 0,
                  minWidth: `${text.length * 10}px`,
                  whiteSpace: "nowrap",
                }}
                href={`#${navItemID}`}
              >
                {text}
              </Button>
            );
          })}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuNavigation;

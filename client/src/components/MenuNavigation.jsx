/* eslint-disable no-unused-vars */
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";

// const navItems = [
//   { link: "#", name: "New Daily Specials" },
//   { link: "#", name: "Salads" },
//   { link: "#", name: "Hot Power Bowls" },
//   { link: "#", name: "Gym food" },
//   { link: "#", name: "Rainbow Wraps" },
//   { link: "#", name: "Vegain Menu" },
//   { link: "#", name: "Snacks & fruit" },
//   { link: "#", name: "Cold Drinks" },
//   { link: "#", name: "Smoothies, shakes & juice" },
// ];
const getSectionIndex = (sectionList, currPosition) => {
  // console.log(currPosition)
  // console.log();
  let currActiveSectionIndex = 0;
  sectionList.forEach((section, index) => {
    const { slug } = section;

    const element = document.getElementById(slug);

    if (window.scrollY + 100 >= element.offsetTop) {
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

    // menuBarSlider.current.scrollLeft += activeSectionIndex * 100;
    // console.log(menuBarSlider.current, "yelow");
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            // overflowX: "auto",
            scrollBehavior: "smooth",
          }}
          id="slider"
          ref={menuBarSlider}
        >
          {navItems.map((item, index) => {
            // const { name, navItemID, navItemRef } = item;
            const { name, slug } = item;

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
                  minWidth: `${name.length * 10}px`,
                  whiteSpace: "nowrap",
                }}
                // href={`#${slug}`}
                onClick={() => {
                  // console.log(navItemRef.current);
                  const ele = document.getElementById(slug);
                  setActiveSectionIndex(index);
                  ele.scrollIntoView({
                    behavior: "smooth",
                  });
                  // navItemRef.current.scrollIntoView({
                  //   behavior: "smooth",
                  // });
                }}
              >
                {name}
              </Button>
            );
          })}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuNavigation;

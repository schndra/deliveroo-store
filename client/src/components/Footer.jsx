/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { footerItems } from "../utils";
import PlayStoreIcon from "../assets/play-store.png";
import AppStoreIcon from "../assets/apple-store.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { blue } from "@mui/material/colors";

export const SocialIcons = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, pb: 2, pl: 22 }}>
      <FacebookRoundedIcon
        sx={{
          ":hover": {
            cursor: "pointer",
            color: "#1877f2",
          },
        }}
      />
      <TwitterIcon
        sx={{
          ":hover": {
            cursor: "pointer",
            color: "#1da1f2",
          },
        }}
      />
      <InstagramIcon
        sx={{
          ":hover": {
            cursor: "pointer",
            color: "#c13584",
          },
        }}
      />
    </Box>
  );
};

export const FooterCard = ({ item }) => {
  const { mainTitle, links, item_index } = item;
  // console.log(mainTitle, links);
  return (
    <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
      <Card
        sx={{
          minWidth: 275,
          display: "block",
          bgcolor: "#434848",
          minHeight: 425,
        }}
      >
        <CardContent sx={{}}>
          {item_index !== 3 && (
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "white",
                mb: 2,
                fontWeight: 500,
              }}
            >
              {mainTitle}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {item_index !== 3 &&
              links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.url}
                    underline="none"
                    sx={{
                      color: "white",
                      mb: ".150rem",
                      ":hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.title}
                  </Link>
                );
              })}
          </Box>

          {item_index === 3 && (
            <>
              <Typography
                sx={{ fontSize: "1rem", color: "white", fontWeight: 500 }}
              >
                {mainTitle}
              </Typography>

              <Link href="#">
                <img
                  src={AppStoreIcon}
                  style={{ width: 140 }}
                  alt="app store"
                />
              </Link>
              <Link href="#">
                <img
                  src={PlayStoreIcon}
                  style={{ width: 140 }}
                  alt="play store"
                />
              </Link>
            </>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.300",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          mt: 3,
          pb: 2,
          // px: 2,
          display: { xl: "flex" },
          gap: {
            xl: 6,
          },

          justifyContent: "center",
        }}
      >
        {footerItems.map((item, index) => {
          return (
            <FooterCard key={index} item={{ ...item, item_index: index }} />
          );
        })}
      </Grid>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <SocialIcons />
      </Box>
    </Box>
  );
};
export default Footer;

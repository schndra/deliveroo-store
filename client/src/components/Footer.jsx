/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { footerItems } from "../utils";
import PlayStoreIcon from "../assets/play-store.png";
import AppStoreIcon from "../assets/apple-store.png";

export const SocialIcons = () => {
  return (
    <Grid container sx={{ pl: 2, pt: 2, gap: 1 }}>
      <FacebookRoundedIcon
        sx={{
          color: "white",
          ":hover": {
            cursor: "pointer",
            color: "#1877f2",
          },
        }}
      />
      <TwitterIcon
        sx={{
          color: "white",
          ":hover": {
            cursor: "pointer",
            color: "#1da1f2",
          },
        }}
      />
      <InstagramIcon
        sx={{
          color: "white",
          ":hover": {
            cursor: "pointer",
            color: "#c13584",
          },
        }}
      />
    </Grid>
  );
};

const FooterCard = ({ item }) => {
  const { mainTitle, links, item_index } = item;

  const mainCard = {
    backgroundColor: "#434848",
    minHeight: 425,
  };

  const cardContentSyles = {
    display: "flex",
    flexDirection: "column",
    color: "white",
  };

  const linkStyles = {
    color: "white",
    mb: ".150rem",
    ":hover": {
      color: "primary.main",
    },
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={mainCard}>
        <CardContent sx={cardContentSyles}>
          <Typography variant="h6">{mainTitle}</Typography>
          {links.map((link, i) => {
            const { title, url } = link;
            if (item_index !== 3) {
              return (
                <Link href={url} key={i} underline="none" sx={linkStyles}>
                  <Typography variant="p" fontSize={"14px"} lineHeight={"19px"}>
                    {title}
                  </Typography>
                </Link>
              );
            }
            if (item_index === 3) {
              return (
                <Link href={url} key={i} underline="none" sx={linkStyles}>
                  <img
                    src={title === "APP_STORE" ? AppStoreIcon : PlayStoreIcon}
                    style={{ width: 140 }}
                    alt={title}
                  />
                </Link>
              );
            }
          })}
        </CardContent>
      </Card>
    </Grid>
  );
};

const Footer = () => {
  const theme = useTheme();
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const mainContainer = {
    bgcolor: "secondary.main",
    px: isDesktopScreen ? 22 : 2,
    pt: 2,
    pb: 2,
    mt: 4,
  };

  return (
    <Grid container spacing={2} sx={mainContainer}>
      {footerItems.map((item, index) => {
        return <FooterCard key={index} item={{ ...item, item_index: index }} />;
      })}
      <SocialIcons />
    </Grid>
  );
};
export default Footer;

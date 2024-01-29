import { Box, Button, Card, Typography } from "@mui/material";
import EmptyCartIcon from "../assets/icon-cart-gray.svg";
// import DeliveryIcon from "../assets/delivery-icon.svg";

const Cart = () => {
  return (
    <Card
      //   position="sticky"
      sx={{
        top: "11rem",
        mt: "3rem",
        position: "sticky",
        maxWidth: "400px",
        p: "1rem",
      }}
    >
      {/* image if the basket is empty */}
      <Box
        sx={{
          py: "2rem",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "28px",
            height: "28px",
          }}
        >
          <img
            src={EmptyCartIcon}
            alt="empty cart"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
        <Typography sx={{ display: "block" }}>Your basket is empty</Typography>
      </Box>

      <Button
        disabled
        sx={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "primary.main",
          color: "white",
          borderRadius: "0.325rem",
          ":hover": {
            backgroundColor: "primary.light",
          },
          ":disabled": {
            backgroundColor: "#e2e5e5",
            color: "#abadad",
          },
        }}
      >
        Go to checkout
      </Button>
    </Card>
  );
};
export default Cart;

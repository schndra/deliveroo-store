import { Typography } from "@mui/material";
import { customFetch } from "./utils";
import { useEffect } from "react";

const url = "/test";

function App() {
  const handleFetch = async () => {
    const response = await customFetch.get(url);
    const msg = response.data;
    console.log(msg);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <Typography variant="h4" component="h1" color="primary" gutterBottom>
        Material UI Vite.js example
      </Typography>
    </>
  );
}

export default App;

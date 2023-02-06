import React from "react";
import { Box, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box sx={{ marginLeft: "5%", marginTop: "5%" }}>
      <Box sx={{ marginTop: "2%" }}>
        <Typography sx={{ fontSize: "28px", fontWeight: 600 }}>
          Little Story about the company
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;

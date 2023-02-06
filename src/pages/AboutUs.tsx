import React, { useState, useEffect } from "react";
import { getAboutUs } from "../services/user.service";
import { Box, Typography } from "@mui/material";

const AboutUs: React.FC = () => {
  const [aboutUsText, setAboutUsText] = useState<string | undefined>();

  useEffect(() => {
    const getData = async () => {
      const response = await getAboutUs();
      setAboutUsText(response.data);
    };
    getData();
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Typography sx={{ fontSize: "30px" }}>AboutUs</Typography>
      </Box>
      <Box>{aboutUsText && <Box>{aboutUsText}</Box>}</Box>
    </Box>
  );
};

export default AboutUs;

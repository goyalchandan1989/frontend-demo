import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { getCurrentUser } from "../services/auth.service";
import { getProfile } from "../services/user.service";

interface ProfileType {
  userName: string;
  token: string;
  authorId: string;
}

const Profile: React.FC = () => {
  const [userDetails, setUserDetails] = useState<any>();

  const getUserProfileDetails = async (token: string) => {
    try {
      const res = await getProfile(token);
      setUserDetails(res);
    } catch (e) {}
  };

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      getUserProfileDetails(user.token);
    }
  }, []);

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <Box sx={{ marginLeft: "5%", marginTop: "2%" }}>
      <Box sx={{ display: "flex" }}>
        <Avatar
          sizes="ld"
          {...stringAvatar("Chandan Goyal")}
          style={{ marginTop: "12px" }}
        />
        <Box sx={{ width: "100%", marginLeft: "10%" }}>
          <Box>
            <Typography sx={{ fontSize: "40px" }}>Welcome, Chandan</Typography>
          </Box>
          <Box>
            <Button variant="contained">Update</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

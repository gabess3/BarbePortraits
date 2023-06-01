import React from "react";
import { Box, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <Box
        id="Contact"
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#202020",
          paddingY: 4,
        }}
      >
        <a href="mailto:laubarbe727@gmail.com" style={{ color: "black" }}>
          <MailIcon
            sx={{
              fontSize: 30,
              px: 3,
              boxSizing: "revert",
              color: "white",
              transition: "all .3s ease-in-out",
              "&:hover": {
                transform: "scale(1.5)",
              },
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/laura-barbe/"
          target="_blank"
          style={{ color: "black" }}
        >
          <LinkedInIcon
            sx={{
              fontSize: 30,
              px: 3,
              boxSizing: "revert",
              color: "white",
              transition: "all .3s ease-in-out",
              "&:hover": {
                transform: "scale(1.5)",
              },
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/laurabarbeportraits/?hl=en"
          target="_blank"
          style={{ color: "black" }}
        >
          <InstagramIcon
            sx={{
              fontSize: 30,
              px: 3,
              color: "white",
              boxSizing: "revert",
              transition: "all .3s ease-in-out",
              "&:hover": {
                transform: "scale(1.7)",
              },
            }}
          />
        </a>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#202020",
          paddingBottom: 5,
        }}
      >
        <Typography color={"white"} variant="subtitle2">&copy; Barbé Portraits 2019</Typography>
      </Box>
    </>
  );
}

export default Footer;

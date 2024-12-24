import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chat from "./Chat";
import React from "react";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chat />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        {/* Conversation Component */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;

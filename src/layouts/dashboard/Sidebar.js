import React, { useState } from "react";
import AntSwitch from "../../components/AntSwitch";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings";
import Logo from "../../assets/Images/logo.ico";
import { faker } from "@faker-js/faker";

const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: 100,
        height: "100vh",
        boxShadow: "0px 0px 2px rgba(0,0,0.25)",
      }}
    >
      <Stack
        direction="column"
        sx={{ width: "100%", height: "100%" }}
        spacing={3}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Logo} alt="Chat App Logo" />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            direction={"column"}
            alignItems={"center"}
            spacing={3}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  key={el.index}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                  onClick={() => {
                    setSelected(el.index);
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}

            <Divider sx={{ width: 48 }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                onClick={() => {
                  setSelected(3);
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack direction={"column"} alignItems={"center"} spacing={4}>
          <AntSwitch
            defaultChecked
            onChange={() => {
              onToggleMode();
            }}
          />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;

import React from "react";
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import {
  Timeline,
  TextMsg,
  MediaMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from "./Timeline";
const Chatting = () => {
  return (
    <Box
      p={3}
      width="100%"
      sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
    >
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // Timeline
              return <Timeline el={el} />;
            // break;
            case "msg":
              switch (el.subtype) {
                case "reply":
                  // message text
                  return <ReplyMsg el={el} />;
                // break;
                case "img":
                  // img
                  return <MediaMsg el={el} />;
                // break;
                case "doc":
                  return <DocMsg el={el} />;
                // Document
                case "link":
                  return <LinkMsg el={el} />;
                // break;
                default:
                  return <TextMsg el={el} />;
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Chatting;

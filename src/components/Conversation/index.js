import { Stack } from "@mui/material";

import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Chatting from "./Chatting";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width="auto">
      {/* Chat Header */}
      <Header />
      <Chatting />
      <Footer />
    </Stack>
  );
};

export default Conversation;

import React from "react";
import { Route, Routes } from "react-router-dom";
import MailItems from "./MailItems";
import MailDetail from "./MailDetail";
import MailCompose from "./MailCompose";

export const MailContent = () => {
  return (
    <Routes>
      <Route path="compose" element={<MailCompose />} />
      <Route path=":category/:id" element={<MailDetail />} />
      <Route path=":category" element={<MailItems />} />
    </Routes>
  );
};

export default MailContent;

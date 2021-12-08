import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import { queryClient } from "./client";

import MainLayout from "./components/MainLayout";

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MainLayout />
  </QueryClientProvider>,
  document.getElementById("app")
);

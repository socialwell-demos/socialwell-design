import React from "react";
import { storiesOf } from "@storybook/react";
import Welcome from "../welcome";

storiesOf("Welcome", module)
  .addParameters({
    options: {
      showPanel: false,
      showNav: false,
    },
    viewport: {
      viewports: "fullscreen", // newViewports would be an ViewportMap. (see below for examples)
    },
  })
  .add("Welcome", () => <Welcome />);

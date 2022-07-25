import React from "react";

import Slider from "../index";

export default {
  title: "Example/Slider",
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

export const Stats1 = Template.bind({});
Stats1.args = {
  width: "29rem",
};

export const Stats2 = Template.bind({});
Stats2.args = {
  width: "10rem", // px
};

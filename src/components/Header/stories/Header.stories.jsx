import React from "react";

import Header from "../index";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Ash Ketchum",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

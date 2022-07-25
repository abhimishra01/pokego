import React from "react";

import PokeStat from "../index";

export default {
  title: "Example/Stat",
  component: PokeStat,
};

const Template = (args) => <PokeStat {...args} />;

export const Level50 = Template.bind({});

Level50.args = {
  statName: "Attack",
  level: 80,
};

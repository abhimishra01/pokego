import React from "react";

import { PokeCard } from "../index";

export default {
  title: "Example/Card",
  component: PokeCard,
};

const Template = (args) => <PokeCard {...args} />;

export const ExampleCard = Template.bind({});

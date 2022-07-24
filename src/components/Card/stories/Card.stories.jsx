import React from "react";
import { POKEMON_TYPES, SAMPLE_POKEMON_URL } from "utils/constants";
import { colors } from "utils/themes/colors";

import { PokeCard } from "../index";

export default {
  title: "Example/Card",
  component: PokeCard,
  argTypes: {
    backgroundColor: { control: "color" },
    id: { control: "number" },
  },
};

const Template = (args) => <PokeCard {...args} />;

export const ExampleCard = Template.bind({});

ExampleCard.args = {
  src: SAMPLE_POKEMON_URL,
  backgroundColor: colors.grass,
  name: "Bulbasaur",
  type: POKEMON_TYPES.GRASS,
};

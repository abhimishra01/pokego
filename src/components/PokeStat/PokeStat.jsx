import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "utils/themes/colors";
import { Slider } from "components/Slider";
import { SLIDER_RANGE_ARRAY } from "utils/constants";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
`;

const StyledText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.primaryWhite};
`;

const SliderContainer = styled.div`
  margin: 0 1rem;
  width: inherit;
`;

export default function PokeStat({ statName, level }) {
  return (
    <Container>
      <StyledText>{statName}</StyledText>
      <SliderContainer>
        <Slider width={level} />
      </SliderContainer>
      <StyledText>{level}</StyledText>
    </Container>
  );
}

PokeStat.propTypes = {
  statName: PropTypes.string.isRequired,
  level: PropTypes.oneOf(SLIDER_RANGE_ARRAY.map((_, i) => i + 1)).isRequired,
};

PokeStat.defaultProps = {
  level: 80,
};

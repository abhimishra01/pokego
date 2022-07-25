import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "utils/themes/colors";
import { SLIDER_RANGE_ARRAY } from "utils/constants";

const Container = styled.div`
  width: 100%;
  background-color: ${colors.primaryRed};
  color: ${colors.primaryRed};
  position: relative;
  max-height: 1rem;
`;

const StyledSpan = styled.span`
  position: absolute;
  height: auto;
  left: 0;
  min-height: 100% !important;
  background-color: ${colors.secondaryRed};
  color: ${colors.primaryRed};
  width: ${(props) => props.width}%;
`;

export default function Slider({ width }) {
  return (
    <Container>
      Stats Level
      <StyledSpan width={width}></StyledSpan>
    </Container>
  );
}

Slider.propTypes = {
  width: PropTypes.oneOf(SLIDER_RANGE_ARRAY.map((_, i) => i + 1)).isRequired,
};

Slider.defaultProps = {
  width: 50,
};

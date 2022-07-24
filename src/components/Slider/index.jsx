import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "utils/themes/colors";

const Container = styled.div`
  width: 100%;
  background-color: ${colors.primaryRed};
  color: ${colors.primaryRed};
  position: relative;
`;

const StyledSpan = styled.span`
  position: absolute;
  height: auto;
  left: 0;
  min-height: 100% !important;
  background-color: ${colors.secondaryRed};
  color: ${colors.secondaryRed};
  width: ${(props) => props.width};
`;

export const Slider = ({ width }) => {
  return (
    <Container>
      Stats Level
      <StyledSpan width={width}>{width}</StyledSpan>
    </Container>
  );
};

Slider.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Slider.defaultProps = {
  width: "50%",
};

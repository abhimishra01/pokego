import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  background-color: #f19686;
  color: #f19686;
  position: relative;
`;

const StyledSpan = styled.span`
  position: absolute;
  height: auto;
  left: 0;
  min-height: 100% !important;
  background-color: #d14d36;
  color: #d14d36;
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
  backgroundColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Slider.defaultProps = {
  width: "50%",
};

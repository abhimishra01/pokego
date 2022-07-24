import "antd/dist/antd.css";
import { Card } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled(Card)`
  && {
    background-color: ${(props) => props.backgroundColor || "gray"};
  }
`;

export const PokeCard = ({ backgroundColor }) => {
  return (
    <>
      <StyledCard>Hello</StyledCard>
    </>
  );
};

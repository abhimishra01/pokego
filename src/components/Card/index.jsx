import "antd/dist/antd.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Card } from "antd";

import { colors } from "utils/themes/colors";
import { POKEMON_TYPES, SAMPLE_POKEMON_URL } from "utils/constants";

const StyledCard = styled(Card)`
  && {
    border-radius: 1rem;
    background-color: ${(props) => props.bgcolor};
    box-shadow: 0.31rem 0.31rem 0.5rem ${colors.boxShadow};
    &.ant-card .ant-card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      width: 100% !important;
    }
  }
`;
// TODO: add box shadow

const StyledImg = styled.img`
  min-width: 20%;
  max-width: 40%;
  max-height: 30%;
  border: 0.5px solid ${colors.primaryWhite};
  border-radius: 50%;
  background-color: ${colors.skin};
`;

const StyledText = styled.p`
  color: ${colors.primaryWhite};
  letter-spacing: 0.2rem;
  font-size: 1rem;
  font-weight: bold;
`;

const StyledId = styled.p`
  color: ${colors.primaryWhite};
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.2rem;
  margin-top: 0.8rem;
  background-color: ${colors.primaryGray};
`;

export const PokeCard = ({ name, type, id, backgroundColor, src }) => {
  return (
    <StyledCard bgcolor={backgroundColor}>
      <StyledImg src={src} />
      <StyledId>#{id}</StyledId>
      <StyledText>{name}</StyledText>
      <StyledText>{type}</StyledText>
    </StyledCard>
  );
};

PokeCard.propTypes = {
  backgroundColor: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

PokeCard.defaultProps = {
  id: 1,
  src: SAMPLE_POKEMON_URL,
  name: "Bulbasaur",
  type: POKEMON_TYPES.GRASS,
  backgroundColor: colors.primaryGray,
};

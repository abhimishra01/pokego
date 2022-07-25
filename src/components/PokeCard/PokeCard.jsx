import "antd/dist/antd.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Card } from "antd";
import { capitalize, isEmpty } from "lodash";

import { colors } from "utils/themes/colors";
import { POKEMON_TYPES, SAMPLE_POKEMON_URL } from "utils/constants";
import PokeStat from "components/PokeStat";

const HoverCard = styled.div`
  position: absolute;
  background-color: ${colors.secondaryGray};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  transition: 0.4s ease-in-out;
  transform: translateY(100%);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: 0.31rem 0.31rem 0.5rem ${colors.boxShadow};
  &:hover {
    box-shadow: 0.5rem 0.5rem 0.6rem ${colors.primaryGray};
  }
  &:hover ${HoverCard} {
    transform: translateY(0%);
  }
`;

const StyledCard = styled(Card)`
  && {
    &.ant-card .ant-card-body {
      background-color: ${(props) => props.bgcolor};
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      width: 100%;
    }
  }
`;

const StyledImg = styled.img`
  min-width: 20%;
  max-width: 40%;
  border: 0.5px solid ${colors.primaryWhite};
  border-radius: 50%;
  background-color: ${colors.skin};
  object-fit: contain;
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

const StatContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export default function PokeCard({
  name,
  type,
  id,
  backgroundColor,
  src,
  stats,
}) {
  return (
    <Container>
      <StyledCard bgcolor={backgroundColor}>
        <StyledImg src={src} />
        <StyledId>#{id}</StyledId>
        <StyledText>{name}</StyledText>
        <StyledText>{type}</StyledText>
      </StyledCard>
      <HoverCard>
        {!isEmpty(stats) ? (
          stats.map((data, index) => {
            let level;
            const statName = capitalize(data.stat.name);
            if (data.base_stat > 100) {
              level = 100;
            } else {
              level = data.base_stat;
            }

            return (
              <StatContainer key={index}>
                <PokeStat level={level} statName={statName} />
              </StatContainer>
            );
          })
        ) : (
          <StyledText>No Stats found...</StyledText>
        )}
      </HoverCard>
    </Container>
  );
}

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

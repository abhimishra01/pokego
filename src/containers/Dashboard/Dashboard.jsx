import { useState, useEffect, useCallback } from "react";
import { isEmpty, capitalize } from "lodash";
import styled from "styled-components";
import { Col, Row, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";

import PokeCard from "components/PokeCard";
import { getAllPokemons, fetchPokemonsByName } from "services/pokeApi";
import { colors } from "utils/themes/colors";

import { getPokeCardColorByType } from "./dashboardUtil";

const Container = styled.div`
  padding: 4rem;
  min-height: 100vh;
  height: 100%;
  background-image: linear-gradient(
    to right,
    ${colors.secondaryLime},
    ${colors.primaryLime},
    ${colors.paperColor},
    ${colors.primaryPink},
    ${colors.secondaryPink}
  );
`;

const Loading = styled.div`
  display: grid;
  place-items: center;
  color: ${colors.secondaryGray};
`;

const Grid = styled(Row)`
  && {
    &.ant-row {
      margin: 3rem auto;
    }
  }
`;

const StyledCol = styled(Col)`
  && {
    margin-top: 1rem;
  }
`;

export default function Dashboard() {
  let offset = 0;
  const limit = 20;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pokeDataSet, setPokeDataSet] = useState([]);

  const fetchPokemons = useCallback(
    async (limit, offset) => {
      const apiResponse = await getAllPokemons(limit, offset);
      if (!isEmpty(apiResponse)) {
        const pokemonArray = apiResponse.data.results;
        pokemonArray.forEach(async (pokemonInfo) => {
          const response = await fetchPokemonsByName(pokemonInfo.name);
          if (!isEmpty(response)) {
            setPokeDataSet((pokeDataSet) => [...pokeDataSet, response.data]);
          } else {
            setError(error);
          }
        });
      } else {
        setError(error);
      }
    },
    [error, offset]
  );

  useEffect(() => {
    fetchPokemons(limit, offset);
  }, [fetchPokemons]);

  useEffect(() => {
    if (!isEmpty(pokeDataSet)) {
      setLoading(false);
      setError(false);
    }
  }, [pokeDataSet]);

  return (
    <Container>
      {loading && (
        <Loading>
          <Spin size={"large"} />
        </Loading>
      )}
      {error && <h2>Something went wrong</h2>}
      {!loading && !error && (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => fetchPokemons(limit, pokeDataSet.length)}
          hasMore={true}
          loader={
            <Loading key={1}>
              <Spin size={"large"} />
            </Loading>
          }
        >
          <Grid gutter={24}>
            {pokeDataSet.map((pokeData, index) => {
              const { stats, sprites, species, types } = pokeData;
              const pokemonType = types[0].type.name;
              const pokemonName = capitalize(species.name);
              const imageSource = sprites.front_default;
              const bgColor = capitalize(getPokeCardColorByType(pokemonType));
              return (
                <StyledCol key={index} span={6}>
                  <PokeCard
                    id={index + 1}
                    src={imageSource}
                    name={pokemonName}
                    type={capitalize(pokemonType)}
                    backgroundColor={bgColor}
                    stats={stats}
                  />
                </StyledCol>
              );
            })}
          </Grid>
        </InfiniteScroll>
      )}
    </Container>
  );
}

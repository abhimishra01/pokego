import { useState, useEffect, useCallback } from "react";
import { isEmpty } from "lodash";
import styled from "styled-components";
import { Col, Row } from "antd";
import InfiniteScroll from "react-infinite-scroller";

import { PokeCard } from "components/Card";
import { getAllPokemons, fetchPokemonsByName } from "services/pokeApi";

import { getPokeCardColorByType } from "./dashboardUtil";

const Grid = styled(Row)`
  && {
    &.ant-row {
      margin: 3rem auto;
    }
  }
`;

const Container = styled.div`
  padding: 4rem;
`;

const StyledCol = styled(Col)`
  && {
    margin-top: 1rem;
  }
`;

export const Dashboard = () => {
  const [individualData, setIndividualData] = useState([]);
  //   const [response, setResponse] = useState({});
  //   const [nextApiUrl, setNextApiUrl] = useState("");
  let offset = 0;
  const limit = 20;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = useCallback(async () => {
    const apiResponse = await getAllPokemons(limit, offset);
    if (!isEmpty(apiResponse)) {
      const pokemonArray = apiResponse.data.results;
      pokemonArray.forEach(async (pokemonInfo) => {
        const response = await fetchPokemonsByName(pokemonInfo.name);
        if (!isEmpty(response)) {
          setIndividualData((individualData) => [
            ...individualData,
            response.data,
          ]);
        } else {
          setError(error);
        }
      });
    } else {
      setError(error);
    }
  }, [error, offset]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  useEffect(() => {
    if (!isEmpty(individualData)) {
      setLoading(false);
      setError(false);
    }
  }, [individualData]);

  return (
    <Container>
      {loading && <h2> Loading... </h2>}
      {error && <h2>Something went wrong</h2>}
      {!loading && !error && (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => fetchPokemons(limit, offset + limit)}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          <Grid gutter={24}>
            {individualData.map((pokeData, index) => {
              const { sprites, species, types } = pokeData;
              const pokemonType = types[0].type.name;
              const pokemonName = species.name;
              const imageSource = sprites.front_default;
              const bgColor = getPokeCardColorByType(pokemonType);

              return (
                <StyledCol key={index} span={6}>
                  <PokeCard
                    id={index + 1}
                    src={imageSource}
                    name={pokemonName}
                    type={pokemonType}
                    backgroundColor={bgColor}
                  />
                </StyledCol>
              );
            })}
          </Grid>
        </InfiniteScroll>
      )}
    </Container>
  );
};

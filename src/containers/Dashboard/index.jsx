import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import styled from "styled-components";

import { PokeCard } from "components/Card";
import { getAllPokemons, fetchPokemonsByName } from "services/pokeApi";
import { Col, Row } from "antd";

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
  const [response, setResponse] = useState({});
  const [individualData, setIndividualData] = useState([]);
  const [nextApiUrl, setNextApiUrl] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    const apiResponse = await getAllPokemons();
    if (!isEmpty(apiResponse)) {
      setResponse(apiResponse.data);
      const pokemonArray = apiResponse.data.results;
      pokemonArray.forEach((pokemonInfo) =>
        handlePokemonByName(pokemonInfo.name)
      );
    } else {
      setError(error);
    }
  }

  async function handlePokemonByName(name) {
    const apiResponse = await fetchPokemonsByName(name);
    if (!isEmpty(apiResponse)) {
      setIndividualData((individualData) => [
        ...individualData,
        apiResponse.data,
      ]);
    } else {
      setError(error);
    }
  }

  useEffect(() => {
    if (!isEmpty(individualData)) {
      setLoading(false);
    }
  }, [individualData]);

  return (
    <Container>
      <Grid gutter={24}>
        {loading && <h2> Loading... </h2>}

        {!loading & !error &&
          individualData.map((pokeData, index) => {
            console.log("handlingsssss");
            const { stats, sprites, species, types } = pokeData;
            const pokemonType = types[0].type.name;
            const pokemonName = species.name;
            const imageSource = sprites.front_default;
            return (
              <StyledCol span={6}>
                <PokeCard
                  key={index}
                  id={index + 1}
                  src={imageSource}
                  name={pokemonName}
                  type={pokemonType}
                  backgroundColor={"red"}
                />
              </StyledCol>
            );
          })}

        {error && <h2>Something went wrong</h2>}
      </Grid>
    </Container>
  );
};

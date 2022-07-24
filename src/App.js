import styled from "styled-components";

import { Header } from "components/Header";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

// TODO: ADD lazy loading
function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;

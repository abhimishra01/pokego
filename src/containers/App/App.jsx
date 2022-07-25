import styled from "styled-components";

import Header from "components/Header";
import Dashboard from "containers/Dashboard";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
}

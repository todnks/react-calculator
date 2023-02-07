import styled from 'styled-components';
import Container from './page/Container';

const Darkmode = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #666;
`;

function App() {
  return (
    <Darkmode>
      <Container />
    </Darkmode>
  );
}

export default App;

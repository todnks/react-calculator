import { Provider } from 'react-redux';
import styled from 'styled-components';
import Container from './page/Container';
import store from './store';
const Darkmode = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #666;
`;
function App() {
  return (
    <Provider store={store}>
      <Darkmode>
        <Container />
      </Darkmode>
    </Provider>
  );
}

export default App;

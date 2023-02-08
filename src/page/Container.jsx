import styled from 'styled-components';
import AddList from '../component/AddList';
import ListUp from '../component/ListUp';
const ContainerBox = styled.div`
  max-width: 700px;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: gray;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  max-height: 800px;
  position: relative;
`;

const Header = styled.div`
  width: 700px;
  height: 100px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Container = () => {
  return (
    <>
      <ContainerBox>
        <ContentBox>
          <Header>Todo List</Header>
          <AddList />
          <ListUp />
        </ContentBox>
      </ContainerBox>
    </>
  );
};

export default Container;

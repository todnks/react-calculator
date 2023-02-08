import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ListContainer = styled.ul`
  width: 600px;
  margin: auto;
`;
const ListContent = styled.li`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 10px;
  > p {
    padding-left: 10px;
  }
`;
const ListUp = () => {
  const list = useSelector((state) => state.listSlice);
  return (
    <ListContainer>
      {list.map((data) => {
        console.log(data);
        return (
          <ListContent>
            <p>{data.listContent}</p>
          </ListContent>
        );
      })}
    </ListContainer>
  );
};
export default ListUp;

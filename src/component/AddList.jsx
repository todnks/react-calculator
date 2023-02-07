import styled from 'styled-components';

const Content = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 80px;
  justify-content: center;
  display: flex;
  max-width: 600px;
  justify-content: space-between;
`;

const InputValue = styled.div`
  width: 100%;
  max-width: 500px;
  height: 50px;
  > input {
    border-radius: 5px;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    border: none;
  }
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InputButton = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  > button {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: none;
    padding: 0;
    border-radius: 5px;
  }
`;

const InputBox = () => {
  return (
    <>
      <Content>
        <InputValue>
          <input type='text' placeholder='할일을 입력해주세요' />
        </InputValue>
        <InputButton>
          <button type='button'>
            <span>+</span>
          </button>
        </InputButton>
      </Content>
    </>
  );
};
export default InputBox;
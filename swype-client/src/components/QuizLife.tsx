import Quiz_Life from '../assets/Quiz_Life.png';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.text.white};

  width: 66px;
  height: 30px;
  
  color: ${props => props.theme.colors.text.gray};
  img{
  padding-right: 10px;
  };
`;

const QuizLife = () => {
  return (
    <>
      <Item>
        <img
          src={Quiz_Life}
          alt='퀴즈 생명'
        />
        <span>0/3</span>
      </Item>
    </>
  );
};

export default QuizLife;
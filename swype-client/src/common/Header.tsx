import styled from 'styled-components';
import StorePoint from '../assets/StorePoint.png';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #e7e7e7;
  font-size: 14px;
  padding: 12px 30px 12px 15px;
  box-sizing: border-box; 

`;

const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text.black};
  text-align: center;

  button {
    font-size: 24px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: white;
  padding: 5px 10px;
  color: ${props => props.theme.colors.text.gray};
`;

const PointImage = styled.img`
  margin-right: 8px;
`;

const Header = () => {
  return (
    <Nav>
      <Col>
        <button>{'＜'}</button>
      </Col>
      <Col>
        <Item>
          <PointImage
            src={StorePoint}
            alt='포인트'
          />
          <span>0</span>
        </Item>
      </Col>
    </Nav>
  );
};

export default Header;

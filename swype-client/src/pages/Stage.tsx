import { Container } from '../share/utils/GlobalStyle';
import FeatureButtons from '../components/FeatureButtons';
import Frozen_Land from '../assets/Frozen_Land.png';
import Iceberg_Pola from '../assets/Iceberg_Pola.png';
import Header from '../components/common/Header';
import styled from 'styled-components';

import Store from '../assets/Store.png';
import Trash_Old from '../assets/Trash_Old.png';
import { useNavigate } from 'react-router-dom';
import { useLoginCheck } from '../share/quries/useLoginCheck';
import { useEffect } from 'react';

import { getCookie, setCookie } from '../cookie';
import { loginCheck } from '../apis/auth';
import Point from '../components/Point';

const Wrapper = styled.div`
  position: relative;
  background-color: #E1F3F4;
  width: 100%;
  height: 100vh;
  background-image: url(${Frozen_Land});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const CharacterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CharacterImage = styled.img`
  width: 85%;
  height: auto;
`;

const Out = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom: 80%;
`;

const StoreButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  color: ${props => props.theme.colors.text.white};
  font-size: ${props => props.theme.font.size.levelText};
  img {
    width: 40px;
    padding-bottom: 10%;
  }
`;

const TrashButton = styled(StoreButton)`
  padding-top: 5%;
`;

const Stage = () => {
  const navigate = useNavigate();
  // const { data, isLoading, error } = useLoginCheck();

  useEffect(() => {
    loginCheck();
    console.log(getCookie('Authorization'));

    // getCookie 값이 있으면 "/" 없으면 "login"

    // if (!isLoading) {
    //   if (data && data.check_status) {

    // setCookie('Authorization', )
    // 헤더에 토큰 실어서 보내주시면 setcookie 2번째 인자값에 넣어서 보내주기

    //   } else {
    //     navigate('/login');

    //   }
    // }
  }, []);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  const goStorePage = () => {
    navigate('/store');
  };

  const goPollutedPage = () => {
    navigate('/polluted');
  };

  return (
    <Container>
      <Header rightChild={<Point />} />
      <Wrapper>
        <Out>
          <StoreButton onClick={goStorePage}>
            <img src={Store} />
            <span>상점</span>
          </StoreButton>
          <TrashButton onClick={goPollutedPage}>
            <img src={Trash_Old} />
            <span>쓰레기 치우기</span>
          </TrashButton>
        </Out>
        <CharacterBox>
          <CharacterImage src={Iceberg_Pola} />
        </CharacterBox>
        <FeatureButtons />
      </Wrapper>
    </Container>
  );
};

export default Stage;

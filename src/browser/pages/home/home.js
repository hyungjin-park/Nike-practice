import { useState } from "react";
// import styled from "styled-components";
import Itemcategori from "../homeScreen/itemCategori";
import ItemList from "../homeScreen/itemList";
import ItemTopScreen from "../homeScreen/itemTopScreen";
import styled, { keyframes } from "styled-components";

const Home = () => {
  const [cateShow, setCateShow] = useState(true);
  const [changeType, setChangeType] = useState("");

  const onClickShow = () => {
    if (cateShow) {
      setTimeout(() => {
        setCateShow(!cateShow);
      }, 100);
    } else {
      setTimeout(() => {
        setCateShow(!cateShow);
      }, 100);
    }
  };
  return (
    <HomeArea>
      <HomeTop>
        <HomeLeft>남성 신발</HomeLeft>
        <HomeRight>
          <HomeText1 onClick={onClickShow}>필터 숨기기</HomeText1>
          <HomeText2>정렬 기준</HomeText2>
        </HomeRight>
      </HomeTop>
      <HomeWrapper>
        {cateShow === true && (
          <Itemcategori setChangeType={setChangeType} changeType={changeType} />
        )}
        <ItemList changeType={changeType} />
      </HomeWrapper>
    </HomeArea>
  );
};

const HomeArea = styled.div``;

// const HomeTop = styled.div`
//   padding: 1.3em 4em 1.3em 2.4em;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

const HomeWrapper = styled.div`
  display: flex;
`;
// const HomeLeft = styled.div`
//   font-size: 28px;
// `;

// const HomeRight = styled.div`
//   display: flex;
//   gap: 20px;
// `;

// const HomeText1 = styled.div`
//   font-size: 17px;
// `;

// const HomeText2 = styled.div`
//   font-size: 17px;
// `;
// const HomeAreaTop = styled.div``;

const HomeTop = styled.div`
  padding: 1.3em 4em 1.3em 2.4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeLeft = styled.div`
  font-size: 28px;
`;

const HomeRight = styled.div`
  display: flex;
  gap: 20px;
`;

const HomeText1 = styled.div`
  font-size: 17px;
`;

const HomeText2 = styled.div`
  font-size: 17px;
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
const FadeOut = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
export default Home;

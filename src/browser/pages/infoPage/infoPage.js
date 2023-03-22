import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useCustomNavi from "../../../hooks/useCustomNavi";
import INFO_SUPP from "../../components/constans/INFO_SUPP";
import INFO_TITLE from "../../components/constans/INFO_TITLE";
import SHOES_LIST from "../../components/constans/SHOES_LIST";
import SIZE_LIST from "../../components/constans/SIZE_LIST";

const InfoPage = () => {
  const [imgSrc, setImgSrc] = useState("");
  const [list1Show, setList1Show] = useState(false);
  const [list2Show, setList2Show] = useState(false);
  // const [top, setTop] = useState(window.scrollTo(0, 0));
  const { pathName, navigate } = useCustomNavi();
  const { id } = useParams();

  const [slidePx, setSlidePx] = useState(0);

  let result1 = pathName.slice(1);
  let result2 = Number(result1);

  // console.log(result1);

  const toPrev = () => {
    slidePx < 0 && setSlidePx(slidePx + 1360);
  };

  const toNext = () => {
    slidePx > -1400 && setSlidePx(slidePx - 1360);
  };

  const onClickShow = () => {
    if (list1Show) {
      setTimeout(() => {
        setList1Show(!list1Show);
      }, 100);
    } else {
      setTimeout(() => {
        setList1Show(!list1Show);
      }, 100);
    }
  };

  const onClickShow2 = () => {
    if (list2Show) {
      setTimeout(() => {
        setList2Show(!list2Show);
      }, 100);
    } else {
      setTimeout(() => {
        setList2Show(!list2Show);
      }, 100);
    }
  };

  const onClickTop = () => {
    window.scrollTo(0, 0);
  };

  const func = () => {
    setImgSrc(SHOES_LIST[result2 - 1]?.imgDetail1);
    // console.log(typeof pathName, SHOES_LIST[pathName - 1]?.imgDetail1);
  };
  // console.log(typeof pathName === "string");
  useEffect(() => {
    if (typeof pathName === "string") {
      func();
    }
  }, [pathName]);

  return (
    <InfoPageArea>
      <div></div>
      <InfoWrapper>
        {SHOES_LIST.map((item) => {
          if (id === `${item.id}`) {
            return (
              <InfoMapWrap>
                <ShoesImgWrapper>
                  <ShoesImgListWrapper>
                    <ShoesImgList
                      src={item.imgDetail1}
                      onMouseEnter={() => setImgSrc(item.imgDetail1)}
                    />
                    <ShoesImgList
                      src={item.imgDetail2}
                      onMouseEnter={() => setImgSrc(item.imgDetail2)}
                    />
                    <ShoesImgList
                      src={item.imgDetail3}
                      onMouseEnter={() => setImgSrc(item.imgDetail3)}
                    />
                    <ShoesImgList
                      src={item.imgDetail4}
                      onMouseEnter={() => setImgSrc(item.imgDetail4)}
                    />
                    <ShoesImgList
                      src={item.imgDetail5}
                      onMouseEnter={() => setImgSrc(item.imgDetail5)}
                    />
                    <ShoesImgList
                      src={item.imgDetail6}
                      onMouseEnter={() => setImgSrc(item.imgDetail6)}
                    />
                    <ShoesImgList
                      src={item.imgDetail7}
                      onMouseEnter={() => setImgSrc(item.imgDetail7)}
                    />
                    <ShoesImgList
                      src={item.imgDetail8}
                      onMouseEnter={() => setImgSrc(item.imgDetail8)}
                    />
                  </ShoesImgListWrapper>
                  <ShoesImg src={imgSrc} />
                </ShoesImgWrapper>
                <ShoesInfoArea>
                  <ShoesInfoWrap>
                    <ShoesInfoName>{item.shoesName}</ShoesInfoName>
                    <ShoesInfoType>{item.type}</ShoesInfoType>
                    <ShoesInfoPrice>{item.price}</ShoesInfoPrice>
                  </ShoesInfoWrap>
                  <SizeTitle>
                    <SizeTitleSpan1>사이즈 선택</SizeTitleSpan1>
                    <SizeTitleSpan2>사이즈 가이드</SizeTitleSpan2>
                  </SizeTitle>
                  <SizeListArea>
                    {SIZE_LIST.map((size) => {
                      return (
                        <SizeListWrap>
                          <SizeSpan>{size.data}</SizeSpan>
                        </SizeListWrap>
                      );
                    })}
                  </SizeListArea>
                  <BtnWrap>
                    <ShopBtn>장바구니</ShopBtn>
                    <WishBtn>위시리스트</WishBtn>
                  </BtnWrap>
                  <ShoesDesWrap>
                    <ShoesDes>{item.description}</ShoesDes>
                    <ShoesColor>
                      <ShoesColorLi>{item.colorDes}</ShoesColorLi>
                    </ShoesColor>
                    <ShoesStyle>
                      <ShoesStyleLi>{item.styleDes}</ShoesStyleLi>
                    </ShoesStyle>
                  </ShoesDesWrap>
                  <InfoBorder />
                  <DetailInfoTitle onClick={onClickShow}>
                    무료 배송 및 반품
                  </DetailInfoTitle>
                  {list1Show === true && (
                    <DetailInfoArea>
                      {INFO_TITLE.map((item) => (
                        <DetailInfoWrap>
                          <DetailInfoListUl>
                            일반 배송
                            <DetailInfoListLi>{item.list1}</DetailInfoListLi>
                            <DetailInfoListLi>{item.list2}</DetailInfoListLi>
                            <DetailInfoListLi>{item.list3}</DetailInfoListLi>
                          </DetailInfoListUl>
                          <DetailInfoListUl>
                            오늘도착 서비스
                            <DetailInfoListLi>{item.service1}</DetailInfoListLi>
                            <DetailInfoListLi>{item.service2}</DetailInfoListLi>
                            <DetailInfoListLi>{item.service3}</DetailInfoListLi>
                          </DetailInfoListUl>
                          <DetailInfoListUl>
                            A/S 안내
                            <DetailInfoListLi>{item.as}</DetailInfoListLi>
                          </DetailInfoListUl>
                        </DetailInfoWrap>
                      ))}
                    </DetailInfoArea>
                  )}
                  <InfoBorder />
                  <DetailInfoTitle onClick={onClickShow2}>
                    추가 정보
                  </DetailInfoTitle>
                  {list2Show === true && (
                    <DetailInfoArea>
                      {INFO_SUPP.map((item) => (
                        <DetailInfoWrap>
                          <DetailInfoListUl>
                            상품정보제공고시
                            <DetailInfoListLi>{item.infoDay}</DetailInfoListLi>
                            <DetailInfoListLi>{item.list1}</DetailInfoListLi>
                            <DetailInfoListLi>{item.list2}</DetailInfoListLi>
                            <DetailInfoListLi>{item.list3}</DetailInfoListLi>
                            <DetailInfoListLi>{item.list4}</DetailInfoListLi>
                            <DetailInfoListLi>{item.list5}</DetailInfoListLi>
                          </DetailInfoListUl>
                        </DetailInfoWrap>
                      ))}
                    </DetailInfoArea>
                  )}
                  <InfoBorder />
                </ShoesInfoArea>
              </InfoMapWrap>
            );
          }
        })}
      </InfoWrapper>
      <ShoesSlideWrap>
        <SlideTopWord>
          <SlideL>추천 상품</SlideL>
          <SlideRLwrap>
            <SlideR onClick={toPrev}>left</SlideR>
            <SlideR onClick={toNext}>Right</SlideR>
          </SlideRLwrap>
        </SlideTopWord>
        <ShoesSlideBox>
          {SHOES_LIST.map((item) => {
            return (
              <ShoesSlide slide={slidePx}>
                <div>
                  <ShoesSlideImg
                    src={item.imgsrc}
                    alt="NO"
                    pathName={pathName}
                    path="/"
                    onClick={() => {
                      navigate(`/${item.id}`);
                      onClickTop();
                    }}
                  />
                  <ShoesSlideInfo>
                    <ShoesSlideName>{item.shoesName}</ShoesSlideName>
                    <ShoesSlideType>{item.type}</ShoesSlideType>
                    <ShoesSlidePrice>{item.price}</ShoesSlidePrice>
                  </ShoesSlideInfo>
                </div>
              </ShoesSlide>
            );
          })}
        </ShoesSlideBox>
      </ShoesSlideWrap>
    </InfoPageArea>
  );
};

const InfoPageArea = styled.div`
  width: 1440px;
  /* display: flex;
  justify-content: center; */
`;

const InfoWrapper = styled.div`
  /* width: 1400px; */
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4em 0em 6em 4em;

  /* justify-content: center; */
`;

const ShoesImgWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  height: 630px;
  position: sticky;
  top: 0;
`;

const ShoesImgListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1em;
  gap: 7.7px;
  width: 85px;
  height: 72px;
`;
const ShoesImgList = styled.img`
  width: 100%;
  height: 100%;
  max-width: 85px;
  max-height: 72px;
  &:hover {
    opacity: 0.2;
  }
`;

const ShoesImg = styled.img`
  width: 100%;
  height: 100%;
  /* width: auto; */
  /* height: auto; */
  max-width: 680px;
  max-height: 660px;
`;

const InfoMapWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const ShoesInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 190vh;
`;

const ShoesInfoWrap = styled.div`
  margin-bottom: 4.4em;
`;
const ShoesInfoName = styled.p`
  font-size: 28px;
  font-weight: 600;
`;

const ShoesInfoType = styled.p`
  font-size: 17px;
  font-weight: 600;
  padding-top: 0.5em;
`;

const ShoesInfoPrice = styled.p`
  font-size: 17px;
  font-weight: 600;
  padding-top: 1.2em;
`;

const SizeListArea = styled.div`
  width: 366px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const SizeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const SizeTitleSpan1 = styled.span`
  font-weight: 600;
`;

const SizeTitleSpan2 = styled.span`
  color: gray;
  font-weight: 600;
`;
const SizeListWrap = styled.div`
  width: 70px;
  padding: 0.9em 0em 0.9em 0em;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  &:hover {
    border-color: black;
  }
`;

const SizeSpan = styled.span``;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShopBtn = styled.button`
  margin: 1em 0 1em 0;
  padding: 1.4em 0 1.4em 0;
  border-radius: 30px;
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background-color: black;
  &:hover {
    background-color: #e2e2e2;
  }
`;

const WishBtn = styled.button`
  padding: 1.4em 0 1.4em 0;
  border: 1px solid #e2e2e2;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: white;
  &:hover {
    border-color: black;
  }
`;
// const WishBtn = styled.button`
//   padding: 1.4em 0 1.4em 0;
//   border-radius: 30px;
//   font-size: 16px;
//   font-weight: 600;
//   background-color: white;
//   &:hover {
//     border-color: #e2e2e2;
//   }
// `;

const ShoesDesWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.2em;
`;

const ShoesDes = styled.p`
  width: 366px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding: 3.2em 0 2.2em 0;
`;

const ShoesColor = styled.ul`
  width: 360px;
  padding-bottom: 0.6em;
`;

const ShoesColorLi = styled.li`
  margin-left: 10px;
`;

const ShoesStyle = styled.ul`
  width: 360px;
`;

const ShoesStyleLi = styled.li`
  margin-left: 10px;
`;

const DetailInfoArea = styled.div``;

const DetailInfoTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  padding-bottom: 1.4em;
`;
const DetailInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailInfoListUl = styled.ul`
  padding-bottom: 2.1em;
  line-height: 1.8;
`;
const DetailInfoListLi = styled.li`
  margin-left: 14px;
  width: 366px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;
const ShoesSlideWrap = styled.div`
  width: 1400px;
  padding: 0 2em 0 2.2em;
`;

const ShoesSlideBox = styled.div`
  background-color: white;
  width: 1800px;
  display: flex;
  overflow: hidden;

  gap: 22px;
`;

const ShoesSlide = styled.div`
  width: 1000px;
  /* background-color: yellow; */
  transform: translateX(${(props) => props.slide}px);
  transition: 0.7s ease;
`;

const ShoesSlideImg = styled.img`
  width: 440px;
`;

const ShoesSlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
`;

const ShoesSlideName = styled.span`
  font-weight: bold;
  padding-top: 0.8em;
`;

const ShoesSlideType = styled.span`
  color: gray;
  padding-top: 0.4em;
`;

const ShoesSlidePrice = styled.span`
  font-weight: bold;
  padding-top: 1.2em;
`;
const SlideTopWord = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2em 0 1.2em 0;
`;

const SlideRLwrap = styled.div`
  display: flex;
  gap: 10px;
`;
const SlideL = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const SlideR = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const InfoBorder = styled.div`
  width: 26vw;
  border-top: 1px solid black;
  margin: 0 0 1.8em 0;
`;
export default InfoPage;

import { useState } from "react";
import styled from "styled-components";
import CHECK_LISTB from "../../components/constans/checkListB";
import CHECK_LIST from "../../components/constans/checkListS";
import COLOR_LIST from "../../components/constans/itemColor";
import SHOES_LIST from "../../components/constans/SHOES_LIST";
const Itemcategori = ({ changeType, setChangeType }) => {
  const [checkedList, setCheckedList] = useState([]);
  const [checkCount, setCheckCount] = useState(0);

  const [brandChecked, setBrandChecked] = useState([]);
  const [brandCount, setBrandCount] = useState(0);

  const [typeAll, setTypeAll] = useState(true);
  // const [changeType, setChangeType] = useState("남성");

  const onCheckedList = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
      setCheckCount((prev) => prev + 1);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
      setCheckCount((prev) => prev - 1);
    }
  };

  const onCheckedBrand = (checked, item) => {
    if (checked) {
      setBrandChecked([...brandChecked, item]);
      setBrandCount((prev) => prev + 1);
    } else if (!checked) {
      setBrandChecked(brandChecked.filter((el) => el !== item));
      setBrandCount((prev) => prev - 1);
    }
  };

  // const onClickChange = (type) => {
  //   if(type === "남성") {
  //     setChangeType("")
  //     return;
  //   } else {
  //     setChangeType("")
  //     return;
  //   }
  // };
  const onClickChange = (type) => {
    if (typeAll) {
      if (type === "남성") {
        setChangeType("남성");
      } else if (type === "여성") {
        setChangeType("여성");
      }
      // else if (type === "유니섹스")
      //  {
      //   setChangeType("유니섹스");
      // }
      return setTypeAll(false); // 체크박스 모두 체크가 안된 상태
    }
    if (type === "남성") {
      if (changeType === "남성") {
        setChangeType("");
        return setTypeAll(true);
      } else if (changeType === "여성") {
        setChangeType("");
        return;
      } else if (changeType === "") {
        setChangeType("여성");
        return;
      }
    }
    if (type === "여성") {
      if (changeType === "여성") {
        setChangeType("");
        return setTypeAll(true);
      } else if (changeType === "남성") {
        setChangeType("");
        return;
      } else if (changeType === "") {
        setChangeType("남성");
        return;
      }
    }
    // if (type === "유니섹스") {
    //   if (changeType === "유니섹스") {
    //     setChangeType("");
    //     return setTypeAll(true);
    //   } else if (changeType === "남성") {
    //     setChangeType("");
    //     return;
    //   } else if (changeType === "") {
    //     setChangeType("남성");
    //     return;
    //   }
    // }
  };

  const 문자열 = "남성여성유니섹스";
  console.log(문자열.includes("유니섹스"));

  return (
    <ItemcategoriArea>
      <ItemcategoriWrapper>
        <ItemcategoriUl>
          <ItemcategoriLi>라이프스타일</ItemcategoriLi>
          <ItemcategoriLi>조던</ItemcategoriLi>
          <ItemcategoriLi>러닝</ItemcategoriLi>
          <ItemcategoriLi>농구</ItemcategoriLi>
          <ItemcategoriLi>축구</ItemcategoriLi>
          <ItemcategoriLi>트레이닝 및 짐</ItemcategoriLi>
          <ItemcategoriLi>스케이트보딩</ItemcategoriLi>
          <ItemcategoriLi>골프</ItemcategoriLi>
          <ItemcategoriLi>테니스</ItemcategoriLi>
          <ItemcategoriLi>샌들 & 슬리퍼</ItemcategoriLi>
        </ItemcategoriUl>
        <Itemcategoriborder />
        <CheckTitle>성별 ({checkCount})</CheckTitle>
        <ItemcategoriCheckBox>
          {CHECK_LIST.map((item) => {
            return (
              <CheckList>
                <CheckLabel key={item.id}>
                  <CheckInput
                    type="checkbox"
                    value={item.data}
                    onChange={(e) => {
                      onCheckedList(e.target.checked, e.target.value);
                    }}
                    onClick={() => onClickChange(item.data)}
                  />
                  <CheckText>{item.data}</CheckText>
                </CheckLabel>
              </CheckList>
            );
          })}
        </ItemcategoriCheckBox>
        <Itemcategoriborder />
        <ItemcategoriColorText>색상</ItemcategoriColorText>
        <ItemcategoriColor>
          {COLOR_LIST.map((item) => {
            return (
              <ItemColorList>
                <ItemColorListBox boxColor={item.color}></ItemColorListBox>
                <ItemColorListTitle>{item.title}</ItemColorListTitle>
              </ItemColorList>
            );
          })}
        </ItemcategoriColor>
        <Itemcategoriborder />
        <BrandTitle>브랜드 ({brandCount})</BrandTitle>
        <BrandCheckBox>
          {CHECK_LISTB.map((item) => {
            return (
              <CheckList>
                <CheckLabel key={item.id}>
                  <CheckInput
                    type="checkbox"
                    value={item.data}
                    onChange={(e) => {
                      onCheckedBrand(e.target.checked, e.target.value);
                    }}
                  />
                  <CheckText>{item.data}</CheckText>
                </CheckLabel>
              </CheckList>
            );
          })}
        </BrandCheckBox>
      </ItemcategoriWrapper>
    </ItemcategoriArea>
  );
};

const ItemcategoriArea = styled.div`
  width: 20%;
  /* display: flex; */
  padding: 1.2em 1.2em 1em 2.4em;
  /* background-color: yellow; */
  background-color: white;
`;

const ItemcategoriWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemcategoriUl = styled.ul`
  margin-bottom: 1em;
  list-style: none;
`;

const ItemcategoriLi = styled.li`
  font-size: 17px;
  padding-bottom: 0.6em;
`;

const Itemcategoriborder = styled.div`
  width: 11vw;
  border-top: 1px solid #f3f3f3;
  margin: 1em 0 1.4em 0;
`;
const ItemcategoriCheckBox = styled.div``;

const CheckTitle = styled.div`
  margin-bottom: 0.6em;
  font-size: 17px;
`;
const CheckList = styled.div`
  display: flex;
`;
const CheckLabel = styled.label`
  display: flex;
  align-items: center;
`;

const CheckInput = styled.input`
  zoom: 1.3;
  accent-color: black;
`;

const CheckText = styled.p`
  font-size: 17px;
  &:hover {
    color: #e2e2e2;
  }
`;

const ItemcategoriColor = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemcategoriColorText = styled.p`
  font-size: 17px;
`;

const ItemColorList = styled.div`
  width: 50px;
  margin: 1em 0.2em 0.3em 0.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemColorListBox = styled.div`
  width: 28px;
  height: 28px;
  margin-bottom: 0.3em;
  border-radius: 50%;
  background-color: ${({ boxColor }) => boxColor};
`;
const ItemColorListTitle = styled.p`
  font-size: 14px;
  &:hover {
    color: #e2e2e2;
  }
`;

const BrandTitle = styled.p`
  font-size: 17px;
  margin-bottom: 0.6em;
`;

const BrandCheckBox = styled.div``;
export default Itemcategori;

import styled from "styled-components";
import useCustomNavi from "../../../hooks/useCustomNavi";
import SHOES_LIST from "../../components/constans/SHOES_LIST";

const ItemList = ({ changeType }) => {
  const { pathName, navigate } = useCustomNavi();
  return (
    <ItemListArea>
      <ItemListWrapper>
        {SHOES_LIST.map((item, index) =>
          changeType === "" ? (
            <ItemShoesList key={index}>
              <div>
                <ShoesImg
                  src={item?.imgsrc}
                  alt="NO"
                  pathName={pathName}
                  path="/"
                  onClick={() => navigate(`/${item.id}`)}
                />
              </div>
              <ItemListUl>
                <ItemListLi>{item.title}</ItemListLi>
                <ItemListLi>{item.shoesName}</ItemListLi>
                <ItemListLi>{item.type}</ItemListLi>
                <ItemListLi>{item.colorType}</ItemListLi>
                <ItemListLi>{item.price}</ItemListLi>
              </ItemListUl>
            </ItemShoesList>
          ) : (
            changeType === item.type && (
              <ItemShoesList key={index}>
                <div>
                  <ShoesImg
                    src={item?.imgsrc}
                    alt="NO"
                    pathName={pathName}
                    path="/"
                    onClick={() => navigate(`/${item.id}`)}
                  />
                </div>
                <ItemListUl>
                  <ItemListLi>{item.title}</ItemListLi>
                  <ItemListLi>{item.shoesName}</ItemListLi>
                  <ItemListLi>{item.type}</ItemListLi>
                  <ItemListLi>{item.colorType}</ItemListLi>
                  <ItemListLi>{item.price}</ItemListLi>
                </ItemListUl>
              </ItemShoesList>
            )
          )
        )}
      </ItemListWrapper>
    </ItemListArea>
  );
};

const ItemListArea = styled.div`
  width: 100%;
  /* background-color: red; */
  background-color: white;
  margin-left: 3.6em;
`;

const ItemListWrapper = styled.div`
  padding: 1em 0 1em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

const ItemShoesList = styled.div`
  width: 31%;
  height: 31%;
  /* background-color: blue; */
`;

const ShoesImg = styled.img`
  width: 100%;
`;

const ItemListUl = styled.ul`
  list-style: none;
`;

const ItemListLi = styled.li``;
export default ItemList;

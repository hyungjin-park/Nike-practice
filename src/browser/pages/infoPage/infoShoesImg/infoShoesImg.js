import styled from "styled-components";
import SHOES_LIST from "../../../components/constans/SHOES_LIST";

const InfoShoesImg = () => {
  return (
    <InfoShoesImgArea>
      {SHOES_LIST.map((item) => {
        return (
          <div>
            <ShoesImg src={item.imgDetail} />
          </div>
        );
      })}
    </InfoShoesImgArea>
  );
};

const InfoShoesImgArea = styled.div``;

const ShoesImg = styled.img``;
export default InfoShoesImg;

import styled from "styled-components";
import useCustomNavi from "../../hooks/useCustomNavi";

const Header = () => {
  const { pathName, navigate } = useCustomNavi();
  return (
    <HeaderArea>
      <HeaderWrapper>
        <HeaderLeftLogo
          alt="NO"
          pathName={pathName}
          path="/"
          onClick={() => navigate("/")}
        >
          No Logo
        </HeaderLeftLogo>
        <HeaderMenuUl>
          <HeaderMenuli>New Releases</HeaderMenuli>
          <HeaderMenuli>Men</HeaderMenuli>
          <HeaderMenuli>Women</HeaderMenuli>
          <HeaderMenuli>Kids</HeaderMenuli>
          <HeaderMenuli>Sale</HeaderMenuli>
          <HeaderMenuli>SNKRS</HeaderMenuli>
          <HeaderMenuli>FEEL YOUR ALL</HeaderMenuli>
        </HeaderMenuUl>
        <SearchInputWrapper>
          <SearchInput placeholder="검색" />
        </SearchInputWrapper>
      </HeaderWrapper>
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  width: 100%;
  /* background-color: red; */
  background-color: white;
  display: flex;
  padding: 1.1em 1.2em 1.1em 1.2em;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

const HeaderLeftLogo = styled.div`
  display: flex;
`;

const HeaderMenuUl = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;

const HeaderMenuli = styled.li`
  font-size: 19px;
  &:hover {
    text-decoration: underline;
  }
`;

const SearchInputWrapper = styled.div``;
const SearchInput = styled.input`
  border-radius: 10px;
`;

const HeaderUnderWrapper = styled.div`
  width: 100%;
  background-color: gray;
`;
export default Header;

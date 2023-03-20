import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <LayoutArea>
      <LayoutWrapper>
        <Header />
        <BodyArea>{children}</BodyArea>
        <Footer />
      </LayoutWrapper>
    </LayoutArea>
  );
};

const LayoutArea = styled.div``;

const LayoutWrapper = styled.div``;

const BodyArea = styled.div``;
export default Layout;

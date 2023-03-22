import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/layout";
import Home from "./pages/home/home";
import InfoPage from "./pages/infoPage/infoPage";

const Browser = () => {
  return (
    <BrowserArea>
      <Layout>
        <Routes>
          <Route path="/:id" element={<InfoPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserArea>
  );
};

const BrowserArea = styled.div``;
export default Browser;

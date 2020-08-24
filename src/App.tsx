import React, {useState} from "react";

import GlobalStyles from "./styles/global";
import { Wrapper, Container, Content } from "./styles";

import Asside from "./components/Asside";
import Header from "./components/Header";

import Browser from "./Pages/Browser";

import data from "./data/data"
import links from "./data/links"

function App() {
  const [code, setCode] = useState(0)
  const [link, setLink] = useState(0)

  function toggleActiveMenu(code: number , link: number) {
    setCode(code)
    setLink(link)
  }

  return (
    <Wrapper>
      <GlobalStyles />
      <Container>
        <Asside handle={toggleActiveMenu}/>
        <Content>
          <Header />
          <Browser code={data[code].code} link={links[link]}/>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default App;

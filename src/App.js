import React from 'react';
import Navbar from "./components/Navbar";
import AccountProfile from "./components/AccountProfile";
import { Container, Header, Icon } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import styled from 'styled-components';
import Home from "./components/Home";

const App = () => (
  <>
    <Billboard>
      <Icon inverted color="teal" name='user secret' size='big' />
      <Header size='large' inverted color='white'>The Most Awesome User Account Ever</Header>
    </Billboard>
    <Background>
      <Container>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route
            exact
            path="/account/profile"
            render={() => <AccountProfile />}
          />
        </Switch>
      </Container>
    </Background>
  </>
)

const Background = styled.div`
  background: #1b1c1d;
  padding: 30px;
  dipslay: flex;
`;

const Billboard = styled.div`
  background: #1b1c1d;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.h1`
  padding-top: 40px !important;
  padding-bottom: 40px !important;
`;

export default App;
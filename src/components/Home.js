import React from 'react'
import Friends from "./Friends"
import Videos from "./Videos"
import styled from 'styled-components';
import { Header, Divider } from 'semantic-ui-react'

const Home = () => (
  <>
    <Header as={HeaderText} inverted color='white'>Friends</Header>
    <Divider inverted></Divider>
    <Friends/>
    <Header as={HeaderText} inverted color='white'>Videos</Header>
    <Divider inverted></Divider>
    <Videos/>
  </>
);

const HeaderText = styled.div`
  padding-top: 60px !important;
`;

export default Home;



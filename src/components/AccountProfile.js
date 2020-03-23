import React from "react";
import Account from "./Account";
import AccountForm from "./AccountForm";
import styled from 'styled-components';
import { Header, Divider } from "semantic-ui-react";


const AccountProfile = () => (
  <>
    <Header as={HeaderText} inverted color='white'>Account Info</Header>
    <Divider inverted></Divider>
    <Account />
    <Header as={HeaderText} inverted color='white'>Update Account</Header>
    <Divider inverted></Divider>
    <AccountForm />
  </>
)

const HeaderText = styled.div`
  padding-top: 60px !important;
`;

export default AccountProfile;
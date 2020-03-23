import React from "react";
import { Card, Image } from "semantic-ui-react";
import { AccountConsumer } from "../providers/AccountProvider";

const Account = () => (
  <AccountConsumer>
    {value => (
      
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{value.userName}</Card.Header>
          <Card.Meta>Date Joined: {value.dateJoined}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>{value.email}</p>
        </Card.Content>
      </Card>
    )}
  </AccountConsumer>
);

export default Account;

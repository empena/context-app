import React from 'react'
import { Label } from 'semantic-ui-react'
import styled from 'styled-components';

const Friends = () => (
  <FriendContainer>
  <div>
    <Label as='a' color='blue' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='teal' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      Helen
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
    <Label as='a' color='blue' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='teal' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      Helen
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
    <Label as='a' color='blue' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
  </div>
  </FriendContainer>
)

const FriendContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Friends;
import React from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer } from "../providers/AccountProvider"
import styled from 'styled-components';

class AccountForm extends React.Component {

  state = { 
    userName: this.props.userName, 
    email: this.props.email, 
  };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault(); 
    const account = { ...this.state, };
    this.props.updateAccount(account);
  }
  
  render() {
    const { userName, email, } = this.state;
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            type="text"
            name="userName"
            value={userName}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Button color="teal">Save</Form.Button>
        </Form>
      </FormContainer>
    )
  }
}

const FormContainer = styled.div`
  padding-right: 700px;
`;

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          userName={value.userName}
          email={value.email}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
};

export default ConnectedAccountForm;




import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";

class Navbar extends React.Component {

  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {

    const { activeItem } = this.state

    return (
      <AccountConsumer>
        { value => (
          <Menu inverted tabular>
            <NavLink to="/">
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                Dashboard
              </Menu.Item>
            </NavLink>
            <NavLink to="/account/profile">
            <Menu.Item name='account' active={activeItem === 'account'} onClick={this.handleItemClick}>
                { value.userName } Account
              </Menu.Item>
            </NavLink>
          </Menu> 
        )}
      </AccountConsumer>
    )
  }
}

export default Navbar;
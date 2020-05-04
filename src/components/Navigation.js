import React from 'react';
import { Menu } from 'semantic-ui-react'

class Navigation extends React.Component {

  state = { activeItem: 'dimensions'}

  onItemClick = (e, { name, params, type }) =>  {
    this.setState({ activeItem: name })
    this.props.onClick(params, type);
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="dimensions"
          active={activeItem === "dimensions"}
          type="locations"
          params={{dimension: "Fantasy Dimension"}}
          onClick={this.onItemClick}
        >
          Fantasy Dimension
        </Menu.Item>

        <Menu.Item
          name="locations"
          active={activeItem === "locations"}
          type="locations"
          params={{name: "earth"}}
          onClick={this.onItemClick}
        >
          Location Earth
        </Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          type="episodes"
          onClick={this.onItemClick}
        >
          Something Ricked This Way Comes
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navigation;
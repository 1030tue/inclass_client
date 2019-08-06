import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Bio from './Bio'
import AboutInclass from './AboutInclass'

export default class MenuLeft extends Component {
  state = { activeItem: 'inclass' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item name='inclass' active={activeItem === 'inclass'} onClick={this.handleItemClick} />
            <Menu.Item name='me' active={activeItem === 'me'} onClick={this.handleItemClick} />

          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          {this.state.activeItem==="me" ?
          <Segment>
            <Bio/>
          </Segment>
          : <Segment>
            <AboutInclass/>
          </Segment>}
        </Grid.Column>
      </Grid>
    )
  }
}

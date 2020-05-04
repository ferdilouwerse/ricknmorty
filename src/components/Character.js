import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { Card, Image, List, Placeholder } from 'semantic-ui-react';


class Character extends React.Component {

  render() {
    return(
      <Card>
        {this.props.loading ? (
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        ) : (
          <Image src={this.props.character.image} wrapped ui={false} />
        )}

        <Fragment>
          <Card.Content>
            {this.props.loading ? (
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length='very short' />
                  <Placeholder.Line length='medium' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            ) : (
              <Fragment>
                <Card.Header>{this.props.character.name}</Card.Header>
                <Card.Meta>
                  <span className='date'>Created <Moment fromNow>{this.props.character.created}</Moment></span>
                </Card.Meta>
                <Card.Description>
                  <List divided verticalAlign='middle'>
                    <List.Item>
                      <List.Content floated='right'>{this.props.character.status}</List.Content>
                      <List.Content>Status</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated='right'>{this.props.character.species}</List.Content>
                      <List.Content>Species</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated='right'>{this.props.character.gender}</List.Content>
                      <List.Content>Gender</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated='right'>{this.props.character.origin.name}</List.Content>
                      <List.Content>Origin</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content floated='right'>{this.props.character.location.name}</List.Content>
                      <List.Content>Location</List.Content>
                    </List.Item>
                  </List>
                </Card.Description>
              </Fragment>
            )}
          </Card.Content>
        </Fragment>
      </Card>
    );
  }
}

export default Character
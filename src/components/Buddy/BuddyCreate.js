import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buddyUpdate, buddyCreate } from '../../actions';
import { Card, CardSection, Button } from '../common';
import BuddyForm from './BuddyForm';

class BuddyCreate extends Component {
  onButtonPress() {
    const { item, phone, platform } = this.props;

    this.props.buddyCreate({ item, phone, platform: platform || 'Facebook' });
  }

  render() {
    return (
      <Card>
        <BuddyForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { item, phone, platform } = state.buddyForm;

  return { item, phone, platform };
};

export default connect(mapStateToProps, {
  buddyUpdate, buddyCreate
})(BuddyCreate);

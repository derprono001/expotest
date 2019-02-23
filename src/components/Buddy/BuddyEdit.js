import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Communications } from 'react-native-communications';
import BuddyForm from './BuddyForm';
import { buddyUpdate, buddySave, buddyDelete } from '../../actions';
import { Card, CardSection, Button, Confirm } from '../common';

class BuddyEdit extends Component {
  state = { showModal: false };

  componentDidMount() {
    _.each(this.props.buddy, (value, prop) => {
      this.props.buddyUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { item, phone, platform } = this.props;

    this.props.buddySave({ item, phone, platform, uid: this.props.buddy.uid });
  }

  onTextPress() {
    const { phone, platform } = this.props;

    Communications.text(phone, `You have a buddy on ${platform}`);
  }

  onAccept() {
    const { uid } = this.props.buddy;

    this.props.buddyDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <BuddyForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { item, phone, platform } = state.buddyForm;

  return { item, phone, platform };
};

export default connect(mapStateToProps, {
  buddyUpdate, buddySave, buddyDelete
})(BuddyEdit);

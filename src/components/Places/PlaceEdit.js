import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Communications } from 'react-native-communications';
import PlaceForm from './PlaceForm';
import { placeUpdate, placeSave, placeDelete } from '../../actions';
import { Card, CardSection, Button, Confirm } from '../common';

class PlaceEdit extends Component {
  state = { showModal: false };

  componentDidMount() {
    _.each(this.props.place, (value, prop) => {
      this.props.placeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { item, phone, shift } = this.props;

    this.props.placeSave({ item, phone, shift, uid: this.props.place.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.place;

    this.props.placeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <PlaceForm />

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
  const { item, phone, shift } = state.placeForm;

  return { item, phone, shift };
};

export default connect(mapStateToProps, {
  placeUpdate, placeSave, placeDelete
})(PlaceEdit);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeUpdate, placeCreate } from '../../actions';
import { Card, CardSection, Button } from '../common';
import PlaceForm from './PlaceForm';

class PlaceCreate extends Component {
  onButtonPress() {
    const { item, phone, shift } = this.props;

    this.props.placeCreate({ item, phone, shift: shift || 'Game Copy' });
  }

  render() {
    return (
      <Card>
        <PlaceForm {...this.props} />
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
  const { item, phone, shift } = state.placeForm;

  return { item, phone, shift };
};

export default connect(mapStateToProps, {
  placeUpdate, placeCreate
})(PlaceCreate);

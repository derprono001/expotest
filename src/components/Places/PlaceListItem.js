import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../common';

class PlaceListItem extends Component {
  onRowPress() {
    Actions.placeEdit({ place: this.props.place });
  }

  render() {
    const { item } = this.props.place;
    const { phone } = this.props.place;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {item}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>
              {phone}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default PlaceListItem;

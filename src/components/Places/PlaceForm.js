import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { placeUpdate } from '../../actions';
import { CardSection, Input } from '../common';

class PlaceForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Location"
            placeholder="name"
            value={this.props.item}
            onChangeText={value => this.props.placeUpdate({ prop: 'item', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Address"
            placeholder=""
            value={this.props.phone}
            onChangeText={value => this.props.placeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'row' }}>
          <Text style={styles.pickerTextStyle}>Type</Text>
          <Picker
            style={{ flex: 0.7 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.placeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Restaurant" value="GameCopy" />
            <Picker.Item label="Bar" value="PCComponents" />
            <Picker.Item label="Monitor" value="Monitor" />
            <Picker.Item label="Trivia" value="Trivia" />
            <Picker.Item label="Mouse Keyboard" value="MK" />
            <Picker.Item label="Console" value="Console" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    flex: 0.3,
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 12
  }
};

const mapStateToProps = (state) => {
  const { item, phone, shift } = state.placeForm;

  return { item, phone, shift };
};

export default connect(mapStateToProps, { placeUpdate })(PlaceForm);

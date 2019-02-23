import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { buddyUpdate } from '../../actions';
import { CardSection, Input } from '../common';

class BuddyForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Buddy"
            placeholder="name"
            value={this.props.item}
            onChangeText={value => this.props.buddyUpdate({ prop: 'item', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="number"
            value={this.props.phone}
            onChangeText={value => this.props.buddyUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'row' }}>
          <Text style={styles.pickerTextStyle}>Type</Text>
          <Picker
            style={{ flex: 0.7 }}
            selectedValue={this.props.platform}
            onValueChange={value => this.props.buddyUpdate({ prop: 'platform', value })}
          >
            <Picker.Item label="Facebook" value="Facebook" />
            <Picker.Item label="Twitter" value="Twitter" />
            <Picker.Item label="Instagram" value="Instagram" />
            <Picker.Item label="9gag" value="9gag" />
            <Picker.Item label="Reddit" value="Reddit" />
            <Picker.Item label="Steam" value="Steam" />
            <Picker.Item label="Linkedin" value="Linkedin" />
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
  const { item, phone, platform } = state.buddyForm;

  return { item, phone, platform };
};

export default connect(mapStateToProps, { buddyUpdate })(BuddyForm);

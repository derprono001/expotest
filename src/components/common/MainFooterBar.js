import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class MainFooterBar extends Component {
  //TODO : edit later when poping screen without change the whole screen
  // Idea about using Native base Tab
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            active={
              this.props.isOnHome ||
              this.props.page.startsWith('index' || 'home')
            }
            onPress={() => Actions.index()}
          >
            <Icon
              active={
                this.props.isOnHome ||
                this.props.page.startsWith('index' || 'home')
              }
              name="home"
              type="Entypo"
            />
          </Button>
          <Button
            active={this.props.isOnMap || this.props.page.startsWith('map')}
            onPress={() => Actions.map()}
          >
            <Icon
              active={this.props.isOnMap || this.props.page.startsWith('map')}
              name="map"
              type="MaterialIcons"
            />
          </Button>
          <Button
            active={
              this.props.isOnConnection ||
              this.props.page.startsWith('connections')
            }
            onPress={() => Actions.connections()}
          >
            <Icon
              active={
                this.props.isOnConnection ||
                this.props.page.startsWith('connections')
              }
              name={this.props.isOnConnection ? 'people' : 'people-outline'}
              type="MaterialIcons"
            />
          </Button>
          <Button
            active={
              this.props.isOnNotification ||
              this.props.page.startsWith('notifications')
            }
            onPress={() => Actions.notifications()}
          >
            <Icon
              active={
                this.props.isOnNotification ||
                this.props.page.startsWith('notifications')
              }
              name={
                this.props.isOnNotification
                  ? 'notifications'
                  : 'notifications-none'
              }
              type="MaterialIcons"
            />
          </Button>
          <Button
            active={
              this.props.isOnMenu || this.props.page.startsWith('usermenu')
            }
            onPress={() => Actions.usermenu()}
          >
            <Icon
              active={
                this.props.isOnMenu || this.props.page.startsWith('usermenu')
              }
              name="menu"
              type="MaterialIcons"
            />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const mapStateToProps = state => {
  const {
    isOnConnection,
    isOnHome,
    isOnMap,
    isOnMenu,
    isOnNotification
  } = state.navigation;

  return { isOnConnection, isOnHome, isOnMap, isOnMenu, isOnNotification };
};

export default connect(
  mapStateToProps,
  undefined
)(MainFooterBar);

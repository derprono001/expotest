import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { buddyFetch } from '../../actions';
import ListItem from '../Places/PlaceListItem';

class BuddyList extends Component {
  componentDidMount() {
    this.props.buddiesFetch();

    this.createDataSource(this.props);
  }

  getDerivedStateFromProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props us stull the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ buddies }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(buddies);
  }

  renderRow(buddy) {
    return <ListItem buddy={buddy} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const buddies = _.map(state.buddies, (val, uid) => ({ ...val, uid }));

  return { buddies };
};

export default connect(mapStateToProps, { buddyFetch })(BuddyList);

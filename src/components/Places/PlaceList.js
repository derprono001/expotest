import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { placesFetch } from '../../actions';
import ListItem from './PlaceListItem';

class PlaceList extends Component {
  componentDidMount() {
    this.props.placesFetch();

    this.createDataSource(this.props);
  }

  getDerivedStateFromProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props us stull the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ places }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(places);
  }

  renderRow(place) {
    return <ListItem place={place} />;
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
  const places = _.map(state.places, (val, uid) => ({ ...val, uid }));

  return { places };
};

export default connect(mapStateToProps, { placesFetch })(PlaceList);

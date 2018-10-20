import React from 'react';
import { ScrollView, StyleSheet, RefreshControl, Text, TouchableWithoutFeedback,View } from 'react-native';

export class RefreshControlComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        isRefreshing: false,
        loaded: 0,
        rowData: Array.from(new Array(20)).map(
          (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
    };
  }

  render() {
    const rows = this.state.rowData.map((row, ii) => {  return <Row key={ii} data={row} onClick={this._onClick} />; });
    return (
      <ScrollView style={styles.scrollview}
        refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
              tinColor="#ff0000"
              title="Loading..."
              titleColor="#00ff00"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00" /> }>
            {rows}
      </ScrollView>
    );
  }

  _onClick = (row) => {
    console.log(row);
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  }
  _onRefresh = () => {
    console.log("Refreshing");
    this.setState({isRefreshing: true});
    setTimeout(() => {
      const rowData = Array.from(new Array(10)).map((val, i) => ({
        text: 'Loaded row ' + (+this.state.loaded + i),
        clicks: 0,
      })).concat(this.state.rowData);

      this.setState({
          loaded: this.state.loaded + 10,
          isRefreshing: false,
          rowData: rowData,
      });
    }, 1000);
  }
}



class Row extends React.Component {

  _onClick = () => {
    this.props.onClick(this.props.data);
  }

  render() {
    return (

        <TouchableWithoutFeedback onPress={this._onClick}>
            <View style={styles.row}>
                <Text style={styles.text}>
                    {this.props.data.text + ' (' + this.props.data.clicks + ' Clicks)'}
                </Text>
            </View>
        </TouchableWithoutFeedback>

    );
  }
}




const styles = StyleSheet.create({
  row: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
  },
});

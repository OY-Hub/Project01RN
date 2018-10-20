import React from 'react';
import {StyleSheet,Text, View} from 'react-native';
import { Avatar, Button } from 'react-native-elements';

export class OUserCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        card: this.props.card,
    };
  }

  renderCard_1 = () => {
    return (
        <View style={styles.container}>
            <View style={{flex: 3, flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Avatar
                  width={145}
                  height={145}
                  source={{
                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
                  }}
                  activeOpacity={0.7}
                  avatarStyle={{borderRadius: 145/2}}
                  overlayContainerStyle={{backgroundColor: 'transparent'}}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ flex: 1, marginTop: 10, justifyContent: 'center'}}>
                  <Text style={{ fontSize: 25, color: 'rgba(98,93,144,1)', marginLeft: -15}}>
                    Paul Allen
                  </Text>
                </View>
              </View>
            </View>
            <View style={{width: 300, borderWidth: 0.5, borderColor: 'rgba(222, 223, 226, 1)', marginHorizontal: 20, height: 1, marginVertical: 10}} />
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Button
                  title='View Profile'
                  buttonStyle={{height: 33, width: 120, backgroundColor: 'rgba(211, 053, 026, 1)', borderRadius: 5}}
                  titleStyle={{ fontSize: 13, color: 'gray'}}
                  onPress={() => console.log('Jumping to profile')}
                  underlayColor="transparent"
                />
              </View>
              <View style={{flex: 1}}>
                <Button
                  title='Send Message'
                  buttonStyle={{height: 33, width: 120, backgroundColor: 'rgba(113, 154, 112, 1)', borderRadius: 5}}
                  titleStyle={{fontFamily: 'regular', fontSize: 13, color: 'white'}}
                  onPress={() => console.log('Sending message')}
                  underlayColor="transparent"
                />
              </View>
            </View>
        </View>
    );
  }
  renderCard_2 = () => {
    return (
      <View style={styles.container}>
          <View style={{flex: 1,  flexDirection: 'row',}}>

              <Avatar
                width={145}
                height={145}
                source={{
                  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
                }}
                activeOpacity={0.7}
                avatarStyle={{borderRadius: 145/2, flex: 1, width: 145, marginTop: -70, marginLeft: -70}}
                overlayContainerStyle={{backgroundColor: 'transparent'}}
              />
              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
                  <Text style={{ fontSize: 25, color: 'rgba(98,93,144,1)', marginLeft: -15}}> Paul Allen </Text>
                  <Text style={{ fontSize: 25, color: 'rgba(98,93,144,1)', marginLeft: -15}}> Senior Manager </Text>
                  <Text style={{ fontSize: 25, color: 'rgba(98,93,144,1)', marginLeft: -15}}> Email </Text>
                  <Text style={{ fontSize: 25, color: 'rgba(98,93,144,1)', marginLeft: -15}}> Phone </Text>
              </View>

          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Text> This is Card Number 2 </Text>
          </View>
      </View>
    );
  }
  renderCard_3 = () => {
    return (
      <View style={styles.container}>
        <Text> This is Card Number 3 </Text>
      </View>
    );
  }
  renderCard_4 = () => {
    return (
      <View style={styles.container}>
        <Text> This is Card Number 4 </Text>
      </View>
    );
  }
  renderCard_5 = () => {
    return (
      <View style={styles.container}>
        <Text> This is Card Number 5 </Text>
      </View>
    );
  }
  renderDefault = (card) => {
    return (
        <Text>This is default ( card={card} ) </Text>
    );
  }
  render() {
    const {card} = this.state;

    switch (card) {
      case 'Card-1':  return this.renderCard_1(card);
      case 'Card-2':  return this.renderCard_2(card);
      case 'Card-3':  return this.renderCard_3(card);
      case 'Card-4':  return this.renderCard_4(card);
      case 'Card-5':  return this.renderCard_5(card);
      default: return this.renderDefault(card);

    }


  }
  _onRefresh = () => {
    // console.log("Refreshing");
    // this.setState({isRefreshing: true});
    // setTimeout(() => {
    //   const rowData = Array.from(new Array(10)).map((val, i) => ({
    //     text: 'Loaded row ' + (+this.state.loaded + i),
    //     clicks: 0,
    //   })).concat(this.state.rowData);
    //
    //   this.setState({
    //       loaded: this.state.loaded + 10,
    //       isRefreshing: false,
    //       rowData: rowData,
    //   });
    // }, 1000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    height: 250,
    marginBottom: 10
  },
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

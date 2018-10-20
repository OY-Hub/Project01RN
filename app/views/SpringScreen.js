import React from 'react';
import {StyleSheet,
        Text, Image, View,
        TextInput,
        ListView, ScrollView,
        Modal,
        Button, TouchableOpacity, TouchableHighlight,
        Dimensions,
        PermissionsAndroid
      } from 'react-native';
// import * as PermissionsHandler from '../config/PermissionsHandler',
import {NavigationOpenDrawerButton} from '../components/commons/NavigationHeaderButtons'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;
const PageTitle = 'SpringScreen';

export default class SpringScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Spring',
    headerLeft: <NavigationOpenDrawerButton navigation={navigation}/>
  });

  constructor(props){
       super(props);
       this.state = {
          modalVisible: false,
          selectedModel: {},
          selectedModelIndex: 0,
          dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
        };
   }

   _renderRow (model, index) {
       return (
           <View style={{height: 150,}}>
               <Text> index = {index} </Text>
               <Text> id    = "{model.id}",</Text>
               <Text> name  = "{model.name}"</Text>
               <Text> desc  = "{model.description}"</Text>
               <TouchableOpacity onPress={() => {this._onViewModel(model, index)}} >
                   <Text> View</Text>
               </TouchableOpacity>
           </View>
       )
   }

   _onViewModel(model, indexInDS){

     this.setState({
       selectedModel: model,
       selectedModelIndex: indexInDS,
     });

     this._setModalVisible(true);
     console.log("Model ID: " + model.id);
     console.log("Model IX: " + indexInDS);
   }

   _setModalVisible(visible) {
       this.setState({modalVisible: visible});
   }

   render() {
   return (
     <View style={styles.container}>
         <Button
               style={styles.buttonStyle, styles.buttonList}
               onPress={this.onPressListButton}
               onLongPress ={(e)=>{
                  console.log(' onLongPress');
                  console.log(Date.now());
                  console.log(e.type); //undefined
               }}
               title="List Models" color="#841584" />

         <View style={styles.blockStyle}>
               <ListView
                 contentInset={{top: 0}}
                 automaticallyAdjustContentInsets={false}
                 dataSource={this.state.dataSource}
                 renderRow={(model, sectionID, rowID) => this._renderRow(model, rowID)} />

         </View>

         <Modal animationType="slide" transparent={false}
                visible={this.state.modalVisible}
               onRequestClose={() => { this._setModalVisible(!this.state.modalVisible); }}>

           <View style={{marginTop: 22}}>
             <View>
               <Text style = {styles.inputTextStyle}>ID:  {this.state.selectedModel.id}</Text>
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent" placeholder = "ID"  placeholderTextColor = "#9a73ef" autoCapitalize = "none"
                  value={this.state.selectedModel.description}
                  onChangeText = {(text) =>{ console.log(text); }} />

                 <TouchableOpacity style={styles.hideButton} color= 'white'
                                   onPress={() => { this._setModalVisible(!this.state.modalVisible); }}>
                                   <Text>Hide Modal</Text>
                 </TouchableOpacity>
             </View>
           </View>
         </Modal>

     </View>
   );
  }


 onPressListButton = () =>{

     console.log("ListModelsButton Trigerred!");
      fetch('http://192.168.43.90:8070/models') //192.168.0.100 // 173.1
       .then((response) => response.json())
       .then((responseJson) => {
         this.setState({
           dataSource: this.state.dataSource.cloneWithRows(responseJson)
        });
        console.log(responseJson);
       })
       .catch((error) => {
         console.error(error);
       });
 }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 23,

    justifyContent:'center',
  },
  pdf: {
       flex:1,
       width:Dimensions.get('window').width,
   },
  buttonStyle: {
    fontSize: 20,
    textAlign: 'left'
  },
  buttonAdd: {
    backgroundColor: 'transparent'
  },
  buttonList: {
    backgroundColor: 'transparent'
  },

  blockStyle: {
    padding: 10,
    margin: 5
  },

  inputTextStyle: {
      margin: 15,
      height: 40,
   },

   hideButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,

   }
});

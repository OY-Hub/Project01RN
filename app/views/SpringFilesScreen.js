import React from 'react';
import {StyleSheet,
        Text, Image, View,
        TextInput,
        ListView, ScrollView,
        Modal,
        Button, TouchableOpacity, TouchableHighlight,
        Dimensions
      } from 'react-native';
import {NavigationOpenDrawerButton} from '../components/commons/NavigationHeaderButtons';
import Pdf from 'react-native-pdf';
import { Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;
const PageTitle = 'SpringScreen';

export default class SpringFilesScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'SpringFiles',
    headerLeft: <NavigationOpenDrawerButton navigation={navigation}/>
  });

  constructor(props){
       super(props);
       this.state = {
         fileLoaded: false,
         model: {},
         pdfBase64: "",
        };
   }

 render() {
   const source = {uri:"data:application/pdf;base64," + this.state.pdfBase64};

     return (
       <View style={styles.container}>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                 <Icon size={20} iconStyle={{width: 20, height: 20}} containerStyle={{backgroundColor:'gray'}} raised
                              name='download' type='font-awesome' color='white' onPress={this.onPressGetFile} />
                 <Icon size={20} iconStyle={{width: 20, height: 20}} containerStyle={{backgroundColor:'gray'}} raised
                              name='download' type='font-awesome' color='white' onPress={this.onPressGetFile} />
                 <Icon size={20} iconStyle={{width: 20, height: 20}} containerStyle={{backgroundColor:'gray'}} raised
                              name='download' type='font-awesome' color='white' onPress={this.onPressGetFile} />
            </View>
            <View style={styles.pdfContainer}>
               <Pdf
                   source={source}
                   onLoadComplete={(numberOfPages,filePath)=>{
                       alert(`number of pages: ${numberOfPages}`);
                   }}
                   onPageChanged={(page,numberOfPages)=>{
                       alert(`current page: ${page}`);
                   }}
                   onError={(error)=>{
                       alert(error);
                   }}
                   style={styles.pdf}/>
           </View>
      </View>
    );
 }

 onPressGetFile = () =>{
     console.log("onPressGetFile Trigerred!");
     const {fileLoaded, file} = this.state;
     var base64 = require('base-64');

     //Wifi: 192.168.0.100 //mHotSpot: 192.168.173.1
      fetch('http://localhost:8070/file/pdf', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          }})
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson.data);
          // var decodedData = base64.decode('data:application/pdf;base64,' + data);
          var bytes= responseJson.data.length;
          if(bytes < 1024) console.log(bytes + " Bytes");
          else if(bytes < 1048576) console.log("KB:"+(bytes / 1024).toFixed(3) + " KB");
          else if(bytes < 1073741824) console.log("MB:"+(bytes / 1048576).toFixed(2) + " MB");
          else console.log((bytes / 1073741824).toFixed(3) + " GB");

          this.setState({
            fileLoaded: true,
            pdfBase64: responseJson.data,
          });

        }).catch((error) => {
           console.error(error);
        });
 }
 onPressSaveFile = () =>{
     console.log("Saving file ");
     var RNFetchBlob = require('react-native-fetch-blob').default;

     const DocumentDir = RNFetchBlob.fs.dirs.DocumentDir;

     RNFetchBlob.fetch('POST', 'http://localhost:8070/file/pdf')
     .then((res) => {

         let base64Str = res.data;
         let pdfLocation = DocumentDir + '/savedPDFFile.pdf';

         RNFetchBlob.fs.writeFile(pdfLocation, pdf_base64Str, 'base64');
         alert(pdfLocation);
         this.setState({
           pdfBase64: base64Str,
         });

      }).catch((error) => {
          // error handling
          console.log("Error", error)
      });

     }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  pdfContainer:{
    marginTop: 23,
    padding: 10,
    flex: 1,
    alignItems: 'center',
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

   },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});

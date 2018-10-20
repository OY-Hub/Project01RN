import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, PermissionsAndroid} from 'react-native';
import {NavigationOpenDrawerButton} from '../components/commons/NavigationHeaderButtons';
import Permissions from 'react-native-permissions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;


export default class PermissionsScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Permissions',
    headerLeft: <NavigationOpenDrawerButton navigation={navigation}/>
  });

  constructor(props){
    super(props);
    this.state = {
      photoPermission: '',
      cameraPermission: '',
    }
  }

  // Check the status of a single permission
    componentDidMount() {
      Permissions.check('photo').then(response => {
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        this.setState({ photoPermission: response })
      });
      Permissions.request('camera').then(response => {
        // Returns once the user has chosen to 'allow' or to 'not allow' access
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        this.setState({ cameraPermission: response })
      });
    }

    // Request permission to access photos
    _requestPermission = () => {
      Permissions.request('photo').then(response => {
        // Returns once the user has chosen to 'allow' or to 'not allow' access
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        this.setState({ photoPermission: response })
      });
      Permissions.request('camera').then(response => {
        // Returns once the user has chosen to 'allow' or to 'not allow' access
        // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
        this.setState({ cameraPermission: response })
      });

      console.log(this.state.cameraPermission);
      console.log(this.state.photoPermission);
    }

    // Check the status of multiple permissions
    _checkCameraAndPhotos = () => {
      Permissions.checkMultiple(['camera', 'photo']).then(response => {
        //response is an object mapping type to permission
        this.setState({
          cameraPermission: response.camera,
          photoPermission: response.photo,
        })
      })
    }

    // This is a common pattern when asking for permissions.
    // iOS only gives you once chance to show the permission dialog,
    // after which the user needs to manually enable them from settings.
    // The idea here is to explain why we need access and determine if
    // the user will say no, so that we don't blow our one chance.
    // If the user already denied access, we can ask them to enable it from settings.
    _alertForPhotosPermission() {
      Alert.alert(
        'Can we access your photos?',
        'We need access so you can set your profile pic',
        [
          {
            text: 'No way',
            onPress: () => console.log('Permission denied'),
            style: 'cancel',
          },
          this.state.photoPermission == 'undetermined' ? { text: 'OK', onPress: this._requestPermission } : { text: 'Open Settings', onPress: Permissions.openSettings },
        ],
      )
    }

    // async function requestCameraPermission() {
    //   try {
    //       const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.CAMERA,
    //         {
    //           'title': 'Cool Photo App Camera Permission',
    //           'message': 'Cool Photo App needs access to your camera ' +
    //                      'so you can take awesome pictures.'
    //         });
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //           console.log("You can use the camera")
    //         } else {
    //           console.log("Camera permission denied")
    //         }
    //   } catch (err) {
    //     console.warn(err)
    //   }
    // }
  render() {
    const {cameraPermission, photoPermission} = this.state;

    return (
      <ScrollView >
            <TouchableOpacity onPress={() => {
              Permissions.request('camera', {
                  rationale: {
                    title: 'Cool Photo App Camera Permission',
                    message:
                      'Cool Photo App needs access to your camera ' +
                      'so you can take awesome pictures.',
                  },
                }).then(response => {
                  this.setState({ cameraPermission: response })
                })
              }} >
              <Text> Request Photo Permission </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this._alertForPhotosPermission} >
              <Text> Camera: {cameraPermission} </Text>
              <Text> Photo : {photoPermission} </Text>
            </TouchableOpacity>
      </ScrollView>
    );

    // return (
    //   <TouchableOpacity>
    //     <Text> Camera: {cameraPermission} </Text>
    //     <Text> Photo : {photoPermission} </Text>
    //   </TouchableOpacity>
    // );
  }
}

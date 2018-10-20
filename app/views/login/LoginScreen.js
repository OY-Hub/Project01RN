import React from 'react';
import {
  Alert,
  LayoutAnimation,
  TouchableOpacity,
  Dimensions,
  Image,
  UIManager,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
} from 'react-native';
// import { Font } from 'expo';
import { FormInput, Button } from 'react-native-elements';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {NavigationOpenDrawerButton} from '../../components/commons/NavigationHeaderButtons';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const ADMIN_IMG = require('../../../assets/images/user-cool.png');
const USER_IMG = require('../../../assets/images/user-student.png');
const VISITOR_IMG = require('../../../assets/images/user-hp.png');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const UserTypeItem = props => {
  const { image, label, labelColor, selected, ...attributes } = props;
  return (
    <TouchableOpacity {...attributes}>
      <View style={[ styles.userTypeItemContainer, selected && styles.userTypeItemContainerSelected, ]} >
        <Text style={[styles.userTypeLabel, { color: labelColor }]}>
          {label}
        </Text>
        <Image source={image}
          style={[ styles.userTypeMugshot, selected && styles.userTypeMugshotSelected, ]} />
      </View>
    </TouchableOpacity>
  );
}

class CustomButton extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: false
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setState({
      selected
    });
  }

  render() {
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <Button
        title={title}
        titleStyle={{ fontSize: 15, color: 'white' }}
        buttonStyle={selected ? { backgroundColor: '#2CA75E',borderWidth: 1, borderColor: 'white', borderRadius: 50, width: 20, height: 20 } : { borderWidth: 1, borderColor: 'rgba(110, 120, 170, 1)', borderRadius: 50, width: 20, height: 20, backgroundColor: 'transparent' }}
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState({ selected: !selected })}
      />
    );
  }
}

export default class LoginScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
    title: 'Login',
    headerLeft: <NavigationOpenDrawerButton navigation={navigation}/>
  });

  constructor(props) {
    super(props);

    this.state = {
      inputsDisabled: false,
      isLoading: false,
      selectedType: 'user',
      fontLoaded: false,
      username: '',
      email: '',
      password: '',
      passwordHash: '',
      confirmationPassword: '',
      emailValid: true,
      passwordValid: true,
      usernameValid: true,
      confirmationPasswordValid: true,
      isSignUp: false,
    };

    this.setSelectedType = this.setSelectedType.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateConfirmationPassword = this.validateConfirmationPassword.bind(this);
    this.login = this.login.bind(this);
  }

  async componentDidMount() {
    // await Font.loadAsync({
    //   light: require('../../../assets/fonts/Ubuntu-Light.ttf'),
    //   bold: require('../../../assets/fonts/Ubuntu-Bold.ttf'),
    //   lightitalic: require('../../../assets/fonts/Ubuntu-Light-Italic.ttf'),
    // });

    this.setState({ fontLoaded: true });
  }

  signup() {
    LayoutAnimation.easeInEaseOut();
    // const usernameValid = this.validateUsername();
    // const emailValid = this.validateEmail();
    // const passwordValid = this.validatePassword();
    // const confirmationPasswordValid = this.validateConfirmationPassword();
    if (true) {
      this.setState({ isLoading: true });
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ isLoading: false });
        Alert.alert('OKAY¸', 'You rock');
      }, 1500);
    }
  }

  login() {
    LayoutAnimation.easeInEaseOut();
    // const usernameValid = this.validateUsername();
    // const emailValid = this.validateEmail();
    // const passwordValid = this.validatePassword();
    // const confirmationPasswordValid = this.validateConfirmationPassword();
    if (true) {
      this.setState({ isLoading: true });
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ isLoading: false });
        Alert.alert('OKAY¸', 'You rock');
      }, 1500);
    }
  }

  validateUsername() {
    const { username } = this.state;
    const usernameValid = username.length > 0;
    LayoutAnimation.easeInEaseOut();
    this.setState({ usernameValid });
    usernameValid || this.usernameInput.shake();
    return usernameValid;
  }

  validateEmail() {
    const { email } = this.state;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = re.test(email);
    LayoutAnimation.easeInEaseOut();
    this.setState({ emailValid });
    emailValid || this.emailInput.shake();
    return emailValid;
  }

  validatePassword() {
    const { password } = this.state;
    const passwordValid = password.length >= 8;
    LayoutAnimation.easeInEaseOut();
    this.setState({ passwordValid });
    passwordValid || this.passwordInput.shake();
    return passwordValid;
  }

  validateConfirmationPassword() {
    const { password, confirmationPassword } = this.state;
    const confirmationPasswordValid = password === confirmationPassword;
    LayoutAnimation.easeInEaseOut();
    this.setState({ confirmationPasswordValid });
    confirmationPasswordValid || this.confirmationPasswordInput.shake();
    return confirmationPasswordValid;
  }

  setSelectedType = selectedType =>   LayoutAnimation.easeInEaseOut() || this.setState({ selectedType });

  render() {
    const {
      inputsDisabled,
      isLoading,
      selectedType,
      fontLoaded,
      confirmationPassword,
      email,
      emailValid,
      passwordHash,
      passwordValid,
      confirmationPasswordValid,
      username,
      usernameValid,
      isSignUp,
    } = this.state;

    const password= '';

    return !fontLoaded
      ? <Text> Loading... </Text>
			: <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container} >

          <KeyboardAvoidingView behavior="position" contentContainerStyle={styles.formContainer} >

            <Text style={styles.loginText}>{this.state.isSignUp ? 'SIGN UP' : 'SIGN IN'}</Text>
            <Text style={styles.whoAreYouText}>{this.state.isSignUp ? '' : 'TO UNLOCK MORE FEATURES'}</Text>
            <View style={styles.userTypesContainer}>
              <UserTypeItem
                label="ADMIN"
                labelColor="#ECC841"
                image={ADMIN_IMG}
                onPress={() => {this.setSelectedType('admin'), this.setState({inputsDisabled: false})}}
                selected={selectedType === 'admin'} />

              <UserTypeItem
                label="USER"
                labelColor="#2CA75E"
                image={USER_IMG}
                onPress={() => {this.setSelectedType('user'), this.setState({inputsDisabled: false})}}
                selected={selectedType === 'user'}   />

              <UserTypeItem
                label="VISITOR"
                labelColor="#36717F"
                image={VISITOR_IMG}
                onPress={() => {this.setSelectedType('visitor'), this.setState({inputsDisabled: true})}}
                selected={selectedType === 'visitor'} />
            </View>
            <View style={styles.inputStyle}>
              {inputsDisabled ? <View /> :

                <View>
                    <TextInput
                      value={this.state.username}
                      style={styles.inputContainer}
                      underlineColorAndroid = "transparent"
                      placeholder = "Username"  placeholderTextColor = "#9a73ef"
                      autoCapitalize = "none"
                      onChangeText = {(text) =>{ this.setState({username: text}) }} />

                    {!this.state.isSignUp ?
                        <View />
                        :
                        <TextInput
                            value={this.state.email}
                            style={styles.inputContainer}
                            underlineColorAndroid = "transparent"
                            placeholder = "Email"  placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            onChangeText = {(text) =>{ this.setState({email: text}) }} />
                    }
                    <TextInput
                        value={this.state.password}
                        style={styles.inputContainer}
                        underlineColorAndroid = "transparent"
                        placeholder = "Password"  placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none" secureTextEntry
                        onChangeText = {(text) =>{this.setState({password: text,})}} />

                  {!this.state.isSignUp ?
                      <View />
                      :
                      <TextInput
                            value={this.state.confirmationPassword}
                            style={styles.inputContainer}
                            underlineColorAndroid = "transparent"
                            placeholder = "Confirmation"  placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none" secureTextEntry
                            onChangeText = {(text) =>{this.setState({confirmationPassword: text,})}} />
                  }

                  {this.state.isSignUp ?
                      <View />
                      :
                      <View style={{ flexDirection: 'column'}}>
                        <View style={{ flexDirection: 'row', marginTop: 10}}>
                          <CustomButton title="" selected={true} />
                          <Text style={styles.loginHereText,{justifyContent: 'center', fontSize: 16, color: '#9a73ef'}}>Remember my username</Text>
                        </View>
                      </View>
                  }
                </View>
              }
              <TouchableOpacity style={styles.loginButton} color= 'white'
                                onPress={() => {this.state.isSignUp? this.signup() : this.login() }}>
                                <Text style={styles.loginButtonText}>{!this.state.isSignUp ? 'LOGIN' : 'SIGN UP'}</Text>
              </TouchableOpacity>
            </View>

          </KeyboardAvoidingView>
          <View style={styles.loginHereContainer}>
            <Text style={styles.alreadyAccountText}>
              {this.state.isSignUp ? 'You have an account' : 'You don\'t have an account.'}
            </Text>
            <Button
              title={this.state.isSignUp ? 'Login here' : 'Sign up here'}
              titleStyle={styles.loginHereText}
              containerStyle={{ flex: -1 }}
              buttonStyle={{ backgroundColor: 'transparent' }}
              underlayColor="transparent"
              onPress={() => this.setState({isSignUp: !isSignUp})}
            />
          </View>
        </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#293046',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 28,
    // fontFamily: 'light',
  },
  whoAreYouText: {
    color: '#7384B4',
    // fontFamily: 'bold',
    fontSize: 14,
  },
  userTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  userTypeItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  userTypeItemContainerSelected: {
    opacity: 1,
  },
  userTypeMugshot: {
    margin: 4,
    height: 70,
    width: 70,
  },
  userTypeMugshotSelected: {
    height: 100,
    width: 100,
  },
  userTypeLabel: {
    color: 'yellow',
    // fontFamily: 'bold',
    fontSize: 11,
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(110, 120, 170, 1)',
    width: SCREEN_WIDTH - 50,
    height: 45,
    marginVertical: 5,
    color: 'white',
    // fontFamily: 'light',
    fontSize: 16,
  },
  inputStyle: {
    flexDirection: 'column',
    paddingBottom: 20,
    // height: SCREEN_HEIGHT - 450,
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: 'center',
    color: '#F44336',
  },
  loginButtonText: {
    // fontFamily: 'bold',
    fontSize: 13,
  },
  loginButton: {
    width: 250,
    borderRadius: 50,
    height: 45,
  },
  loginButton: {
    marginTop: 20,
    marginBottom: 10,
    width: SCREEN_WIDTH - 50,
    borderRadius: 50,
    height: 45,
    backgroundColor:'white',
  },
  loginButtonText: {
    // fontFamily: 'bold',
    fontSize: 18,
    marginTop: 10,
    color:'black',
    justifyContent: 'center',
    textAlign: 'center',
  },
  loginHereContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alreadyAccountText: {
    // fontFamily: 'lightitalic',
    fontSize: 12,
    color: 'white',
  },
  loginHereText: {
    color: '#FF9800',
    // fontFamily: 'lightitalic',
    fontSize: 12,
  },
})

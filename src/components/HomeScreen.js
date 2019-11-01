import React, {Component} from 'react';
import { Text, View,TextInput,Image,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioGroup from 'react-native-radio-button-group';
import LoginAction from '../Actions/LoginAction';
import { connect } from 'react-redux';
import login from '../Services/LoginService';

class HomeScreen extends Component {

  

  constructor(props) {
    console.log("1");
    super(props);
    this.state = {
      username: '',
      password: '',
      cropcode: '',  
      usertype:'',
    };
  }


  Login(){
    console.log("2");
     this.props.login(this.state.username,this.state.password,this.state.cropcode,this.state.usertype); 
     console.log(this.props.userData.login)
  }


  

  render() {
    console.log("3");
    return (


      <View style={styles.container}>
          <View style={styles.form}> 
              <View style={styles.logoView}>
                  <ImageBackground
                  style={styles.logoContainer}
                  source={require('../Images/cloud.png')}
                  imageStyle={{ resizeMode: 'cover' }} >
                  <Image style={styles.logo} source={require('../Images/cptms.png')} /> 
                  </ImageBackground>
              </View>
          
              <View style={styles.inputContainer}>
                      <Icon style={styles.inputIcon} 
                              name='user'
                              color='white'
                              type='MaterialCommunityIcons'
                              size={30} >
                      </Icon>

                      <TextInput style={{width:265,height:45,color:'white'}}
                                  selectionColor='white'
                                  placeholder="Username *"
                                  placeholderTextColor={'rgba(255,255,255,0.3)'}
                                  keyboardType="email-address"
                                  underlineColorAndroid='transparent'
                                  onChangeText={(username) => this.setState({username})}>
                      </TextInput>
              </View>
              <View style={styles.inputContainer}>
                      <Icon style={styles.inputIcon} 
                              name='lock'
                              color='white'
                              type='MaterialCommunityIcons'
                              size={30} >
                      </Icon>
                      <TextInput style={styles.inputs}
                                  selectionColor='white'
                                  placeholder="Password *"
                                  placeholderTextColor={'rgba(255,255,255,0.3)'}
                                 
                                  underlineColorAndroid='transparent'
                                  onChangeText={(password) => this.setState({password})}>
                      </TextInput>
            </View>
              <View style={styles.inputContainer}>
                      <Icon style={styles.inputIcon} 
                              name='lock'
                              color='white'
                              type='MaterialCommunityIcons'
                              size={30}>
                      </Icon>
                      <TextInput style={styles.inputs}
                                  selectionColor='white'
                                  placeholderTextColor={'rgba(255,255,255,0.3)'}
                                  placeholder="crop code *"
                                  underlineColorAndroid='transparent'
                                  onChangeText={(cropcode) => this.setState({cropcode})}>
                      </TextInput>    
              </View>
              <View style={styles.radioContainer}>
                      <RadioGroup
                          horizontal 
                          options={[
                          {
                                  id: 'admin',
                                  labelView: (
                                  <Text>
                                      <Text style={{ color: 'white' }}>Admin</Text>
                                  </Text>
                                  ),
                          },
                          {
                                  id: 'user',
                                  labelView: (
                                  <Text>
                                      <Text style={{ color: 'white' }}>User</Text>
                                  </Text>
                                  ),
                          },
                          ]}
                              activeButtonId={this.state.usertype}
                              circleStyle={{ fillColor: 'white', borderColor: 'white' }}     
                            onChange={(option) => this.setState({usertype: option.id})}>    
                      </RadioGroup>
              </View>
              <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} onPress={()=>this.Login()}>
                  <Text style={styles.signUpText}>Login</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  logoContainer:{
    marginLeft:95,
    height: 150,
    width: 150,
  },
  logo: {
    top:40,
    marginLeft:38, 
    height: 80,
    width: 100,
  },
  logoView:{
    position:'absolute',
    top:-80,
  },
  form:{  
    backgroundColor: '#00A2C1', 
    padding:25, 
    paddingTop:60,
    borderRadius:15,       
  },
  radioContainer:{ 
    marginTop:-4,   
    marginBottom:20,
    marginLeft:3, 
    width:250,
  },
  inputContainer: {
      borderBottomColor: '#FFFFFF',
      backgroundColor: '#00A2C1',
      borderBottomWidth: 1.8,
      width:290,
      height:38,
      marginBottom:40,
      flexDirection: 'row',
      alignItems:'center',
  },
  inputs:{
      width:235,
      height:45, 
      color:'white',          
  },
  eyeIcon:{
     
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:1,
    justifyContent: 'center'
  },

  buttonContainer: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:290,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#ffffff",
  },
  signUpText: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#00A2C1',
  },
});

function mapStateToProps(state) {
 console.log("4");
  return { userData  :state};
}

const mapDispatchToProps = dispatch => ({
 
  login: (username,password,cropcode,usertype) => dispatch(login(username,password,cropcode,usertype))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
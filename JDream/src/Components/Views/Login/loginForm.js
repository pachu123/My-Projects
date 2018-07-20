import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Input from '../../utils/forms/input'
import ValidationRules from '../../utils/forms/validationRules';
import loadTabs from '../Tabs';


import { connect } from 'react-redux';
import { signUp, signIn } from '../../Store/Action/user_action';
import { bindActionCreators } from 'redux';

import { setTokens, getTokens } from '../../utils/misc';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

class LoginForm extends Component {
    state = {
        type:"Login",
        action:"Login", //Name of First Button
        actionMode:"Not User Register", //Name of Second Button
        hasErrors:false,
        form:{
            email:{
                value:"",
                valid:false,
                type:"textInput",
                rule:{
                    isRequired:true,
                    isEmail:true,
                }
            },
            password:{
                value:"",
                valid:false,
                type:"textInput",
                rule:{
                    isRequired:true,
                    minLength:6,
                }
            },
            confirmPassword:{
                value:"",
                valid:false,
                type:"textInput",
                rule:{
                   confirmPass:"password",
                }
            },
        }
    }

    updateInput = (name,value) => {
        this.setState({
            hasErrors:false, 
        })

        let formCopy=this.state.form;
        formCopy[name].value = value;

        let rules = formCopy[name].rule;
        let valid = ValidationRules(value, rules, formCopy);

        formCopy[name].valid = valid;

        this.setState({
            form:formCopy,
        })
    }

    confirmPassword = () => (
        this.state.type != 'Login' ?
        <View style={styles.passwordContainer}>
        <Sae
            style={styles.input}
            label={'Confirm Password'}
            labelStyle={{paddingLeft: 15,}}
            iconClass={FontAwesomeIcon}
            iconName={'lock'}
            iconColor={'#ffffff'}
            iconSize={25}
            type={this.state.form.confirmPassword.type}
            value={this.state.form.confirmPassword.value}
            onChangeText={ value => this.updateInput("confirmPassword", value)}
            secureTextEntry
        
        />
        </View>

        :null
    )

    changeFormType = () => {
        const type = this.state.type
        this.setState({
            type:type === 'Login' ? 'Register' : 'Login',
            action:type === 'Login' ? 'Register' : 'Login',
            actionMode:type === 'Login' ? 'Already User Login' : 'Not User Register',
        })
    }

    manageAccess = () => {
        if(!this.props.User.userData.uid) {
            this.setState({
                hasErrors:true
            })
        }else{
            setTokens(this.props.User.userData,()=>{
                this.setState({
                    hasErrors:false
                })
                loadTabs();
            })
        }
    }

    submitUser = () => {
        let isFormValid = true;
        let formToSubmit = {};
        const formCopy = this.state.form;

        for(let key in formCopy){
            if(this.state.type === 'Login'){
                if(key !== 'confirmPassword'){
                    isFormValid = isFormValid && formCopy[key].valid;
                    formToSubmit[key] = formCopy[key].value
                }
            } else {
                isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value;
            }
        }

        if(isFormValid){
           if(this.state.type === "Login"){
                this.props.signIn(formToSubmit).then(()=>{
                    this.manageAccess();
                })
           } else { 
                this.props.signUp(formToSubmit).then(()=>{
                    this.manageAccess();
                })
           }

        } else {
            this.setState({
                hasErrors:true
            })
        }
    }

    formHasSomeErrors = () => (
        this.state.hasErrors ?
            <View style = {styles.errorContainer}>
            
                <Text style = {styles.errorLabel}>OOPS ERROR, Check Your Details</Text>
            </View>


        :null
    )


    componentDidMount() {
        getTokens((values) => {
            console.log(values)
        })
    }
    

    render() {
        return(
            <View>
            <View style={styles.enailContainer}>
                <Sae
                style={styles.input1}
                label={'Email'}
                labelStyle={{paddingLeft: 15,}}
                iconClass={FontAwesomeIcon}
                iconName={'envelope'}
                iconColor={'#ffffff'}
                iconSize={15}
                iconStyle={{width:10}}
                type={this.state.form.email.type}
                value={this.state.form.email.value}
                onChangeText={ value => this.updateInput("email", value)}
                autoCapitalize={"none"}
                keyboardType={"email-address"}
              />
            </View>
            <View style={styles.passwordContainer}>
              <Sae
                style={styles.input}
                label={'Password'}
                labelStyle={{paddingLeft: 15,}}
                iconClass={FontAwesomeIcon}
                iconName={'lock'}
                iconColor={'#ffffff'}
                iconSize={25}
                type={this.state.form.password.type}
                value={this.state.form.password.value}
                onChangeText={ value => this.updateInput("password", value)}
                secureTextEntry
              />
              </View>
                {this.confirmPassword()}
                {this.formHasSomeErrors()}

                <View style={styles.LoginButtonStyle}>
                    <Button 
                        title={this.state.action}
                        color="#fd9727"
                        onPress = {this.submitUser}
                        
                    />
                
                </View>
                <View style={styles.SignUpButtonStyle}>
                    <Button 
                        title={this.state.actionMode}
                        color="grey"
                        onPress={this.changeFormType}
                    />
                
                </View>
                <View style={styles.SkipNowButtonStyle}>
                    <Button 
                        title="Skip Now"
                        color="grey"
                        onPress={() => loadTabs()}
                    />
                
                </View>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    LoginButtonStyle:{
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 4,
        borderColor: '#fd9727',
        borderRadius:10,
        // width:100,
        // alignSelf: 'center',
    },
    SignUpButtonStyle:{
        marginBottom: 10,
        borderWidth: 4,
        borderColor: 'grey',
        borderRadius:10,
    },
    SkipNowButtonStyle:{
        borderWidth: 4,
        borderColor: 'grey',
        borderRadius:10,
    },
    errorContainer:{
        marginBottom: 20,
        marginTop:10,
    },
    errorLabel: {
        color:'red',
        fontFamily:'Roboto-Black',
    },
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: 'white',
      },
      content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 300,
      },
      input: {
        marginTop: 4,
      },
      input1:{
          marginTop: -30,
      },
      enailContainer:{
          paddingRight: 30,
      },
      passwordContainer:{
        paddingRight: 30,
      }
})


function mapStateToProps(state){
    return{
        User: state.User
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({signUp,signIn},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)


import  React,{ useState, useEffect }  from "react";
import { Text, View ,TextInput, Button, StyleSheet, AsyncStorage, Alert } from "react-native";
import {getdata, storedata} from "./Store"

const Login = ({navigation}) =>{
      const [email, setEmail] = useState("");

     
      useEffect(  ()=>{
            username_exists();
       },[]);
 
     
      const username_exists = async ()=>{
            const username = await getdata("username"); 
            if(username)
            {
                  navigation.navigate('Todo');
            }
      }


      const login =()=>
      {
            storedata(key = "username", email);
            navigation.navigate('Todo');
      }


      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={style.title}>Welcome to</Text>
            <Text style={style.title}>Todo!!!</Text>
            <Text style={style.label}>Please enter your email id to login</Text>
            <TextInput style={style.textbox} onChangeText={(text)=>{ setEmail(text)} } placeholder="john.wilson@example.com"></TextInput>
            <Button style={style.submit} onPress={login}  title="Login" ></Button>
          </View>
      );
};

const style = StyleSheet.create({
      title:{
            fontSize:40,
            fontWeight:"700",
            
            color:"#444"
      },
      label:{
            fontSize:12,
            marginTop:20,
            fontWeight:"400",
            color:"#000"},
      textbox:{
            fontSize:15,
            padding:5,
            borderColor:"#777",
            borderWidth:2,
            borderRadius:8,
            margin:15,
            width:"70%",
            textAlign:"center"
            
      },
      submit:{
            borderRadius:30,
            height:60,
            width:"50%"
      }
});


export default Login;
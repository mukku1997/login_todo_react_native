import  React,{ useState }  from "react";
import { Text, View ,TextInput, Button, StyleSheet} from "react-native";

const Login = () =>{
      const [email, setEmail] = useState("");

      const login = ()=>
      {
            alert("hiiiii"+email);
      }


      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={style.title}>Welcome to Todo!!!</Text>
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
            margin:20,
            color:"#444"
      },
      label:{
            fontSize:20,
            fontWeight:"400",
            color:"#000"},
      textbox:{
            fontSize:22,
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
import  React, { useState, useEffect }  from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { getdata, getItem } from "./Store";
import TodoItem from "./TodoItem";
import TodoAddItem from "./TodoAddItem";

const Todo = () =>{

      const [email, setEmail] = useState("");
      const [items, setItems] = useState([]);


      useEffect( ()=>{
           username_exists();
           loadItems();
      },[]);

      const loadItems = async ()=>{
            let data = await getItem();
            setItems(data);
            console.log("calling load")
      }

      const display_items = ()=>{
            // console.log(items)
            if (items.length > 0)
            {
                  return (<FlatList
                  style={{width:"100%"}}
                  data={items}
                  renderItem={({item, index})=><TodoItem data={item} index_pos={index}  load={loadItems} />}
                  keyExtractor={(item,index)=>index+""}
                  />);
            }else {
                  return (<View style={{flex:1}}>
                        <Text>Add something to Todo!</Text>
                        </View>)
            }
      }
      
      const username_exists = async ()=>{
            const username = await getdata("username"); //getdata("username");
            if(username)
            {
                  console.log(username)
                 setEmail(username);
            }
      }

      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
            {/* <TodoItem></TodoItem> */}
            {display_items()}
            <TodoAddItem load={loadItems}></TodoAddItem>
            <Text>Welcome {email}</Text>
            
          </View>
      );
};

const style = StyleSheet.create({
      addbutton:{
            height:70,
            width:70,
            position:"absolute",
            bottom:60,
            right:30
      },
      addimage:{
            height:"100%",
            width:"100%",
            borderRadius:100,
      },
      
});


export default Todo;
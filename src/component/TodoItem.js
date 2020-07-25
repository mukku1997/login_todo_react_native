import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import { removeItem } from './Store'

const TodoItem = (props) =>{

      const selectItem = (index,data)=>{
            Alert.alert(
            'Delete',
            'Are you sure!\n you want to delete Todo '+data,
            [
              {text: 'NO', onPress: () => console.log('NO Pressed'), style: 'cancel'},
              {text: 'YES', onPress: () => delete_item(index)},
            ])
            
      }

      const  delete_item = async (index )=>{
            await removeItem(index);
            props.load();
      }

      return(
            <TouchableOpacity style={style.container} onLongPress={()=>selectItem(props.index_pos,props.data)}>
                  <View style={style.doitem}>
                   <Text style={style.itemtext}>
                        { props.data}
                   </Text>
                   </View>
            </TouchableOpacity>
      );
}

const style = StyleSheet.create({
      doitem:{
            width:"100%",
            // marginBottom:5,
            paddingVertical:8,
            paddingHorizontal:4
      },
      itemtext:{
            fontSize:15,
            fontWeight:"600",
            marginLeft:20
      },
      container:{
            width:"95%",
            borderWidth:0.5,
            borderStyle:"solid",
            borderColor:"#ccc",
            marginHorizontal:2,
            marginVertical:5,
            borderRadius:30,

      }
});

export default TodoItem;
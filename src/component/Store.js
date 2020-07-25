import React from 'react';
import { AsyncStorage } from 'react-native'



      export   function storedata(key,value) {
            try {
                   AsyncStorage.setItem(key,value);
            } catch (error) {
                  alert("Error : "+error);
            }
      };

      export  function getdata(key){
            try {
                  return  AsyncStorage.getItem(key);
            } catch (error) {
                  return null;
            }
      };

      export  async function storeItem(value) {
            try {
                  let arr = [];
                  let data = await getdata("item");
                  data = JSON.parse(data);
                  if(data){
                        arr = arr.concat(data);
                  }
                  arr.push(value);
                  AsyncStorage.setItem("item",JSON.stringify(arr));
            } catch (error) {
                  alert("Error : "+error);
            }
      };

      export async function getItem()
      {
            try {
                  let data = await getdata("item");
                  return JSON.parse(data);
            } catch (error) {
                  return null;
            }
      }

      export async function removeItem(index)
      {
            try {
                  let arr = [];
                  let data = await getdata("item");
                  data = JSON.parse(data);
                  data.splice(index,1);
                  console.log(data);
                  AsyncStorage.setItem("item",JSON.stringify(data));
            } catch (error) {
                  
            }
      }
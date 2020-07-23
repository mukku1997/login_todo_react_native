import React, {useEffect, useState} from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import Card  from "./src/component/card";



export default function Dashboard() {
  
  const [articles,setArticles] = useState([]);


  useEffect(()=>{
    fetchdata();
  },[]);


  const fetchdata =async ()=>{
    const url = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5428ddb9935a44bc9724106b77c62b37"; 
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.articles)  
    setArticles(data.articles);
  } 

  const renderarticles = ()=>{
    if(articles.length > 0){
      // const cards = articles.map((item, index)=> <Card data={item} key={index}></Card>)
      // return cards;
      return (
        <FlatList
        data={articles}
        renderItem={({item})=><Card data={item}/>}
        keyExtractor={(item)=>item.publishedAt}
        initialNumToRender="5"
        />
      );
    }
    return <ActivityIndicator></ActivityIndicator>
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Hello mukesh</Text>
    {/* <ScrollView> */}
      {renderarticles()}
    {/* </ScrollView> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  mainContainer :{
    marginTop : Platform.Os ==="android"?25:25,
    flex:1
  }

});

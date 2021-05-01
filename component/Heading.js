import React, { Component,useEffect,useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView,Linking,StyleSheet,useWindowDimensions,ImageBackground } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,View } from 'native-base';

function Heading() {
    const country='no'
    const category='general'
    const key='66b9c12bd1064c5b91234b5a6c338ab2'
    const lan='en'
    const [isLoading,setLoading]=useState(true)
    const [data,setData]=useState([])
    const {width}=useWindowDimensions()
  
    useEffect(()=>{
      fetch(`https://newsapi.org/v2/top-headlines?language=${lan}&apiKey=${key}`)
      .then((response)=>response.json())
      .then((json)=>setData(json.articles))
      .catch((error)=>console.error(error))
      .finally(()=>setLoading(false))
    },[])
    return (
        <View style={styles.container}>
            {isLoading?<ActivityIndicator/>:
                <FlatList
                data={data}
                keyExtractor={({id},index)=>id}
                horizontal
                renderItem={({item})=>(
                    <ImageBackground
                        source={{ uri:item.urlToImage}}
                        style={{
                            height: 400,
                            width:360,
                            position: 'relative', // because it's parent
                            top: 4,
                            left: 2,
                            marginRight:5,
                            backgroundColor: 'rgba(0,0,0,0.5)'
                        }}
                        >
                        <Text
                            style={{
                            fontWeight: 'bold',
                            width:360,
                            color: 'white',
                            position: 'absolute', // child
                            marginTop:120,
                            textAlign:'center',
                            color:'white',
                            backgroundColor: 'rgba(0,0,0,0.5)'
                            }}
                        >
                            {item.title}
                        </Text>
                        </ImageBackground>
                )}
              />}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:184,
    }
})

export default Heading
import React, { Component,useEffect,useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView,Linking } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

function Business(){
  const country='in'
  const category='business'
  const key='66b9c12bd1064c5b91234b5a6c338ab2'
  const [isLoading,setLoading]=useState(true)
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}`)
    .then((response)=>response.json())
    .then((json)=>setData(json.articles))
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
  },[])

    return(
      <SafeAreaView>
        {isLoading?<ActivityIndicator/>:
          <FlatList
            data={data}
            keyExtractor={({id},index)=>id}
            renderItem={({item})=>(
              <Container>
              <Content>
                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: item.urlToImage}} />
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>{item.publishedAt}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: item.urlToImage}} style={{height: 200, width: 200, flex: 1}}/>
                      <Text>
                        {item.content}
                      </Text>
                      <Text style={{color: 'blue'}}
                      onPress={() => Linking.openURL(item.url)}>
                  Go to Page
                </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Container>
            )}
          />
        }
      </SafeAreaView>
    )
}

export default Business
import React, { Component,useEffect,useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView,Linking,Share,Button,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, View } from 'native-base';

function Sports(){
  const country='in'
  const category='sports'
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
                      <Image source={{uri: item.urlToImage}} style={{height: 200, width: 340, flex: 1,borderRadius:20}}/>
                      <Text>
                        {item.content}
                      </Text>
                      <View style={styles.appButtonContainer2}>
                <Button
                onPress={() => Linking.openURL(item.url)}
                title="Go to the Page"
                color="#696969"
                accessibilityLabel="Learn more about this purple button"
              />
                </View>
                <View style={styles.appButtonContainer}>
                <Button
                onPress={()=>{
                  Share.share({
                    message: 'Use this link to see the article',
                    url: item.url,
                    title: 'News Article'
                  })
                }}
                title="Share"
                color="white"
              />
                </View>
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

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    height:40,
    width:'100%',
    backgroundColor: "#007AFF",
    borderRadius: 10,
    textAlign: 'center',
    marginTop:5
  },
  appButtonContainer2: {
    elevation: 8,
    height:40,
    width:'100%',
    backgroundColor: "#adff2f",
    borderRadius: 10,
    textAlign: 'center',
    marginTop:5
  }
})

export default Sports
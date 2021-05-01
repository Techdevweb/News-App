import React, { Component } from 'react';
import { Body, Container, Header, Tab, Tabs,ScrollableTab, Title,Left, Right} from 'native-base';
import General from './General'
import Business from './Business'
import Entertainment from './Entertainment'
import Health from './Health'
import Sports from './Sports'
import Heading from './Heading'
import { StyleSheet, Text, View,Animated } from 'react-native';
import { 
  AlfaSlabOne_400Regular
} from '@expo-google-fonts/alfa-slab-one'

function TabExample(){
  return(
    <Container>
        <Header  style={styles.container}>
          <Heading/>
        </Header>

        <Tabs tabBarUnderlineStyle={{backgroundColor:'#ffefcf'}} renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="General" activeTabStyle={{backgroundColor:'#9fd8df'}} activeTextStyle={{color:'#ffefcf'}} textStyle={{color:'black'}}>
            <General/>
          </Tab>
          <Tab heading="Business" activeTabStyle={{backgroundColor:'#9fd8df'}} textStyle={{color:'black'}} activeTextStyle={{color:'#ffefcf'}}>
            <Business/>
          </Tab>
          <Tab heading="Entertainment" activeTabStyle={{backgroundColor:'#9fd8df'}} activeTextStyle={{color:'#ffefcf'}} textStyle={{color:'black'}}>
            <Entertainment/>
          </Tab>
          <Tab heading="Health" activeTabStyle={{backgroundColor:'#9fd8df'}} activeTextStyle={{color:'#ffefcf'}} textStyle={{color:'black'}}>
            <Health/>
          </Tab>
          <Tab heading="Sports" activeTabStyle={{backgroundColor:'#9fd8df'}} activeTextStyle={{color:'#ffefcf'}} textStyle={{color:'black'}}>
            <Sports/>
          </Tab>
        </Tabs>
      </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 184,
    width: '100%',
  },
});



export default TabExample
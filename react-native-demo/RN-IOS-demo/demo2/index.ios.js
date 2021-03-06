/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './ios_view/home.js'
import News from './ios_view/news.js'
import More from './ios_view/more.js'

class helloReact extends Component {
  constructor(props){
    super(props);

    this.state={
      selectedTab:'home'
    };
  }

  _renderContent(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="#fff"
        translucent={true}
        barTintColor="#000">
        <Icon.TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home'
            });
          }}
          >
          
          <NavigatorIOS
            ref="myNavigator"
            style={{flex:1}}
            initialRoute={{
              component:Home,
              name:'home',
              title:'主页'
            }}
            renderScence={(route,NavigatorIOS)=>{
              var Com=route.component;
              return <Com navigator={NavigatorIOS} />
            }}
          />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="news"
          iconName="ios-list-outline"
          selectedIconName="ios-list"
          badge={5}
          selected={this.state.selectedTab === 'news'}
          onPress={()=>{
            this.setState({
              selectedTab:'news'
            });
          }}>
          <News data={{hashId:1}} />
        </Icon.TabBarItem>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'more'}
          onPress={() => {
            this.setState({
              selectedTab: 'more'
            });
          }}>
          <More navigator={this.refs.myNavigator} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('helloReact', () => helloReact);

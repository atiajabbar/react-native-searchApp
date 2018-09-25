import React, {Component} from 'react';
import {View} from 'react-native';
import CardSection from './CardSection';
import SearchBar from '../containers/search_bar';
import SearchList from '../containers/search_list';


// class Cards extends Component{
      // constructor(props) {
      //   super(props);
     //this.state = {search: ''} ;

const Card = (props) => {
    return(
  
    <View style = {styles.containerStyle}>
    {props.children}
      <CardSection>
      
      <SearchBar />
      
      </CardSection>
      <CardSection>
      <SearchList />
      </CardSection>
    </View>
  );
};
// }


const styles = {

    containerStyle: {

      borderWidth:1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth:0,
      shadowColor:'#000',
      shadowOffset: {width:0, height:2},
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 2,
      marginLeft:5,
      marginRight: 5,
      marginTop:10
      
    }
};


export default  Card;

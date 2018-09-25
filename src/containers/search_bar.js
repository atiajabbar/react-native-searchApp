import {View, Button,TextInput,StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchKeyword} from '../actions/index';


  class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {search: ' ' };
        
        this.onTextInputChange = this.onTextInputChange.bind(this);
        this.onButtonPressed = this.onButtonPressed.bind(this);
        
    }
    onTextInputChange(value) {
         //console.log(value);
        this.setState({search : value});
        
    }
   
        
    onButtonPressed() {
        this.props.fetchKeyword(this.state.search);
        // console.log('hereeeeeeeeeeeeeeeeeeeee',this.state.search);
        this.setState({search: ''});

    }

    render() {
        return(
            <View>
               <TextInput //style={{height:30, width:200}}
                placeholder ="search keywords"
                value= {this.state.search}
                onChangeText = {(value ) => this.onTextInputChange(value)}
                />
               
                <Button 
                onPress = {this.onButtonPressed}
                title = "Search"
                color = "#841584"
                />
            </View>
        );
    }
 }

    
    function mapDispatchToProps(dispatch) {
        return bindActionCreators( {fetchKeyword}, dispatch);
        }

    export default connect(null, mapDispatchToProps)(SearchBar);

   

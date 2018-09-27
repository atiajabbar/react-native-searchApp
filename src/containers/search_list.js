import React, { Component } from 'react';
import { Text, View, FlatList,StyleSheet,TouchableOpacity,ToastAndroid,Image,Linking } from 'react-native';
import { connect } from 'react-redux';





class SearchList extends Component {
    constructor(props) {
        super(props);
              
    }
     

         renderItem = ({item}) => {
        console.log('Item: ',item)
        return (
            
           <TouchableOpacity style={{ flex:1, flexDirection:'row', marginTop:20 }}
           
           onPress ={ () => Linking.openURL(item.link)}>
              
        
           <Image
               style={{width: 100, height:100, margin:5, borderRadius: 50, borderColor: '#b2ebf2', borderWidth: 2}}
                source={{uri : 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
               

            <View style ={{flex: 1, justifyContent:'center',  marginLeft: 4}}>
            <Text style={{fontSize: 13,color:'green', marginBottom:5,marginTop:5, justifyContent:'center'}}>
            {item.title}
           </Text>
          
           
            <Text style={{fontSize: 14,  marginTop: 5, marginBottom: 5,color:'red'}}>
            {item.displayLink}
            </Text>

            </View>

            </TouchableOpacity>
        )
    }

    renderSeparator = () =>{
        return(
            <View style ={{height:2, width:'100%', backgroundColor: 'black'}}>
            
            </View>
        )
    }

    render() {
        console.log('Props: ', this.props.search[0])
        return (
            
            <View style={styles.container}>
            
                <FlatList
                    data={this.props.search[0]}
                    keyExtractor={item => this.props.search.cacheId}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                />
                
            </View>
            
        
        );
    }

}
function mapStateToProps({search}) {
    // console.log('serachhhhhhh' , search);
    return { search };
}


export default connect(mapStateToProps)(SearchList);


const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent:'center',
        backgroundColor: '#F5FCFF'
      
    }
});
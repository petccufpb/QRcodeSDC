import React from 'react';
import {View, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Contagem extends React.Component{


    render(){
    return(
        <View style={styles.container}>
            <ActionButton
            buttonColor="rgba(231,76,60,1)"
            onPress={() => { console.log("hi")}}
            />
        </View>    
    );
}

} 

export default Contagem;
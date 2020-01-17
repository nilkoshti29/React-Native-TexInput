
import React, { Component } from 'react';
import { StyleSheet,TextInput,View,Button,Text } from 'react-native';


const BLUE = '#428AF8';
const LIGHT_GRAY = "#D3D3D3";


class MyTextInput extends Component{

  state = {
    isFocused: false
  };


  handelFocus = event => {
    this.setState({ isFocused: true });

    if(this.props.onFocus){
      this.props.onFocus(event);
    }
  };

  handelBlur = event =>{
    this.setState({ isFocused: false});

    if(this.props.onBlur){
      this.props.onBlur(event);
    }
  };

  render(){
    const { isFocused } = this.state;
    const { onFocus ,onBlur } = this.props;

    return(
     
      <View>
     <TextInput
          placeholder="Subject 1"
          onChangeText={(text) => this.setState({TextInput1:parseInt(text)})}
          
          selectionColor={BLUE}
          underlineColorAndroid={
            isFocused ? BLUE : LIGHT_GRAY 
          }
          onFocus={this.handelFocus}
          onBlur={this.handelBlur}
          style={styles.textinput} />
       <TextInput
          placeholder="Subject 2"
          onChangeText={(text) => this.setState({TextInput2:parseInt(text)})}
         
          selectionColor={BLUE}
          underlineColorAndroid={
            isFocused ? BLUE : LIGHT_GRAY 
          }
          onFocus={this.handelFocus}
          onBlur={this.handelBlur}
          style={styles.textinput} />

        
        <TextInput
          placeholder="Subject 3"
          onChangeText={(text) => this.setState({TextInput3:parseInt(text)})}
         
          selectionColor={BLUE}
          underlineColorAndroid={
            isFocused ? BLUE : LIGHT_GRAY 
          }
          onFocus={this.handelFocus}
          onBlur={this.handelBlur}
          style={styles.textinput} />
        
        <TextInput
          placeholder="Subject 4"
          onChangeText={(text) => this.setState({TextInput4:parseInt(text)})}
         
          selectionColor={BLUE}
          underlineColorAndroid={
            isFocused ? BLUE : LIGHT_GRAY 
          }
          onFocus={this.handelFocus}
          onBlur={this.handelBlur}
          style={styles.textinput} />

      <TextInput
          placeholder="Subject 5"
          onChangeText={(text) => this.setState({TextInput5:parseInt(text)})}
         
          selectionColor={BLUE}
          underlineColorAndroid={
            isFocused ? BLUE : LIGHT_GRAY 
          }
          onFocus={this.handelFocus}
          onBlur={this.handelBlur}
          style={styles.textinput} /> 

      

        <Button
            title="Total"
            color="#606070"
            onPress={() => {
              this.setState({ Total: parseInt(this.state.TextInput1) + parseInt(this.state.TextInput2) +  parseInt(this.state.TextInput3) +  parseInt(this.state.TextInput4) +  parseInt(this.state.TextInput5)   });
            }}
        />
        
        
        <Text style={{ color: 'Green'}}>
          {this.state.Total}
        </Text>

        <Button
            title="Percentage"
            color="#606070"
            onPress={() => {
              this.setState({ Perccentage: parseInt(this.state.Total) / 500 * 100 });
            }}
        />

        <Text style={{ color: 'Green'}}>
          {this.state.Perccentage}
        </Text>
        

      </View>


  );
  }
}

const styles = StyleSheet.create({
  textinput:{

    height:40,
    paddingLeft:6
  }
});

export default MyTextInput;


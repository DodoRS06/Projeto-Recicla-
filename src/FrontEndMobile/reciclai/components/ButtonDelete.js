import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonDelete = (props) => {
  return  <Button
  icon={props.icon}
  onPress={props.onPress}
  theme={props.theme}
  style= {styles.button}
  mode="elevated">
      {props.title}
     
</Button>
};

const styles = StyleSheet.create({
button: {
width: 'auto',
marginVertical: 8,
marginHorizontal: 40,
backgroundColor:'red',
}
});

export default ButtonDelete;
// ./Components/flatCards.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlatCards = () => {
  return (
    <View >
      <Text style = {styles.headingText}>Flat Cards</Text>
      <View style = {styles.Container}>
      <View style = {[styles.Card , styles.Cardone]}>
            <Text>gray</Text>
        </View>
        <View style = {[styles.Card , styles.CardTwo]}>
            <Text>blue</Text>
        </View>
        <View style = {[styles.Card , styles.CardThree]}>
            <Text>green</Text>
        </View>
        <View style = {[styles.Card , styles.CardThree]}>
            <Text>green</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText :{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
  },
  Container:{
    flex:1,
    flexDirection:'row',
    padding:8

  },
  Card:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    width:100,
    height:100,
    borderRadius:8,
    margin:8

  },
  Cardone:{
    backgroundColor:'gray'
  },
  CardTwo:{
    backgroundColor:'blue'
  },
  CardThree:{
    backgroundColor:'green'
  }
})

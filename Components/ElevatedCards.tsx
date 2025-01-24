import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Elevated Cards</Text>
      <ScrollView style = {styles.Container}>
        <View style = {[styles.Card , styles.ElevatedCard]}>
        <Text>Tap</Text>
        </View>
        <View style = {[styles.Card , styles.ElevatedCard]}>
        <Text>Tap</Text>
        </View>
        <View style = {[styles.Card , styles.ElevatedCard]}>
        <Text>Tap</Text>
        </View>
        <View style = {[styles.Card , styles.ElevatedCard]}>
        <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText :{
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:8,
    },
    Container:{
        padding:8

    },
    ElevatedCard:{

    },

    Card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
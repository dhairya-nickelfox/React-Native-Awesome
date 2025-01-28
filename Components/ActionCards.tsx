import { Linking, StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsites(webSiteLink:string){
        Linking.openURL(webSiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>Action Cards</Text>
      <View style = {[styles.cards , styles.elevatedCard]}>
       <View style = {styles.HeadingContainer}>
       <Text style = {styles.HeadingContainer}>
        hello how are you!
       </Text>
       </View>
       <Image 
       source = {{uri:'https://dribbble.com/shots/16657791-Furniture-Marketplace-App?utm_source=Clipboard_Shot&utm_campaign=purrwebui&utm_content=Furniture%20Marketplace%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=purrwebui&utm_content=Furniture%20Marketplace%20App&utm_medium=Social_Share'}}
       style = {styles.carDImage}
       />

       <View style = {styles.FooterContainer}>
        <TouchableOpacity  onPress={() => openWebsites('https://github.com/dhairya-nickelfox/React-Native-Awesome')}>
            <Text>read More</Text>
        </TouchableOpacity>

       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8
    },
    cards:{
        width:350,
        height:340,
        borderRadius:6,
        margin:6,
        marginVertical:12,
        marginHorizontal:16
    },

    elevatedCard:{
        backgroundColor:'darkorange'
    },
    HeadingContainer:{},
    carDImage:{
        height:100
    },
    FooterContainer:{
        paddingHorizontal:8,
       
    },
    
})
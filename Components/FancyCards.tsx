
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

 function FancyCards() {
  return (
    <View >
      <Text style={styles.headingText}>Trending Places</Text>
      <View style = {[styles.card , styles.cardElevated]}>
        <ScrollView>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1454332093/photo/a-deck-of-monochome-cards-in-different-positions.jpg?s=612x612&w=0&k=20&c=_hcNrTkbLdBIV2S5x3rC_IlYk1ZqT8VJ8G0EAZKUyD8=',
          }}
          style={styles.cardsImage}
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardBody}>Taj Mahal</Text>
            <Text style = {styles.cardLabel}>Agra, UP</Text>
            <Text style = {styles.cardDecs}>as  as as d f dew dew ed wde  dew  dwq  qw s wse</Text>
            <Text style = {styles.cardFooter}>3 km away</Text>

            
        </View>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal:8,
   
  },
  card:{
    width:350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
    


  },
  cardElevated:{
   backgroundColor:'gray'

  },
  cardsImage: {
    height:180,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
    

  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:12

  },
  cardLabel:{

  },
  cardDecs:{

  },
  cardFooter:{

  }
});

export default FancyCards;
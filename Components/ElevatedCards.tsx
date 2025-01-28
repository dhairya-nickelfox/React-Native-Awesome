import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Select</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>more</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>😀</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>🤩</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>🏀</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>🪴</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 2,
    padding: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal:8
  },
  container: {
    padding: 8,
  },
  scrollContent: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  elevatedCard: {
    backgroundColor: 'darkorange',
    shadowOffset:{
      width:10,
      height:1,
    },
    shadowColor:'#333',
    shadowOpacity:0.4,
    shadowRadius:10,
  },
  card: {
    width: 120,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderRadius: 5,
  },
});

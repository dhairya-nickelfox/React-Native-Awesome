import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import FlatCards from './Components/flatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCards from './Components/FancyCards';
import ActionCards from './Components/ActionCards';
import ContactList from './Components/ContactList';


const App = () => {
  return (
    <SafeAreaView >
      <ScrollView>
        
        <FlatCards />
        <ElevatedCards/>
        <FancyCards/>
        <ActionCards/>
        <ContactList/>
        

      </ScrollView>
    </SafeAreaView>
  );
};




export default App;


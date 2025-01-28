import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function StateObj() {
    const [myState , setMyState] = useState('lorem ftkm t gt5kf tkfr k4r frdk fk4tr fkg5t ');

  return (
    <View>
      <Text>{myState}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})


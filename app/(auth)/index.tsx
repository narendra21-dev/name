import { View, Text, StatusBar } from 'react-native'
import React from 'react'

import MyCardAction from '@/components/MyCardAction'

const index = () => {
  return (
    <View>

      <View>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      </View>


      {/* <StatusBar style="light" /> */}
      <MyCardAction />
    </View>
  )
}

export default index
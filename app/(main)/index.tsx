import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import CardView from '@/components/CardView'

const index = () => {
    return (
        <ScrollView style={{backgroundColor:"#28282B"}} >
        <View>
  
  
          <CardView question={"Few Question which come from server or Api ?"}
            answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ?  "} />
  
        </View>
      </ScrollView>
    )
}

export default index
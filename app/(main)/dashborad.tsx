import { View, StyleSheet, ScrollView, SafeAreaView, } from 'react-native'
import React from 'react'
import CardView from '@/components/CardView'
import { StatusBar } from 'expo-status-bar'




const dashborad = () => {
  return (

  

      <ScrollView style={{
        backgroundColor: 'white'
      }}>
    <StatusBar
        style='light' hidden
      />
        <View>

          <CardView question={"Few Question which come from server or Api ?"}
            answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? "} />

          <CardView question={"Few Question which come from server or Api ?"}
            answer={"Few Answers which come from server or Api  "} />

          <CardView question={"Few Question which come from server or Api ?"}
            answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ?  "} />

          <CardView question={"Few Question which come from server or Api ?"}
            answer={"Few Answers which come from server or Api ?Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ? Few Answers which come from server or Api ?  "} />

        </View>
      </ScrollView>



  )
}

export default dashborad

const styles = StyleSheet.create({
  container: {
    // flex:1
  }
})


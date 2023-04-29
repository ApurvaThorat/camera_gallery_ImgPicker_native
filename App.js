import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CropImagePicker from './component/CropImagePicker'
import CropImgFun from './component/CropImgFun'

const App = () => {
  return (
    <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <CropImagePicker></CropImagePicker>
     {/* <CropImgFun></CropImgFun> */}
    </SafeAreaView>
  )
}

export default App
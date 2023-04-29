import { View, Text, SafeAreaView, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
import ProfileImg from '../images/profileImg.jpg'

const CropImgFun = () => {

  const [OpenImage, setOpenImage] = useState("");
  console.log('img path', OpenImage);

  const [camImg, setCamImg] = useState('')
  const [TowShowImg, setTowShowImg] = useState(false)

  const PickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log("Image Console", image?.path);
      setOpenImage(image.path);
      setTowShowImg(true)
    });
  }

  const openCam = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log("Image Console", image?.path);
      setCamImg(image.path);
      setTowShowImg(true)
    });
  }
  
  return (
    <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      {/* <View >
        <Text>SELECT AVTAR</Text>
      </View> */}


      <TouchableOpacity
        style={[styles.btnBox]}
        onPress={() => PickImage()}
        
      >
        {
          TowShowImg === false ? <Image source={ProfileImg} style={[styles.imgBox]}/> :  <Image
          source={{ uri: OpenImage }}
          style={[styles.imgBox]}
        />
        }
       
      </TouchableOpacity>


      <TouchableOpacity
        style={[styles.btnBox]}
        onPress={() => openCam()}
        
      >
        {/* <Image source={ProfileImg} style={[styles.imgBox]}/> */}

        {
          TowShowImg === false ? <Text>Select from Camera</Text> :  <Image
          source={{ uri: camImg }}
          style={[styles.imgBox]}
        />
        }
       
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  btnBox: {
    // backgroundColor: 'red',
    height: 200,
    width: 200,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBox: {
    height: "100%",
    width: "100%",
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: "cover"
  }
})
export default CropImgFun

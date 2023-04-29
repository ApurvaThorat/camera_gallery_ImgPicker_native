import React, { useState } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const lmno = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setSelectedImage(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Select Image" onPress={selectImage} />
      {selectedImage && (
        <Image source={selectedImage} style={styles.image} resizeMode="contain" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default lmno;

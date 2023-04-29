import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Modal, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import camImg from '../images/camImg.jpg';
import gallery from '../images/gallery.jpg';
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';


const CropImagePicker = () => {

    const [showModal, setShowModal] = useState(false)

    const [TowShowImg, setTowShowImg] = useState(false)
    const [OpenImage, setOpenImage] = useState("");
    //   const [camImg, setCamImg] = useState('')


    const selectHandler = () => {
        setShowModal(true)
    }

    const openCam = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log("Image Console", image?.path);
            setOpenImage(image.path);
            setTowShowImg(true)
        });
    }

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

    return (
        <>
        <View style={[styles.headingBox]}>
                <Text style={{ color: 'white', fontSize: 20 }}>Image Picker from camera/gallery</Text>
            </View>
        
        <View style={[styles.mainContanier]}>
            

            <Modal
                style={[styles.modalContainer]}
                visible={showModal}
                animationType="slide"
                transparent={true}
            >
                <TouchableOpacity style={[styles.closeBtnSpace]}
                    onPress={() => setShowModal(false)}>
                </TouchableOpacity>

                <View style={[styles.modalInnerContainer]}>
                    <View>
                        <Text style={[styles.modalHeading]}>Avtar Photo</Text>
                    </View>

                    <View style={[styles.iconContainer]}>
                        <View style={[styles.flexBox]}>
                            <TouchableOpacity style={[styles.iconBox]}
                                onPress={() => openCam()}
                            >

                                <ImageBackground source={camImg} style={{ height: '100%', width: '100%', alignItems: 'center' }}></ImageBackground>

                            </TouchableOpacity>

                            <Text style={{ color: 'black', marginTop: '6%', fontSize: 16 }}>Camera</Text>



                        </View>
                        <View style={[styles.flexBox]}>
                            <TouchableOpacity style={[styles.iconBox]}
                                onPress={() => PickImage()}
                            >
                                <ImageBackground source={gallery} style={{ height: '100%', width: '100%', alignItems: 'center' }}></ImageBackground>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', marginTop: '6%', fontSize: 16 }}>Gallery</Text>
                        </View>

                    </View>
                </View>
            </Modal>

            <TouchableOpacity
                style={[styles.btnBox]}
                onPress={selectHandler} >
                {
                    TowShowImg === false ?
                        <Text style={{ color: 'white' }}>Select Avtar</Text>
                        :
                        <Image
                            source={{ uri: OpenImage }}
                            style={[styles.imgContainer]}
                        ></Image>

                }
            </TouchableOpacity>





        </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContanier: {
        backgroundColor: 'grey',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
    },
    headingBox: {
        marginTop: '10%',
        backgroundColor: 'red',
        width: '100%',
        height: 40,
        margin:'auto',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-evenly',
    },
    btnBox: {
        marginTop: '10%',
        height: '8%',
        width: '50%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    },
    modalContainer: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'red',
    },
    modalInnerContainer: {
        backgroundColor: '#075B52',
        height: '30%',
        width: "100%",
        padding: 5,
        position: 'absolute',
        bottom: 0,
        gap: 40,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    flexBox: {
        width: '50%',
        alignItems: 'center'
    },
    closeBtnSpace: {
        position: 'absolute',
        height: '70%',
        top: 0,
        width: '100%',
    },
    iconBox: {
        height: 48,
        width: 48,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        overflow: 'hidden'
    },
    iconContainer: {
        flexDirection: 'row',
    },
    modalHeading: {
        height: 30,
        fontSize: 20,
        color: 'white',
        marginLeft: 20,
        marginTop: 10,
    },
    imgContainer: {
        // marginTop: '10%',
        justifyContent:'center',
        alignItems:'center',
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default CropImagePicker
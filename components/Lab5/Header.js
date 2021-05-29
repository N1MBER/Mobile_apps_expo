import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/core';
import load from '../../assets/images/download.png';

const Header = ({setImage}) => {

    const navigator = useNavigation();
    const route = useRoute();

    const loadImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            cropping: true,
            width: 1000,
            cropperCircleOverlay: true,
            height: 1000,
            maxHeight: 1200,
            maxWidth: 1200,
        },(response => {
            if(response && response.uri){
                setImage(response)
            }
        }))
    }


    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.button}
                              onPress={() => navigator.navigate('tasks')}
            >
                <Text style={styles.button__text}>
                    Tasks
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.load}
                onPress={() => {
                    if (route.name === 'form')
                        loadImage()
                    else
                        navigator.navigate('lab4')
                }}
            >
                {route.name === 'form' ?
                    <Image style={styles.load__image} source={load}/>:
                    <Text style={styles.button__text}>
                        Lab4
                    </Text>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 50,
        backgroundColor: '#842eef',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal: 20
    },
    button: {
        // marginLeft: 20
    },
    button__text: {
        color: '#FFF',
        fontSize: 20
    },
    load: {
        // width: 30,
        height: 30,
    },
    load__image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default Header;

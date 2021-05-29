import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/core';

const HeaderLab4 = () => {

    const navigator = useNavigation();
    const route = useRoute();


    return (
        <View style={styles.header}>
            {/*{console.log(navigator.}*/}
            <TouchableOpacity style={styles.button}
                onPress={() => navigator.navigate('lab4')}
            >
                <Text style={styles.button__text}>
                    Android Versions
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                              onPress={() => {
                                  if (route.name !== 'lab4')
                                      navigator.goBack()
                                  else
                                      navigator.navigate('tasks')
                              }}
            >
                <Text style={styles.button__text}>
                    {route.name !== 'lab4' ? 'Go Back': 'Lab 5'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 50,
        backgroundColor: '#eed000',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal: 20
    },
    button: {
    },
    button__text: {
        color: '#FFF',
        fontSize: 20
    }
})

export default HeaderLab4;

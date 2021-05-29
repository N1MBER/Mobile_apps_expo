import React, {useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Header from './Header';
import Notification from './Notification';
import image from '../../assets/images/oreo.png'
import {useNavigation} from '@react-navigation/core';

const NotificationList = ({tasks, setTasks}) => {

    const navigator = useNavigation();

    useEffect(() => {
        console.log(tasks.filter(item => !!!item.image))
    }, [tasks])

    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <ScrollView style={styles.scroll}>
                {tasks.map((item, index) =>
                    <Notification key={`item${index}`} data={item}/>
                )}
            </ScrollView>
            <TouchableOpacity style={styles.button}
                onPress={() => navigator.navigate('form')}
            >
                <Text style={styles.button__text}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    scroll: {
        width: '100%',
        height: '100%'
    },
    button: {
        position: 'absolute',
        height: 60,
        width: 60,
        borderRadius: 80,
        alignItems: 'center',
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        backgroundColor: '#3fb17f'
    },
    button__text: {
        color: '#FFF',
        fontSize: 40,
        lineHeight: 40,
        fontWeight: '700'
    }
})

export default NotificationList;

import React, { useState } from "react";
import { Image, Text, StyleSheet, View } from "react-native";

function App(){
    
    const city = 'Presidente Epitácio';
    const condition = 'Ensolarado ';
    const rainProbality = '30';
    const feelslike = '45';
    const temperature = '39';

    const [night, setNight] = useState(false);
    

    return (
        <View style={[styles.container, night ? styles.containerBgNigth : styles.containerBgDay]}>
            <View style={styles.header}>
                <Text style={styles.city}>Presidente Epitácio</Text>
            </View>
            <View style={styles.detailsContainer}>
                
            <Text style={styles.temperature}>39 °C</Text>
           <Image source={ night ? require('../assets/images/noite.png'): require('../assets/images/sol.png')} 
           style={styles.weatherIcon}/>
            </View>
            <View>
            <Text style={styles.weatherCondition}>Ensolarado</Text>
            <Text style={styles.text}>Sensação Térmica: 45 °C </Text>
            <Text style={styles.text}>Probabilidade de chuva: 30% </Text>
            <Text> </Text>
            </View>
            <Image source={ require('../assets/images/cidade.png')}
            style={styles.bottomImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomImage: {
        width: '115%',
        height: '57%',
        position: 'absolute',
        bottom: 0,
        resizeMode: 'cover'

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20

    },
    city: {
        fontWeight: 'bold',
        fontSize:25,
        color: '#fff'

    },
    weatherIcon: {
        width: 100,
        height:100,
        alignSelf: 'flex-end',
        marginBottom: 20

    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    weatherCondition: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        alignSelf: 'flex-end'


    },

    temperature: {
        fontSize: 55,
        marginBottom: 20,
        color: '#fff'

   },

    container: {
        flex: 1,
        padding:20,

   },
    containerBgDay: {
        backgroundColor: '#09d3f3'

   },
    containerBgNigth: {
        backgroundColor: '#0333'

   },
    text: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 10,
        fontStyle: 'italic'


   },


});
export default App; /*esse comando deixa a tela acessivel */
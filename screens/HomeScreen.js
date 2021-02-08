import React, { useState } from 'react'
import { StyleSheet, TextInput, FlatList, View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native'


export default function HomeScreen ({navigation}) {

    const [sneakers, setSneakers] = useState ([
        {id:1, image: require("../img/logo.png"), title: "", description: "Bienvenue dans Nike SNKRS. Le véritable temple de la sneakers."},
        {id:2, image: require("../img/1.png"), title: "ACHETER EN QUELQUES ÉTAPES", description: "Achetez des sneakers en quelques secondes, directement par le biais de l'application. Sauvegardez toutes vos informations pour accélérer le processus."},
        {id:3, image: require("../img/2.png"), title: "GARDEZ UNE LONGUEUR D'AVANCE", description: "Mettez en place des notifications pour les sorties à venir. Partagez l'actualité, des photos et vidéos avec des amis."},
        {id:4, image: require("../img/3.png"), title: "DÉCOUVREZ L'HISTOIRE", description: "Découvrez la source d'inspiration, les avantages et l'histoire des sneakers présentées."},
        {id:5, image: require("../img/4.png"), title: "PARTICIPEZ AU TIRAGE AU SORT ", description: "Tentez facilement votre chance avec un système de sélection aléatoire pour acheter les produits les plus attendus."}
    ])

    const switchToSignUp = () => {
        navigation.navigate('Sign Up')
     }
 

    return (
        <View style={styles.container}>
            
            <FlatList
                data={sneakers}
                style={{ flex: 1 }}
                renderItem={({ item }) => {
                    return <View style={styles.containerCard}>
                        <View style={styles.main}>         
                            <Image style={styles.img} source={item.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.description}</Text>
                        </View>

                        </View>   
                        
                }}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                
                keyExtractor={item => item.id.toString()}
            />
            <View style={styles.buttons}>
                <TouchableOpacity onPress={switchToSignUp} style={styles.btnJoin}>
                    <Text style={{ paddingVertical: 8, paddingHorizontal: 20, fontWeight: '600', fontSize: 11, textAlign: 'center'}}>REJOINDRE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={{ paddingVertical: 8, paddingHorizontal: 20, fontWeight: '600', fontSize: 11, color:'white', textAlign: 'center'}}>SE CONNECTER</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity underlayColor="black" color="white">
                    <View>
                        <Text style={styles.btnGuest}>Continuer en tant qu'invité</Text>
                    </View>
                </TouchableOpacity>
            </View>
  
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    containerCard: {
        alignItems: 'center',
        width: 360,
        margin: 8,
        flex: 1,
        justifyContent: 'center',
        paddingTop: 80
    },
    img: {
        width: 300,
        height: 200     
    },
    title : {
        color: 'black',
        paddingTop: 15,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20,
        width: 338
    },
    desc : {
        color: 'black',
        paddingTop: 15,
        textAlign: 'center',
        color: 'black',
        width: 300,
        fontSize: 13,
        fontWeight: '500'
    },
    main : {
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttons: {
        flexDirection: 'row',
        marginBottom: 5
    },
    btnJoin: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 3,
        borderWidth: 1,
        padding: 10,
        width: 150,
        marginRight: 8,
        marginTop: 200
    },
    btnRegister: {
        backgroundColor: 'black',
        borderRadius: 3,
        padding: 10,
        marginLeft: 8,
        marginTop: 200,
        
    },
    btnGuest: {
        color: '#7c7b7b',
        paddingTop: 10,
        marginBottom: 20,
        fontSize: 13
    }
});
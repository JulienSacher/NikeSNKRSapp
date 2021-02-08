import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import CheckBox from '@react-native-community/checkbox';

export default function SignUpScreen ({navigation}) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View style={styles.firstSection}>
                <Image style={styles.swoosh} source={require('../img/swoosh.png')} />
                <Text style={styles.title}>DEVENEZ MEMBRE NIKE</Text>
                <Text style={styles.firstSectionText}>Créez votre profil Membre Nike et accédez au meilleur des produits, de l'inspiration et de la communauté Nike en avant première.</Text>
            </View>
            <View style={styles.secondSection}>
                <TextInput style={styles.textInputStyle} placeholder="Adresse e-mail" />
                <TextInput style={styles.textInputStyle} placeholder="Mot de passe" />
                <TextInput style={styles.textInputStyle} placeholder="Prénom" />
                <TextInput style={styles.textInputStyle} placeholder="Nom" />
                <TextInput style={styles.textInputStyle} placeholder="dd/mm/aaaa" />
                <Text style={styles.seconSectionText}>Bénéficiez d'une récompense réservée aux Membres Nike chaque année pour votre anniversaire. </Text>
                <TextInput style={styles.textInputCountry} placeholder="France" />
                <Text style={styles.secondSectionTitle}>Produits de préférence</Text>
                
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.btnMan}>
                        <Text style={{ paddingVertical: 8, paddingHorizontal: 20, fontWeight: '600', fontSize: 12, color: "#BCBCBC", textAlign: 'center'}}>Pour Homme</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWoman}>
                        <Text style={{ paddingVertical: 8, paddingHorizontal: 20, fontWeight: '600', fontSize: 12, color: "#BCBCBC", textAlign: 'center'}}>Pour Femme</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColors={{true: '#BCBCBC'}}
                        style={styles.checkbox}
                    />
                    <Text>Ma bite dans ton string</Text>
                </View>
            </View>
            </ScrollView>
        </View> 
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    firstSection: {
        alignItems: 'center'
    },
    swoosh: {
        width: 75,
        height: 50,
        marginVertical: 20
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 20
    },
    firstSectionText: {
        width: 340,
        textAlign: 'center',
        fontSize: 13,
        color: "#BCBCBC",
        marginBottom: 20,
        lineHeight: 20,
        fontWeight: '500'   
    },
    textInputStyle: {
        height: 40,
        width: 320,
        borderColor: '#BCBCBC',
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        marginVertical: 8,
        paddingLeft: 15
    },
    textInputCountry: {
        height: 40,
        width: 320,
        borderColor: '#BCBCBC',
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        marginVertical: 10,
        paddingLeft: 15,
        marginTop: 15
    },
    secondSection: {
        alignItems: 'center'
    },
    seconSectionText: {
        width: 315,
        textAlign: 'center',
        fontSize: 11,
        fontWeight: '500',
        color: "#BCBCBC"
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: 5
    },
    btnMan: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#BCBCBC",
        width: 150,
        marginRight: 8,
        paddingVertical: 3
    },
    btnWoman: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#BCBCBC",
        width: 150,
        marginLeft: 8,
        paddingVertical: 3
    },
    secondSectionTitle: {
        color: "#BCBCBC",
        fontWeight: '500',
        paddingBottom: 10,
        fontSize: 13
    }


})
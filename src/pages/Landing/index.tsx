import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
// import { RectButton } from 'react-native-gesture-handler' use for awesome button! but didnt working now :&

import styles from './styles';

import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigationToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={LandingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja Bem-vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja Fazer?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleNavigationToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.totalConnections}>
                Total de 285 conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}


export default Landing;
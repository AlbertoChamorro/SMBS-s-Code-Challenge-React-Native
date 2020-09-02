import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import styles from './styles/Header';

function Header(props) {
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor={styles.androidStatusBar.backgroundColor} />
            <SafeAreaView style={styles.iOSSupportSafeArea}>
                {props.children}
            </SafeAreaView>
        </View>
    );
}

export default Header;
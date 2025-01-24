import React from 'react';
import { 
    View, 
    Text, 
    useColorScheme, 
    StyleSheet 
} from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'; 

    console.log('Rendering AppPro with isDarkMode:', isDarkMode);

    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
                hello
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
    },
    whiteText: {
        color: '#FFFFFF',
    },
    blackText: {
        color: '#000000',
    },
});

export default AppPro;

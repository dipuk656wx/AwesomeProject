/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { Appearance, SafeAreaView, StyleSheet, Text, View } from 'react-native'
function AppPro(): JSX.Element {
    const colorScheme = Appearance.getColorScheme();
    console.log(colorScheme);
    
    return (
            <View>
                <Text>
                    Hello AppPro
                </Text>
            </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center'
        }
    }
)
export default AppPro;
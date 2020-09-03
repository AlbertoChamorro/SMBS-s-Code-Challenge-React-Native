// https://reactnative.dev/docs/platform-specific-code
import { Platform } from 'react-native';

const theme = {
    SearchBar: {
        containerStyle: {
            backgroundColor: '#f2f2f2'
        },
        inputStyle: {
        },
        inputContainerStyle: {
        },
        clearIcon: true,
        platform: Platform.OS
    },
    colors: {
        platform: {
            ios: {
                // primary: '',
                // secondary: '',
                // success: '',
                // error: '',
                // warning: ''
            },
            android: {
                // primary: '',
                // secondary: '',
                // success: '',
                // error: '',
                // warning: ''
            }
        }
    }
};

export default theme;
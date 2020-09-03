import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerColumn: {
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'stretch',
        flex: 1
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'stretch'
    },
    cover: {
        flex: 1,
        borderRadius: 7,
        minWidth: 120,
        minHeight: 210,
        maxHeight: 400
    },
    overlay: {
        borderRadius: 7,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'rgba(32, 33, 24, 0.35)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formGroup: {
        marginStart: 4,
        marginTop: 2,
        marginBottom: 4
    },
    badge: {
        flex: 1,
        marginTop: 4,
        alignSelf: 'flex-start',
    }
});

export default styles;
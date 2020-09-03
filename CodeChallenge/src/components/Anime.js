import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import placeholderImage from '../assets/placeholder.png'

function Anime(props) {
    const item = { ...props };
    // console.log(item.attributes.coverImage);
    //console.log(item.attributes.posterImage.original);
    let imageUrl = item.attributes.coverImage && item.attributes.coverImage.original
    let image = imageUrl ? { uri: imageUrl } : placeholderImage

    let imageComponent;
    if (props.isLoading) {
        imageComponent = (
            <React.Fragment>
                <Image style={styles.cover} source={image} />
                <ActivityIndicator style={styles.cover} />
            </React.Fragment>
        );
    } else {
        imageComponent = <Image style={styles.cover} source={image} />;
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            props.onSelectedItem(item.id)
        }}>
            <View style={styles.container}>
                {imageComponent}
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>{item.attributes.canonicalTitle || 'xxx'}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

Anime.propTypes = {
    id: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired,
    attributes: PropTypes.shape({
        coverImage: PropTypes.object,
        coverImage: PropTypes.shape({
            original: PropTypes.string,
        }),
        canonicalTitle: PropTypes.string.isRequired,
    }),
    type: PropTypes.oneOf(['anime']),
    onSelectedItem: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 8,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: 'hidden',
        marginRight: 2
    },
    cover: {
        width: 135,
        height: 210,
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    containerTitle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(32, 33, 24, 0.5)',
        paddingHorizontal: 6,
        paddingVertical: 4
    },
    title: {
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
        color: '#FFFFFF'
    }
});

export default Anime;

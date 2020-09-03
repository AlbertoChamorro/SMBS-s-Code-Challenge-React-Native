// Native Components
import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Icon } from 'react-native-elements';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import placeholderImage from '../assets/placeholder.png';
import { useNavigation } from '@react-navigation/native';

// Styles
import styles from './styles/AnimeDetail';

// Components
import FieldKeyLayout from '../components/FieldKeyLayout';
import FieldKeyText from '../components/FieldKeyText';
import Genres from '../components/containers/GenresList';
import Episodes from '../components/containers/EpisodesList';

// Utils
import DateUtils from '../utils/DateUtil';

function AnimeDetailStatus(status) {
    let newStatusBadge = '';
    switch (status) {
        case 'tba', 'upcoming':
            newStatusBadge = 'primary';
        case 'current':
            newStatusBadge = 'success';
        case 'upcoming':
            newStatusBadge = 'warning';
        default:
            newStatusBadge = 'error';
    }
    return <Badge value={status.toUpperCase() || 'xxxx'} status={newStatusBadge} containerStyle={styles.badge} />
}

function setMenu(props) {
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: (_) => (
                <TouchableOpacity activeOpacity={0.85}
                    onPress={() => props.onSharedAnime({
                        name: props.anime.attributes.canonicalTitle,
                        subtype: props.anime.attributes.subtype
                    })}>
                    <Icon
                        color='#fff'
                        type='font-awesome'
                        name="share-alt"
                        style={{ marginRight: 8 }}
                        underlayColor={'#64b5f6'}
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
}

function AnimeDetail(props) {

    const { attributes } = props.anime;

    if (!attributes) return null;
    setMenu(props);

    let imageUrl = attributes.posterImage && attributes.posterImage.original;
    let image = imageUrl ? { uri: imageUrl } : placeholderImage;

    let startDate = DateUtils.toDate(attributes.startDate, DateUtils.DATE_MONTH_FORMAT).toString();
    let endDate = DateUtils.toDate(attributes.endDate, DateUtils.DATE_MONTH_FORMAT).toString();

    return (
        <ScrollView>
            <View style={styles.containerColumn}>
                <View style={[styles.containerRow]}>
                    <View style={{ flex: 4 }}>
                        <TouchableOpacity activeOpacity={0.85} onPress={() => {
                            props.onPlayVideo(attributes.youtubeVideoId)
                        }}>
                            <View style={{ flex: 1 }}>
                                <Image resizeMode="cover" style={styles.cover} source={image} />
                                <View style={styles.overlay}>
                                    <Icon name='play' type='font-awesome' color="#fff" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 6, justifyContent: 'space-between', paddingStart: 8 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Main Title'}>
                            <FieldKeyText value={attributes.titles.en || 'xxxx'} />
                        </FieldKeyLayout>
                        <FieldKeyLayout style={styles.formGroup} title={'Canonical Title'}>
                            <FieldKeyText value={attributes.canonicalTitle || 'xxxx'} />
                        </FieldKeyLayout>
                        <FieldKeyLayout style={styles.formGroup} title={'Type'}>
                            <FieldKeyText value={`${attributes.subtype}, ${(attributes.episodeLength || 0).toString()} episodes`} />
                        </FieldKeyLayout>
                        <FieldKeyLayout style={styles.formGroup} title={'Year'}>
                            <FieldKeyText value={`${startDate} till ${endDate}`} />
                        </FieldKeyLayout>
                    </View>
                </View>

                <View style={{ marginTop: 16, marginBottom: 6 }}>
                    <FieldKeyLayout style={styles.formGroup} title={'Genres'}>
                        <View style={{ marginTop: 8 }}>
                            <Genres list={props.genres} />
                        </View>
                    </FieldKeyLayout>
                </View>

                <View style={[styles.containerRow, { justifyContent: 'space-between' }]}>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Average Rating'}>
                            <FieldKeyText value={attributes.averageRating || 'xxxx'} />
                        </FieldKeyLayout>
                    </View>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Age Rating'}>
                            <FieldKeyText value={attributes.ageRating || 'xxxx'} />
                        </FieldKeyLayout>
                    </View>
                </View>

                <View style={[styles.containerRow, { justifyContent: 'space-between' }]}>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Episode Duration'}>
                            <FieldKeyText value={`${(attributes.episodeCount || 0)} min` || 'xxxx'} />
                        </FieldKeyLayout>
                    </View>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Airing Status'}>
                            {AnimeDetailStatus(attributes.status)}
                        </FieldKeyLayout>
                    </View>
                </View>

                <View style={{ marginTop: 16 }}>
                    <FieldKeyLayout style={styles.formGroup} title={'Synopsis'}>
                        <FieldKeyText showMoreText={true} value={attributes.synopsis || 'xxxx'} />
                    </FieldKeyLayout>
                </View>

                <View style={{ marginTop: 16, marginBottom: 6 }}>
                    <FieldKeyLayout style={styles.formGroup} title={'Episodes'}>
                        <View style={{ marginTop: 8 }}>
                            <Episodes list={props.episodes} />
                        </View>
                    </FieldKeyLayout>
                </View>
            </View>
        </ScrollView>
    );
}

AnimeDetail.defaultProps = {
    anime: {
        id: "0",
        attributes: {
            titles: {},
            episodeCount: 0,
            episodeLength: 0,
        }
    }
}

AnimeDetail.propTypes = {
    anime: PropTypes.object,
    anime: PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.oneOf(['anime']),
        attributes: PropTypes.object,
        attributes: PropTypes.shape({
            titles: PropTypes.object,
            titles: PropTypes.shape({
                en: PropTypes.string,
            }),
            canonicalTitle: PropTypes.string.isRequired,
            episodeCount: PropTypes.number.isRequired,
            youtubeVideoId: PropTypes.string,
            episodeLength: PropTypes.number,
            ageRating: PropTypes.oneOf(['G', 'PG', 'R', 'R18']),
            subtype: PropTypes.oneOf(['ONA', 'OVA', 'TV', 'movie', 'music', 'special']),
            status: PropTypes.oneOf(['current', 'finished', 'tba', 'unreleased', 'upcoming']),
            averageRating: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            synopsis: PropTypes.string.isRequired
        })
    }),
    onPlayVideo: PropTypes.func,
    onSharedAnime: PropTypes.func
};

export default AnimeDetail;

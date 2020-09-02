// Native Components
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-native-elements';
import { StyleSheet, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import placeholderImage from '../assets/placeholder.png'

// Components
import FieldKeyLayout from '../components/FieldKeyLayout';
import FieldKeyText from '../components/FieldKeyText';
import Genres from '../components/containers/GenresList';

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

function AnimeDetail(props) {

    const { anime } = props;
    const { attributes } = anime;

    let imageUrl = attributes.coverImage && attributes.coverImage.original;
    let image = imageUrl ? { uri: imageUrl } : placeholderImage;

    let startDate = DateUtils.toDate(attributes.startDate, DateUtils.DATE_MONTH_FORMAT).toString();
    let endDate = DateUtils.toDate(attributes.endDate, DateUtils.DATE_MONTH_FORMAT).toString();

    return (
        <ScrollView>
            <View style={styles.containerColumn}>
                <View style={[styles.containerRow]}>
                    <View style={{ flex: 4 }}>
                        <Image resizeMode="cover" style={styles.cover} source={image} />
                    </View>
                    <View style={{ flex: 6, justifyContent: 'space-between', paddingStart: 8 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Main Title'}>
                            <FieldKeyText value={attributes.titles.en || 'xxxx'} />
                        </FieldKeyLayout>
                        <FieldKeyLayout style={styles.formGroup} title={'Canonical Title'}>
                            <FieldKeyText value={attributes.canonicalTitle || 'xxxx'} />
                        </FieldKeyLayout>
                        <FieldKeyLayout style={styles.formGroup} title={'Type'}>
                            <FieldKeyText value={`${attributes.subtype}, ${(attributes.episodeLength || 0).toString()}`} />
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
                            <FieldKeyText value={(attributes.episodeCount || 0).toString() || 'xxxx'} />
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
                        <FieldKeyText value={attributes.synopsis || 'xxxx'} />
                    </FieldKeyLayout>
                </View>
            </View>
        </ScrollView>
    );
}

AnimeDetail.defaultProps = {
    anime: {
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
        id: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['anime']),
        attributes: PropTypes.object,
        attributes: PropTypes.shape({
            titles: PropTypes.object,
            titles: PropTypes.shape({
                en: PropTypes.string,
            }),
            canonicalTitle: PropTypes.string.isRequired,
            episodeCount: PropTypes.number.isRequired,
            // youtubeVideoId: PropTypes.string.isRequired,
            episodeLength: PropTypes.number.isRequired,
            coverImage: PropTypes.object,
            coverImage: PropTypes.shape({
                original: PropTypes.string,
            }),
            ageRating: PropTypes.oneOf(['G', 'PG', 'R', 'R18']),
            subtype: PropTypes.oneOf(['ONA', 'OVA', 'TV', 'movie', 'music', 'special']),
            status: PropTypes.oneOf(['current', 'finished', 'tba', 'unreleased', 'upcoming']),
            averageRating: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            synopsis: PropTypes.string.isRequired,
        })
    }),
};

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
        width: null,
        height: null
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

export default AnimeDetail;

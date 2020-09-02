// Native Components
import React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';

// Components
import FieldKeyLayout from '../components/FieldKeyLayout';
import FieldKeyText from '../components/FieldKeyText';

function AnimeDetail(props) {

    const { item } = props;
    console.log(item);

    return (
        <ScrollView>
            <View style={styles.containerColumn}>
                <View style={[styles.containerRow]}>
                    <View style={{ flex: 4 }}>
                        <Image resizeMode="cover" style={styles.cover} source={require('../assets/placeholder.png')} />
                    </View>
                    <View style={{ flex: 6, justifyContent: 'space-between' }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Main Title'}>
                            <FieldKeyText value={'Anime Title'} />
                        </FieldKeyLayout>
                        <FieldKeyLayout style={styles.formGroup} title={'Canonical Title'}>
                            <FieldKeyText value={'Canonical Title'} />
                        </FieldKeyLayout>
                        <FieldKeyLayout style={styles.formGroup} title={'Type'}>
                            <FieldKeyText value={'Show Type, Number Episodes'} />
                        </FieldKeyLayout>
                        <FieldKeyLayout style={styles.formGroup} title={'Year'}>
                            <FieldKeyText value={'Start Date till End Date'} />
                        </FieldKeyLayout>
                    </View>
                </View>

                <View style={{ marginTop: 16, marginBottom: 6 }}>
                    <FieldKeyLayout style={styles.formGroup} title={'Genres'}>
                        <FieldKeyText value={'Genres List'} />
                    </FieldKeyLayout>
                </View>

                <View style={[styles.containerRow, { justifyContent: 'space-between' }]}>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Average Rating'}>
                            <FieldKeyText value={'Rating'} />
                        </FieldKeyLayout>
                    </View>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Age Rating'}>
                            <FieldKeyText value={'Rating'} />
                        </FieldKeyLayout>
                    </View>
                </View>

                <View style={[styles.containerRow, { justifyContent: 'space-between' }]}>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Episode Duration'}>
                            <FieldKeyText value={'Duration'} />
                        </FieldKeyLayout>
                    </View>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Airing Status'}>
                            <FieldKeyText value={'Status'} />
                        </FieldKeyLayout>
                    </View>
                </View>

                <View style={[styles.containerRow, { justifyContent: 'space-between' }]}>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Average Rating'}>
                            <FieldKeyText value={'Rating'} />
                        </FieldKeyLayout>
                    </View>
                    <View style={{ flex: 5 }}>
                        <FieldKeyLayout style={styles.formGroup} title={'Age Rating'}>
                            <FieldKeyText value={'Rating'} />
                        </FieldKeyLayout>
                    </View>
                </View>

                <View style={{ marginTop: 16 }}>
                    <FieldKeyLayout style={styles.formGroup} title={'Synopsis'}>
                        <FieldKeyText value={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'} />
                    </FieldKeyLayout>
                </View>
            </View>
        </ScrollView>
    );
}

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
        width: null,
        height: null
    },
    formGroup: {
        marginStart: 4,
        marginTop: 2,
        marginBottom: 4
    }
});

export default AnimeDetail;

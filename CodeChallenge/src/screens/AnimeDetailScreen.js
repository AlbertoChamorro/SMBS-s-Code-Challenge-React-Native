import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../components/Header';

function AnimeDetailScreen({ route, navigation }) {
    const { animeId } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <Text>Details Screen</Text>
        <Text>animeId: {JSON.stringify(animeId)}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

export default AnimeDetailScreen;

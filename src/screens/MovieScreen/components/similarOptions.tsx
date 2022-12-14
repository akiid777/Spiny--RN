import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from '../styles';

export default function SimilarOptions({ data, selectedCharacters }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) => (
        <View style={styles.optionsCards}>
          <Text style={styles.optionsCardTitle}>{item.title}</Text>
          <Image
            source={
              item.image ==
                'https://imdb-api.com/images/original/nopicture.jpg' ||
              item.image.length < 1
                ? selectedCharacters.photo
                : { uri: item.image }
            }
            style={styles.optionsMoviePhoto}
            resizeMode="stretch"
          />
        </View>
      )}
    />
  );
}

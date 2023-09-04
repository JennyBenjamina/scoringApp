import { StyleSheet, FlatList } from 'react-native';
import React from 'react';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import GamesItem from '../../components/GamesItem';

interface Game {
  id: string;
  title: string;
}

const DATA: Game[] = [
  {
    id: '1',
    title: 'Odell Friday Game',
  },
  {
    id: '2',
    title: 'Slammo',
  },
  {
    id: '2',
    title: 'Slammo',
  },
  {
    id: '2',
    title: 'Slammo',
  },
  {
    id: '2',
    title: 'Slammo',
  },
  {
    id: '2',
    title: 'Slammo',
  },
  {
    id: '2',
    title: 'Slammo',
  },
  {
    id: '2',
    title: 'Slammo',
  },
  {
    id: '2',
    title: 'Slammo',
  },
];

const Games: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => <GamesItem title={item.title} />}
        keyExtractor={(item) => item.id}
      />

      {/* <EditScreenInfo path="app/(tabs)/games.tsx" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default Games;

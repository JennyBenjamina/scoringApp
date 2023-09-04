import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

interface GamesProps {
  title: string;
}

const GamesItem: React.FC<GamesProps> = (props) => {
  const [hueOffset, setHueOffset] = useState(7250);

  const generateRainbowColor = (hue: number): string => {
    const saturation = 100;
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <View
      style={[
        styles.container,

        { backgroundColor: generateRainbowColor(hueOffset * Math.random()) },
      ]}
    >
      <Text style={[styles.text, styles.overlay]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    // width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginBottom: 10,
    paddingVertical: 10,
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
});

export default GamesItem;

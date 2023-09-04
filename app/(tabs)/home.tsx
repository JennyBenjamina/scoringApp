import { StyleSheet, ImageBackground } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

const image = require('../../assets/images/top-view-golf.jpg');

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="contain" style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Betting App Golf</Text>
        </View>
      </ImageBackground>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

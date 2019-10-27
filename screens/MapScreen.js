import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MapScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.mapTitle}>Map</Text>
      </View>
    </ScrollView>
  );
}

MapScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  mapTitle: {
    textAlign: 'center',
    fontSize: 30,
  }
});

import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'react-native-ui-lib'

const Body = () => {
  return (
    <ScrollView>
      <Text style={{ textAlign: 'center' }}>Header</Text>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={styles.image}
        />
      </View>
      <ScrollView>
        <TextInput style={styles.textInput}>
        </TextInput>
      </ScrollView>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Mengatur penempatan vertikal menjadi tengah
    alignItems: 'center', // Mengatur penempatan horizontal menjadi tengah
  },
  image: {
    width: 200,
    height: 200,
    // Tambahkan properti gaya untuk gambar di sini
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

export default Body

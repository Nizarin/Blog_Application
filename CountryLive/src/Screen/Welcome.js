import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.bg} source={Pattern} /> */}
      <View style={styles.container1}>
        {/* <Image style={styles.logo} source={Logo} /> */}
        <Text style={styles.head}>Welcome To</Text>
        <Text style={styles.head}>BLOG LIVE</Text>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}>
          Signup
        </Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'#db393c',
      },
      container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
      },
      head: {
        fontSize: 30,
        color: '#fff',
      },
      button: {
        backgroundColor: '#F5F7F8',
        color: '#db393c',
        padding: 10,
        borderRadius: 10,
        fontSize: 20,
        minWidth: 150,
        textAlign: 'center',
        margin: 10,
      },
      logo: {
        marginBottom: 5,
      },
})
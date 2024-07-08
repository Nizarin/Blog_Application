import { StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, {useState} from 'react'

const Login = ({navigation}) => {
    const [fdata, setFdata] = useState({
        email: '',
        password: '',
      });
      const [errormsg, setErrormsg] = useState(null);
      const Sendtobackend = () => {
        //console.log(fdata);
        if (fdata.email == '' || fdata.password == '') {
          setErrormsg('All fields are required');
        } else {
          fetch('http://10.0.2.2.:3000/signin', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(fdata),
          })
            .then(res => res.json())
            .then(data => {
              //console.log(data);
              if (data.error) {
                setErrormsg(data.error);
              } else {
                Alert.alert(`Loggied successfully`);
                navigation.navigate('Home');
              }
            });
        }
      };
  return (
    <View style={styles.container}>
      {/* <Image style={styles.bg} source={Pattern} /> */}
      <View style={styles.container1}>
        <View style={styles.section1}>
          {/* <Image style={styles.logo} source={Logo} /> */}
          <Text
            style={styles.h1}
            onPress={() => navigation.navigate('Welcome')}>
            BLOG LIVE
          </Text>
          {/* <Text style={styles.h5}>save</Text> */}
          <Text></Text>
        </View>
        <View style={styles.section2}>
          <Text style={styles.section2_h1}>Login</Text>
          <Text style={styles.section2_h2}>Sign in to continue</Text>
          {errormsg ? <Text style={styles.errmsg}>{errormsg}</Text> : null}
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your E-mail"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text =>
                setFdata({
                  ...fdata,
                  email: text,
                })
              }
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="* * * * * * * * * * *"
              secureTextEntry={true}
              onPressIn={() => setErrormsg(null)}
              onChangeText={text =>
                setFdata({
                  ...fdata,
                  password: text,
                })
              }
            />
          </View>
          <View style={styles.fp}>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('ForgorPassword')}>
              Forgot Password?
            </Text>
          </View>
          <Text style={styles.button} onPress={() => Sendtobackend()}>
            Login
          </Text>
          <Text style={styles.links}>
            Don't have an account?{' '}
            <Text
              style={styles.link2}
              onPress={() => navigation.navigate('Signup')}>
              Create a new account
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'#db393c',
      },
      bg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
      },
      container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      },
      logo: {
        height: 150,
        width: 150,
      },
      h1: {
        color: '#fff',
        fontSize: 30,
      },
      h5: {
        color: '#fff',
        fontSize: 15,
      },
      section1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '45%',
      },
      section2: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '55%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
      },
      section2_h1: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
      },
      section2_h2: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginVertical: 10,
      },
      label: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
        marginBottom: 5,
      },
      input: {
        backgroundColor: '#FF8989',
        borderRadius: 20,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
      },
      link: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
      fp: {
        display: 'flex',
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginVertical: 10,
      },
      button: {
        backgroundColor: '#db393c',
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        minWidth: 150,
        textAlign: 'center',
        margin: 10,
      },
      link2: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
      links: {
        textAlign: 'center',
      },
      errmsg: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: '#7D3C98',
        padding: 5,
        borderRadius: 10,
      },
})
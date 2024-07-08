import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity,Alert } from 'react-native'
import React, {useState} from 'react'

const Signup = ({navigation}) => {

    const [fdata, setFdata] = useState({
        name: '',
        email: '',
        password: '',
        con_password: '',
        dob: '',
        address: '',
      });
    
      const [errormsg, setErrormsg] = useState(null);
    
      const Sendtobackend = () => {
        //console.log(fdata);
        if (
          fdata.name == '' ||
          fdata.email == '' ||
          fdata.password == '' ||
          fdata.con_password == '' ||
          fdata.dob == '' ||
          fdata.address == ''
        ) {
          setErrormsg(`All fields are required`);
          return;
        } else {
          if (fdata.password != fdata.con_password) {
            setErrormsg('Password and confirm password must be same');
            return;
          } else {
            fetch(`http://10.0.2.2.:3000/signup`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(fdata),
            })
              .then(res => res.json())
              .then(data => {
                if (data.error) {
                  setErrormsg(data.error);
                } else {
                  Alert.alert(`Account created successfully`);
                  navigation.navigate('Login');
                }
              });
          }
        }
      };

  return (
    <View style={styles.container}>
      {/* <Image style={styles.bg} source={Pattern} /> */}
      <View style={styles.container1}>
        <View style={styles.section1}></View>
        <ScrollView style={styles.section2}>
          <Text style={styles.section2_h1}>Create a new account</Text>
          <Text style={styles.links}>
            Already Registered?{' '}
            <Text
              style={styles.link2}
              onPress={() => navigation.navigate('Login')}>
              Login here
            </Text>
          </Text>
          {/* {errormsg ? <Text style={styles.errmsg}>{errormsg}</Text> : null} */}
          <View style={styles.form}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Name"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, name: text})}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your E-mail"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, email: text})}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>DoB</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Date Of Birth"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, dob: text})}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, password: text})}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Confire Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confire your Password"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, con_password: text})}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Address"
              onPressIn={() => setErrormsg(null)}
              onChangeText={text => setFdata({...fdata, address: text})}
            />
          </View>
          <TouchableOpacity>
            <Text
              style={styles.button}
              onPress={() => {
                Sendtobackend();
              }}>
              Signup
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default Signup

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
        height: '10%',
      },
      section2: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '90%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
      },
      section2_h1: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontWeight: '500',
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
        marginVertical: 5,
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
        textAlign: 'center',
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 50,
      },
      link: {
        color: '#f50057',
        fontSize: 17,
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
        color: '#db393c',
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
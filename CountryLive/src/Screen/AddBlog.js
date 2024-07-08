import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const AddBlog = () => {
  const [fdata, setFdata] = useState({
    Title:'',
    Content:'',
  });

  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = () => {
    if (
      fdata.Title == '' ||
      fdata.Content == '' 
    ) {
      setErrormsg(`All fields are required`);
    } else {
      fetch(`http://10.0.2.2.:3000/postblog`, {
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
            Alert.alert(`Data saved`)
          }
        });
    }
  };

  return (
    <View style={style.viewContact}>
      <Text>AddBlog</Text>
      {errormsg ? <Text style={style.errmsg}>{errormsg}</Text> : null}
      <View style={style.form}>
        <Text style={style.label}>Title</Text>
        <TextInput
          style={style.input}
          placeholder="Enter Title"
          onPressIn={() => setErrormsg(null)}
          onChangeText={text => setFdata({...fdata, Title: text})}
        />
      </View>
      <View style={style.form}>
        <Text style={style.label}>Content</Text>
        <TextInput
          style={style.input}
          placeholder="Enter Content"
          onPressIn={() => setErrormsg(null)}
          onChangeText={text => setFdata({...fdata, Content: text})}
        />
      </View>
      <TouchableOpacity>
        <Text
          style={style.button}
          onPress={() => {
            Sendtobackend();
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddBlog;

const style = StyleSheet.create({
  viewContact: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
  input: {
    backgroundColor: '#bdc3c7',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 50,
    width: 350,
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
    color: '#7D3C98',
    marginLeft: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#7D3C98',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    minWidth: 150,
    textAlign: 'center',
    margin: 10,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  Avatar: {
    alignItems: 'center',
    borderBlockColor: 'red',
    borderRadius: 50,
  },
  errmsg: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#7D3C98',
    padding: 5,
    borderRadius: 10,
  },
});

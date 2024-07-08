import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ViewBlog = () => {
  const [list, setList] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);

  function fetchData() {
    setIsRefresh(true);

    // Simulate a data fetch with a delay
    setTimeout(() => {
      setIsRefresh(false);

      // You can add your data fetching logic here
      fetch('http://10.0.2.2:3000/postblog', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setList(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, 1000); // Simulated delay of 1 second
  }

  useEffect(() => {
    fetchData();
  }, []); // Initial data fetch

  return (
    <View style={styles.viewContact}>
      <Text style={styles.fav}>Contacts</Text>
      <FlatList
        data={list}
        keyExtractor={(item, index) =>
          item && item.id ? item.id.toString() : index.toString()
        }
        refreshing={isRefresh}
        onRefresh={fetchData}
        renderItem={({ item }) => (
          <View style={styles.listView}>
            <Text style={{fontSize:20, color:'#000'}}>Title : {item.Title}</Text>
            <Text>Content : {item.Content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContact: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 2,
    margin: 5,
  },
  fav: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  listView: {
    backgroundColor: 'bisque',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
});

export default ViewBlog;
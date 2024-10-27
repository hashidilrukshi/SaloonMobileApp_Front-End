import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const ServiceDetails = ({route, navigation}) => {
  const {service} = route.params || {};

  if (!service) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Service details not available.</Text>
      </View>
    );
  }

  const renderServiceItem = ({item}) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.cardContent}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.servicePrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.title}</Text>
      <FlatList
        data={service.services}
        renderItem={renderServiceItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
    textAlign: 'center',
  },
  flatListContent: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: 330,
  },
  image: {
    width: '100%',
    height: 250,
  },
  cardContent: {
    padding: 12,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 18,
    color: '#27ae60',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ServiceDetails;

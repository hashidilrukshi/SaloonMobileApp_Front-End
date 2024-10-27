import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import stylesData from './servicesData';

const Popular = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ServiceDetail', {service: item})}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../assets/bg3.jpg')}
      style={styles.container}>
      <View>
        <Text style={styles.heading}>OUR SERVICES</Text>
        <View style={styles.textBox}>
          <Text style={styles.description}>
            Step into our salon and discover a world of beauty and relaxation.
            From precision haircuts to rejuvenating skincare treatments, our
            expert team is here to pamper you from head to toe. Whether you're
            looking to refresh your look with a stylish haircut or indulge in a
            luxurious facial, we're committed to providing you with exceptional
            service.
          </Text>
        </View>

        <FlatList
          data={stylesData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.stylesContainer}
        />

        <View style={styles.textBox}>
          <Text style={styles.description2}>
            Heyy!!!! Girls, join us and get a more good look for you!
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fefefe',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 8,
  },
  textBox: {
    borderWidth: 1,
    borderColor: '#34495e',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  stylesContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 5,
    marginRight: 15,
    width: 180,
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: 250,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description2: {
    fontSize: 16,
    color: '#DE3163',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: '#2980b9',
  },
});

export default Popular;

import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={styles.container}
      resizeMode="cover">
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.banner}>
          <Image
            source={require('../assets/home.png')}
            style={styles.headerImage}
          />
          <View style={styles.overlay}>
            <Text style={styles.heading}>Welcome to Style Saloon</Text>
            <Text style={styles.subheading}>Beauty with Style</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionHeading}>About Us</Text>
          <Text style={styles.description}>
            At Style Salon, beauty is an art. Our stylists use cutting-edge
            techniques and top-quality products to enhance your unique style.
            From fresh haircuts to relaxing spa experiences, we are dedicated to
            making you look and feel exceptional.
          </Text>
          <Image
            source={require('../assets/home.png')}
            style={styles.aboutImage}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerHeading}>Style.lk</Text>
          <Text style={styles.tagline}>Beauty with Style</Text>

          <View style={styles.footerSection}>
            <View style={styles.footerBox}>
              <Text style={styles.footerSubheading}>Locations</Text>
              <Text style={styles.footerLink}>📍 Kottawa</Text>
              <Text style={styles.footerLink}>📍 Maharagama</Text>
              <Text style={styles.footerLink}>📍 Colombo 7</Text>
            </View>

            <View style={styles.footerBox}>
              <Text style={styles.footerSubheading}>Contact Us</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL('tel:+94114802697')}>
                <Text style={styles.footerLink}>📞 +94 114 802 697</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('mailto:style.lk@gmail.com')}>
                <Text style={styles.footerLink}>✉️ style.lk@gmail.com</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.social}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.facebook.com')}>
              <Text style={styles.socialIcon}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://twitter.com')}>
              <Text style={styles.socialIcon}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.instagram.com')}>
              <Text style={styles.socialIcon}>Instagram</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.copyright}>
            <Text>© Style.lk All Rights Reserved 2023</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  banner: {
    height: 200,
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F33A6A',
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subheading: {
    fontSize: 16,
    color: '#f0e68c',
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 15,
  },
  aboutImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  footer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  footerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  tagline: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  footerBox: {
    alignItems: 'center',
    flex: 1,
  },
  footerSubheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 6,
  },
  footerLink: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 4,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialIcon: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 4,
    marginHorizontal: 15,
  },
  copyright: {
    fontSize: 12,
    color: '#777',
    marginTop: 10,
    textAlign: 'center',
  },
  aboutButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  copyright: {
    fontSize: 12,
    color: '#777',
    marginTop: 10,
  },
});

export default HomeScreen;

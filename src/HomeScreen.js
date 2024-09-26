import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import BottomTabs from './BottomTabs';

import kickinSlider from '../assets/kickinSlider.jpg';
import kickin1 from '../assets/kickin1.jpg';
import kickin2 from '../assets/kickin2.jpg';
import kickin3 from '../assets/kickin3.jpg';
import kickin4 from '../assets/kickin4.jpg';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dataSoccer = [
    {
      id: 1,
      title: 'Field1',
      image: kickin1,
      price: 250,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna neque viverra justo nec ultrices dui. At tellus at urna condimentum mattis. Netus et malesuada fames ac turpis. In pellentesque massa placerat duis ultricies lacus sed turpis. Pellentesque habitant morbi tristique senectus. ',
      rating: 4.9,
      slot: 3,
    },
    {
      id: 2,
      title: 'Field2',
      image: kickin2,
      price: 150,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna neque viverra justo nec ultrices dui. At tellus at urna condimentum mattis. Netus et malesuada fames ac turpis. In pellentesque massa placerat duis ultricies lacus sed turpis. Pellentesque habitant morbi tristique senectus. ',
      rating: 4.5,
      slot: 5,
    },
    {
      id: 3,
      title: 'Field3',
      image: kickin3,
      price: 120,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna neque viverra justo nec ultrices dui. At tellus at urna condimentum mattis. Netus et malesuada fames ac turpis. In pellentesque massa placerat duis ultricies lacus sed turpis. Pellentesque habitant morbi tristique senectus. ',
      rating: 4.0,
      slot: 7,
    },
    {
      id: 4,
      title: 'Field4',
      image: kickin4,
      price: 200,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna neque viverra justo nec ultrices dui. At tellus at urna condimentum mattis. Netus et malesuada fames ac turpis. In pellentesque massa placerat duis ultricies lacus sed turpis. Pellentesque habitant morbi tristique senectus. ',
      rating: 5.0,
      slot: 0,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <Icon style={styles.headerIcon} name="bars" />
        </TouchableOpacity>
      </View>
      <View style={styles.sliderImageContainer}>
        <Image source={kickinSlider} style={styles.sliderImage} />
        <TouchableOpacity style={styles.sliderChevronLeft}>
          <Icon name="chevron-left" style={styles.Chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sliderChevronRight}>
          <Icon name="chevron-right" style={styles.Chevron} />
        </TouchableOpacity>
      </View>
      <Text style={styles.subText}>Field List</Text>
      <ScrollView
        contentContainerStyle={styles.homeContainer}
        style={styles.fieldMargin}>
        {dataSoccer.map((item, index) => {
          console.log(item);
          return (
            <View style={styles.catalogContainer} key={index}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.image} />
              </View>
              <Text style={styles.fieldTitle}>{item.title}</Text>
              <TouchableOpacity
                style={styles.viewButtonContainer}
                onPress={() =>
                  navigation.navigate('DetailScreen', {item: item})
                }>
                <Text style={styles.viewButton}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookButtonContainer}>
                <Text style={styles.bookButton}>Book</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <BottomTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313131',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    marginVertical: 20,
    paddingLeft: 40,
    flex: 3,
    color: '#fff',
  },
  headerIcon: {
    fontSize: 24,
    paddingRight: 20,
    color: '#fff',
  },
  catalogContainer: {
    backgroundColor: '#545454',
    width: '45%',
    margin: 5,
    borderRadius: 5,
    height: 250,
  },
  homeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 5,
  },
  imageContainer: {
    backgroundColor: 'red',
    margin: 5,
    borderRadius: 3,
    height: 120,
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    width: null,
    height: null,
  },
  subText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginVertical: 10,
    color: '#fff',
    marginLeft: 10,
  },
  fieldTitle: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    paddingVertical: 5,
  },
  viewButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#7b7b7b',
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    color: '#fff',
  },
  bookButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#53c9c2',
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    color: '#000',
  },
  viewButton: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
  },
  bookButton: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
  },
  sliderImageContainer: {
    backgroundColor: 'red',
    marginHorizontal: 10,
    height: 150,
    marginVertical: 5,
  },
  sliderImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1,
  },
  sliderChevronLeft: {
    position: 'absolute',
    left: 0,
    top: '50%',
    marginHorizontal: 10,
    marginTop: -12,
  },
  sliderChevronRight: {
    position: 'absolute',
    right: 0,
    top: '50%',
    marginHorizontal: 10,
    marginTop: -12,
  },
  Chevron: {
    fontSize: 24,
    color: '#53c9c2',
    //Because fontSize is 24, we need to subtract margin by half of the fontSize
  },
  fieldMargin: {
    marginBottom: 70,
  },
});

export default HomeScreen;

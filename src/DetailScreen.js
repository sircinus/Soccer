import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import BottomTabs from './BottomTabs';

const DetailScreen = (props) => {
  const navigation= useNavigation();
  const detail = props.route.params.item;
  console.log(props.route.params.item);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Icon 
          style={styles.arrowIcon}
          name='arrow-left'
          onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <Icon style={styles.barsIcon} name='bars' />
        </TouchableOpacity>
      </View>
      <View style={styles.headerImageContainer}>
        <Image source={detail.image} style={styles.headerImage} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{detail.title}</Text>
        <Text style={styles.priceText}>Rp {detail.price}rb</Text>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <Text style={styles.subText}>Description</Text>
        <Text style={styles.description}>{detail.description}</Text>
        <Text style={styles.subText}>Feedback & Review</Text>
        <View style={styles.ratingContainer}>
          <Icon style={styles.star} name="star" />
          <Text style={styles.rating}>{detail.rating}</Text>
          <Text style={styles.ratingProps}>/ 5</Text>
        </View>
        <View style={styles.allReviewContainer}>
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewName}>Speedwagon</Text>
            <View style={styles.reviewStarContainer}>
              <Icon name='star' style={styles.reviewStar} />
              <Icon name='star' style={styles.reviewStar}/>
              <Icon name='star' style={styles.reviewStar}/>
              <Icon name='star' style={styles.reviewStar}/>
              <Icon name='star' style={styles.reviewStar}/>
            </View>
            <Text style={styles.reviewComment}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet id porttitor est neque libero maecenas dolor.
            </Text>
          </View>
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewName}>Dio Brando</Text>
            <View style={styles.reviewStarContainer}>
              <Icon name='star' style={styles.reviewStar} />
              <Icon name='star' style={styles.reviewStar}/>
            </View>
            <Text style={styles.reviewComment}>
            <Text style={styles.reviewComment}>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Et netus et malesuada fames ac turpis. Ut tellus elementum sagittis vitae. Etiam non quam lacus suspendisse faucibus interdum posuere. 
            </Text>
            </Text>
          </View>
            <Text style={styles.slotText}>{detail.slot} Slot Left!</Text>
          <View style={styles.allButtonContainer}>
            <TouchableOpacity style={styles.buttonContainer1}>
              <Text style={styles.buttonText1}>
                Player List
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer2}>
              <Text style={styles.buttonText2}>
                Book!
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
      <BottomTabs />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
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
    color: '#fff',
  },
  barsIcon: {
    fontSize: 24,
    paddingRight: 20,
    color: '#fff',
  },
  arrowIcon: {
    fontSize: 24,
    paddingLeft: 20,
    color: '#fff',
  },
  headerImageContainer: {
    backgroundColor: 'black',
    height: 200,
  },
  headerImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  titleText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: '#53c9c2',
  },
  priceText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    alignSelf: 'center',
    color: '#fff',
  },
  subText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#fff',
    marginHorizontal: 10,
    marginTop: 20,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: 'justify',
  },
  star: {
    color: '#ffcb74',
    alignSelf: 'center',
    fontSize: 32,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#53c9c2',
    textAlign: 'justify',
    alignSelf: 'center',
    marginHorizontal: 10,
    marginTop: -6,
    //rating fontSize 20, star fontSize 32, selisih 12 dibagi 2, margin -6
  },
  ratingProps: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'justify',
    alignSelf: 'center',
    marginTop: -6,
  },
  allReviewContainer: {
    gap: 10,
    marginBottom: 10,
  },
  reviewContainer: {
    backgroundColor: '#545454',
    marginHorizontal: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  reviewName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  reviewStarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  reviewStar: {
    color: '#ffcb74',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  reviewComment: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#fff',
    marginVertical: 10,
    textAlign: 'justify',
  },
  allButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  buttonContainer1: {
    backgroundColor: '#545454',
    borderRadius: 5,
    flex: 1,
    margin: 5,
    paddingVertical: 5,
    alignItems: 'center',
  },
  buttonContainer2: {
    backgroundColor: '#53c9c2',
    borderRadius: 5,
    flex: 1,
    margin: 5,
    alignItems: 'center',
    paddingVertical: 5,
  },
  buttonText1: {
    color: '#53c9c2',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  buttonText2: {
    color: '#313131',
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
  },
  scrollViewContainer: {
    marginBottom: 70,
  },
  slotText: {
    fontFamily: 'Montserrat-Regular',
    color: '#c87f6d',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10,
    textAlign: 'center',
  }
})

export default DetailScreen
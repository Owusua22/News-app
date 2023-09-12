import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import color from '../Shared/color';
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadLineList from '../Components/Home/HeadLineList';
import globalApi from '../Services/globalApi';
import { useNavigation } from '@react-navigation/native';

/**
 * Retrieves the news by the selected category from the global API and sets the news list.
 *
 * @param {string} category - The selected category.
 * @return {Promise<void>} No return value.
 */
const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const navigation = useNavigation();
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    // Fetch latest news by default
    getNewsByCategory('latest');
  }, []);

  /**
   * Retrieves the news by the selected category from the global API and sets the news list.
   *
   * @param {string} category - The selected category.
   * @return {Promise<void>} No return value.
   */
  const getNewsByCategory = async (category) => {
    setLoading(true)
    const result = (await globalApi.getByCategory(category)).data;
    setNewsList(result.articles);
    setLoading(false)
  };

  return (
  
    <View style={{ backgroundColor: color.white }} >
       
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.appName}>Sally News App</Text>
        <Ionicons name="notifications" size={25} color="black" />
      </View>
      <CategoryTextSlider selectCategory={(category) => getNewsByCategory(category)} />
      {loading? <ActivityIndicator 
      style={{marginTop:Dimensions.get("screen").height*0.40}}
      size={"large"} color={color.primary}/>:
        <ScrollView style={{ backgroundColor: color.white }}>
      {/* topHeadlineSlider */}
      <TopHeadlineSlider newsList={newsList} navigation={navigation} />
      <HeadLineList newsList={newsList} />
      </ScrollView>
}
    </View>
  
  );
};

const styles = StyleSheet.create({
  appName: {
    fontSize: 35,
    fontWeight: 'bold',
    color: color.primary,
  },
});

export default Home;

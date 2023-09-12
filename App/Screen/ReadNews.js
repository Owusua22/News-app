import React, { useEffect } from 'react';
import { View, Text, Image, Share, TouchableOpacity } from 'react-native';
import color from '../Shared/color';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

/**
 * Renders the ReadNews component.
 *
 * @return {ReactNode} The rendered ReadNews component.
 */
function ReadNews() {
  const { news } = useRoute().params; // Destructure the news object from params
  const navigation = useNavigation();

  useEffect(() => {
    
  }, []);

   /**
   * Shares news by invoking the Share API.
   *
   * @param {object} news - The news object containing the title and url.
   * @return {void} This function does not return anything.
   */
  const shareNews = () => {
    Share.share({
      message: news.title + '\nRead More: ' + news.url,
    });
  };

   /**
   * Opens the browser and navigates to the specified URL.
   *
   * @param {string} url - The URL to navigate to.
   */
  const openBrowser = () => {
    WebBrowser.openBrowserAsync(news.url);
  };

  return (
  
    <View style={{ backgroundColor: color.white, flex: 1 }}>
      <View
        style={{
          marginBottom: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={shareNews}>
          <AntDesign name="sharealt" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }} // Change "url" to "uri"
        style={{ height: 300, width: '100%', borderRadius: 20 }}
      />

      <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 16 }}>{news.title}</Text>
      {news.source && news.source.name && (
        <Text style={{ marginTop: 10, color: color.primary, fontSize: 16 }}>{news.source.name}</Text>
      )}
      <Text style={{ marginTop: 10, color: color.gray, fontSize: 16, lineHeight: 30 }}>{news.description}</Text>

      <TouchableOpacity onPress={openBrowser}>
        <Text style={{ marginTop: 30, color: color.primary, fontSize: 16, fontWeight: 'bold' }}>Read More</Text>
      </TouchableOpacity>
    </View>
    
  );
}

export default ReadNews;

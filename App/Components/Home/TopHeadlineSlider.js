import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import color from '../../Shared/color';

// * Retrieves the top headline from the global API and sets the news list.
// *
// * @returns {Promise<void>} No return value.
function TopHeadlineSlider({ newsList, navigation }) {

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={newsList}
        
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReadNews", { news: item })} // Pass the item object to the "ReadNews" screen
            style={{ width: Dimensions.get("screen").width * 0.80, marginRight: 15 }}>
            <Image
              source={{ uri: item.urlToImage }}
              style={{ height: Dimensions.get("screen").width * 0.77, borderRadius: 20 }}
            />
            <Text numberOfLines={2} style={{ marginTop: 20, fontSize: 24, fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ marginTop: 5, color: color.primary }}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default TopHeadlineSlider;

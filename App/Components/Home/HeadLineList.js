import React from 'react';
import { TouchableOpacity, Image, FlatList, Text, View } from 'react-native';
import color from '../../Shared/color';
import { useNavigation} from '@react-navigation/native';


/**
 * Renders a list of news headlines.
 *
 * @param {object} newsList - The list of news items to display.
 * @return {JSX.Element} The rendered component.
 */
function HeadLineList({ newsList }) {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <View style={{ height: 2, backgroundColor: color.lightGray, marginTop: 10, marginLeft: -20 }} />
            <TouchableOpacity 
             onPress={() => navigation.navigate("ReadNews", { news: item })}
            style={{ marginTop: 15, display: "flex", flexDirection: "row" }}>
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: 130, height: 130, borderRadius: 20 }}
              />
              <View style={{ marginRight: 130, marginLeft: 10 }}>
                <Text numberOfLines={3} style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                <Text style={{ color: color.primary, marginTop: 7 }}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default HeadLineList;

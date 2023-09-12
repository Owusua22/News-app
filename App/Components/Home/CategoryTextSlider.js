import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import color from '../../Shared/color';

/**
 * Renders a category text slider component.
 *
 * @param {function} selectCategory - A callback function to handle category selection.
 * @return {JSX.Element} The rendered category text slider component.
 */
const CategoryTextSlider = ({selectCategory}) => {
    const [active,setActive] = useState(1)
    const categoryList =[
        {
            id:1,
            name:"Latest"
        },
        {
            id:2,
            name:"Business"
        },
        {
            id:3,
            name:"Sports"
        },
        {
            id:4,
            name:"Life"
        },
        {
            id:5,
            name:"Sports"
        },
        {
            id:6,
            name:"Health"
        }

    ]
     /**
     * Handles the click event when a category is clicked.
     *
     * @param {number} id - The identifier of the clicked category.
     */
    onCategoryClick=(id)=>{
        setActive(id)
    }
    
    return (
        <View style={{marginTop: 15}}>
           
          <FlatList
          data={categoryList}
          horizontal={true}
          
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{onCategoryClick(item.id)
            selectCategory(item.name)}}>
                <Text style={item.id ==active?styles.selectText
                    :styles.unselectText}>{item.name}</Text>
        
            </TouchableOpacity>
    )}/>
        </View>
    );
    
}
const styles = StyleSheet.create({
    unselectText:{
        marginRight: 17,
        fontSize: 20, 
        fontWeight:"bold",
        color:color.gray
    },
    selectText:{
        marginRight: 17,
        fontSize: 20, 
        fontWeight:"bold",
        color:color.primary
    }
})

export default CategoryTextSlider;

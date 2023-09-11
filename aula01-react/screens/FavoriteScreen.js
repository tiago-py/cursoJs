import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import { StatusBar } from 'expo-status-bar';
import { Favorite, categories, coffeeFav } from '../constants';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/coffeeCard';
import { BellIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />

      <Image 
        source={require('../assets/images/beansBackground1.png')} 
        style={{height: height}} 
        className="w-full absolute -top-5 opacity-10" />
      <SafeAreaView className={ios? '-mb-8': ''}>
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center">
          <Image source={require('../assets/images/avatar.png')} 
            className="h-9 w-9 rounded-full" />
          
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className="font-semibold text-base">
              New York, NYC
            </Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>
        {/* categories */}
        <View className="px-5 mt-6">
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Favorite}
            keyExtractor={item=> item.id}
            className="overflow-visible mb-3"
            renderItem={({item})=>{
              isActive = item.id==activeCategory;
              let activeTextClass = isActive? 'text-white': 'text-gray-700';
              return (
                <TouchableOpacity 
                onPress={()=> setActiveCategory(item.id)}
                style={{backgroundColor: isActive? themeColors.bgLight: 'rgba(0,0,0,0.07)'}} 
                className="p-4 px-5 mr-2 rounded-full shadow">
                  <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
          
      </SafeAreaView>

      {/* coffee cards */}
      <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''} mb-3`}>
        <View>
          <Carousel
            containerCustomStyle={{overflow: 'visible',height:400}}
            data={coffeeFav}
            renderItem={({item})=> <CoffeeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width*0.63}
            slideStyle={{display: 'flex', alignItems: 'center'}}
          />
        </View>
        
      </View>
      
      
    </View>
    
  )

}

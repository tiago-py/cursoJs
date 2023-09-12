import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
export const Tab = createBottomTabNavigator();
export const tabNavigator = ()=>{
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => menuIcons(route, focused),
            tabBarStyle: {
              marginBottom: 10,
              height: 55,
              alignItems: 'center',
              
              borderRadius: 80,
              marginHorizontal: 20,
              backgroundColor: themeColors.bgLight,
        
            },
            tabBarItemStyle: {
              marginTop: ios? 30: 0,
              
            }
          })}
          
          >
          <Tab.Screen name="home" component={HomeScreen} />
          <Tab.Screen name="favourite" component={FavoriteScreen} />
          <Tab.Screen name="cart" component={CartScreen} />
        </Tab.Navigator>
    )
}

export const menuIcons = (route, focused)=> {
  let icon;
  

  if (route.name === 'home') {
    icon =  focused? <HomeSolid size="20" color={themeColors.bgLight} /> : <HomeOutline size="10" strokeWidth={2} color="white" />
  } else if (route.name === 'favourite') {
    icon =  focused? <HeartSolid size="20" color={themeColors.bgLight}/> : <HeartOutline size="10" strokeWidth={2} color="white" />
  }else if(route.name==='cart'){
    icon =  focused? <BagSolid size="20" color={themeColors.bgLight} /> : <BagOutline size="10" strokeWidth={2} color="white" />
  }

  
  let buttonClass = focused? "bg-white": "";
  return (
    <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
      {icon}
    </View>
  )
}


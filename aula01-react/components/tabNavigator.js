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
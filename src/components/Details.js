import React from 'react';
import { Text,TouchableOpacity,View,Image, ScrollView}from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../database/items';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


const Details = ({route,navigation})=>{

  const{ 
    name,
    price,
    image,
    size,
    crust,
    delivery,
    ingredients,
    isTopOfTheWeek
  } = route.params;
  return(
    <View style={{
      width:'100%',
      height:'100%',
      backgroundColor: COLORS.white,
      position: 'relative'
    }}>

    <View style={{
      padding:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
         }}>
      <TouchableOpacity
      onPress={()=> navigation.goBack()}
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        justifyContent:'center',
        alignItems:'center',
      }}
      >
        <FontAwesome name="angle-left" style={{
          fontSize: 16, color: COLORS.black,
        }}/>
      </TouchableOpacity>
      <View style={{
        width:40,
         height:40,
         borderRadius:10,
         backgroundColor:COLORS.accentPink,
         opacity: isTopOfTheWeek ? 1 : 0.5,
         justifyContent:'center',
         alignItems:'center',
         }}>
          <AntDesign name="star" style={{fontSize:15,color:COLORS.white}}/>
         </View>
    </View>
    <Text style={{
      fontSize:38,
      color:COLORS.black,
      fontWeight:'800',
      maxWidth:310,
    }}>
      {name}
    </Text>
    <View style={{
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal: 20,
    }}>
      <Text style={{
        fontSize:20,
        color:COLORS.accentPink,
        fontWeight:'900',
        paddingRight: 5,
        paddingBottom: 8,
      }}>
        CFA
      </Text>
      <Text style={{
        fontSize: 20,
        color:COLORS.accentPink,
        fontWeight:'900',
      }}>
        {price}
      </Text>
    </View>
    <View style={{
      flexDirection:'row',
      maxHeight:300,
       width:'100%',
        alignItems:'center'
        }}>
          <View style={{paddingHorizontal:20}}>
            <View style={{paddingVertical:20}}>
                <Text style={{
                  fontSize:12,
                  color:COLORS.black,
                  opacity:0.5,
                }}>
                  size
                </Text>
                <Text style={{
                  fontSize:18,
                  color:COLORS.black,
                  fontWeight:'600',

                }}>
                  {size}
                </Text>
            </View>
            <View style={{paddingVertical:20}}>
                <Text style={{
                  fontSize:12,
                  color:COLORS.black,
                  opacity:0.5,
                }}>
                  crust
                </Text>
                <Text style={{
                  fontSize:18,
                  color:COLORS.black,
                  fontWeight:'600',

                }}>
                  {crust}
                </Text>
            </View>
            <View style={{paddingVertical:20}}>
                <Text style={{
                  fontSize:12,
                  color:COLORS.black,
                  opacity:0.5,
                }}>
                  delivery
                </Text>
                <Text style={{
                  fontSize:18,
                  color:COLORS.black,
                  fontWeight:'600',

                }}>
                  {delivery} min
                </Text>
            </View>
          </View>
          <View style={{
            width: 380,
            height: 380,
          }}>
            <Image source={image} style={{
              width:'100%', height:'100%', resizeMode:'contain'
            }}/>
          </View>
    </View>
    <Text style={{
      paddingTop:20,
      paddingHorizontal:20,
      fontSize:20,
      fontWeight:'700',
      color:COLORS.black
    }}>
      Ingredients
    </Text>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {
        ingredients.map((data,index)=>{
          return(
            <View key={index} style={{
              margin:12,
              width:80,
              height:80,
              borderRadius:20,
              backgroundColor: COLORS.white,
              elevation:5,
            }}>
                <Image source={data} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
            </View>
          )
        })
      }
    </ScrollView>
    <View style={{
      position:'absolute',
      bottom:0,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <TouchableOpacity onPress={()=> navigation.goBack()}
      style={{
        width:'90%',
        height:80,
        backgroundColor:COLORS.accentPink,
        borderTopRightRadius:20,
        borderTopLeftRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
      }}>
        <Text style={{
          fontSize:16,
          fontWeight:'bold',
          color:COLORS.white,
          letterSpacing:1,
          marginRight:5,
        }}>
          Place an Order
        </Text>
        <Entypo name="chevron-right"
        style={{fontSize:16,
        color:COLORS.white,
        }}
        />
      </TouchableOpacity>
    </View>
    </View>
  );
};
export default Details;
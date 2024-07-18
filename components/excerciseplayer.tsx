import { View, Text , Image , StyleSheet} from 'react-native'
import React from 'react'

interface props{
  image: any;
  name: string;
  description: string|string[];
}


const Excerciseplayer = ({image , name ,description}:props) => {
  return (
    <View style={style.container}>
      <View >
      {typeof image =='string'&&<Image style={style.image} source={{uri:image}}></Image>}
      {typeof image != 'string' &&   <Image style={style.image} source={image}></Image>}
      </View>
      <View style={style.textcont}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.description}>{description.slice(0,2)}</Text>
      </View>
    </View>
  )
}


const style = StyleSheet.create({

  container:{
   
    
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    gap:20
  },
  image:{
    width: 200,
    height:200,
  },
  textcont:{
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10,
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
    textTransform:'capitalize',
    padding:10,
  },
  description:{
    color:'gray',
    textAlign:'center',
    fontWeight:'semibold'
  }

})

export default Excerciseplayer
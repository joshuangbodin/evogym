export const white = require('../assets/images/avatars/white.jpg')
export const white1 = require('../assets/images/avatars/white1.jpg')
export const black = require('../assets/images/avatars/black.jpg')
export const black1 = require('../assets/images/avatars/black1.jpg')
export const teen = require('../assets/images/avatars/whiteteen.jpg')


export const avatars =[{avatarimg:white , name:'white'} , {avatarimg:white1 ,  name:'white1'} , {avatarimg:black , name:'black'} , {avatarimg:black1 , name:'black1'} , {avatarimg:teen , name:'teen'}]


export const getImgByName = (name:string)=>{
  var img =  name == 'white' ? white: name == 'white1'? white1:name == 'black'?black:name == 'black1'?black1:teen
  return img
}
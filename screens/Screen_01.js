import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App({navigation}){
    return(
        <View style={StyleSheet.container}>
            <View style={StyleSheet.style1}>
                <Text style={{
                    marginTop:50,
                    marginLeft:50,
                    color:'green',
                    fontSize:30,
                    fontWeight:'bold',
                }}>Order your favorite!

                </Text>

            </View>
            <View style={StyleSheet.style2}>
                <Image source={require('../assets/Data/Image_96.png')}
                    style={{width:150, height:150, marginLeft:215, marginTop:50}}
                />
                <Image source={require('../assets/Data/Image 95.png')}
                    style={{width:150, height:150, marginLeft:20, marginTop:-25,}}
                />
                <Image source={require('../assets/Data/Image 97.png')}
                    style={{width:150, height:150, marginLeft:200, marginTop:30,}}
                />

            </View>
            <View style={StyleSheet.style3}>
                <TouchableOpacity style={{
                    backgroundColor:'green',
                    borderRadius:40,
                    width:240,
                    height:50,
                    justifyContent:'center',
                    alignItems:'center',
                    marginLeft: 70,
                    marginTop:100,
                }}
                onPress={()=>{navigation.navigate("Screen_02")}}
                >
                    <Text style={{fontSize:20, color:'white'}}>Get Started</Text>

                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    style1:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        width: '100%',
    },
    style2:{
        flex:3,
        backgroundColor:'#fff',
    },
    style3:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
});
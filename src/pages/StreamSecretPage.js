import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import BroadcastingPage from './BroadcastingPage'

const StreamSecretPage = () => {
    const [ingestURL, setIngestURL] = useState('');
    const [streamKey, setStreamKey] = useState('');
    const [outputURL, setOutputURL] = useState('');

    const mergeURLFunc = ()=>{
        if(ingestURL && streamKey){
            setOutputURL(ingestURL+streamKey)
        } else {
            alert('Fill details');
        }        
    }

    const secretComp = ()=>{
        return (
            <View style={styles.container}>
            <View style={styles.childContainer}>
                <Text style={styles.labelText}>Server URL</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Server URL"
                    placeholderTextColor="#929391"
                    value={ingestURL}
                    onChangeText={setIngestURL}
                />
            </View>
            <View style={styles.childContainer}>
                <Text style={styles.labelText}>Secret</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Secret Key"
                    placeholderTextColor="#929391"
                    value={streamKey}
                    onChangeText={setStreamKey}
                />
            </View>
            <View style={styles.btnContainer}>
                <Pressable onPress={mergeURLFunc} style={{width:'100%'}}>
                    <Text style={styles.btnTextStyle}>Go</Text>
                </Pressable>
            </View>
        </View>
        )
    }

    const renderFunc = () =>{
        // const detailsFilled = ingestURL && streamKey;
        // return !detailsFilled?

        if(outputURL){
            return <BroadcastingPage outputURL={outputURL} setOutputURL={setOutputURL}/>
        } else {
            return secretComp();
        }
    }

    return renderFunc();
}

export default StreamSecretPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#191838",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // paddingLeft:20
    },
    childContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        // height:100,
        width:'80%',
    },
    labelText:{
        color:'#AAAE72',
        paddingBottom:5,
        paddingTop:15,
        paddingLeft:15,
        fontWeight:'bold',
        fontSize:15
    },
    textInput:{
        width:'100%',
        color:'#6E9CD1',
        borderWidth:0.5,
        borderColor:'#99A3A4', //#99A3A4//#9999a2
        borderRadius:300,
        paddingLeft:15
    },
    btnContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // height:100,
        width:'20%',
        backgroundColor:'#0A3D02',
        marginTop:18,
        padding:5,
        borderRadius:100
    },
    btnTextStyle:{
        color:'#D4F1EC',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },
})

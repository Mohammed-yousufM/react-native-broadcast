import React, {useEffect, useRef, useState} from 'react'
import {View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import { NodeCameraView } from 'react-native-nodemediaclient';

const BroadcastingPage = ({outputURL, setOutputURL}) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const nodeCamRef = useRef();
    const [isLive, setIsLive] = useState(false)
    // const outputURL = 'rtmps://785e05032bc0.global-contribute.live-video.net:443/app/sk_us-east-1_XId6XEUMI5Wx_iXdwRwRtPYK7gU5V4kJ42XYo02fqnK'
    const options={
        camera:{ cameraId: 0, cameraFrontMirror: true },
        audio:{ bitrate: 32000, profile: 1, samplerate: 44100 },
        video:{ preset: 1, bitrate: 500000, profile: 1, fps: 15, videoFrontMirror: false },
    }

    const goLive = async()=>{
        try {
            await nodeCamRef?.current.start()
            console.log('Streaming');
            setIsLive(true);            
          } catch (error) {
            setIsLive(flase)
            console.log(error, 'cant stream');
            alert("Couldn't start stream")
          }
    };

    const endLive = async() =>{
        try {
            await nodeCamRef?.current.stop()
            console.log('End Stream');
            setIsLive(false);
            setOutputURL('')            
            // (false);
          } catch (error) {
            setIsLive(true)
            console.log(error, 'cant End stream');
            alert("Couldn't End Stream")
          }
    };

    const switchCamFunc = async()=>{
        try {
            nodeCamRef.current.switchCamera();
            // setOutputURL('')
        } catch (error) {
            console.log(error, 'cant Switch Camera');
            alert("Couldn't Switch Camera")
        }
    }

    useEffect(()=>{
        return(()=>{
            endLive();
        })
    },[])


    return (
        <View style={styles.container}>
            <NodeCameraView
            style={[styles.videoStyles,{height:windowHeight, width:windowWidth}]}
            ref={nodeCamRef}
            outputUrl={outputURL}
            camera={options.camera}
            audio={options.audio}
            video={options.video}
            smoothSkinLevel={3}
            autopreview={true}
            />
            {
                <View style={styles.live}>
                    {
                        isLive ||
                        <Pressable onPress={goLive} style={styles.pressableS}>
                        <Text style={styles.btnTextStyle}>Go Live</Text>
                        </Pressable>
                    }
                    {
                        isLive &&
                        <View style={styles.isLiveContainer}>
                            <View style={styles.isLiveDot}/>
                            <Text style={styles.btnTextStyle}>Live</Text>
                        </View>
                    }
                </View>
            }
            {
                isLive &&
                <View style={styles.end}>
                    <Pressable onPress={endLive} style={styles.pressableS}>
                    <Text style={styles.btnTextStyle}>End Live</Text>
                    </Pressable>                    
                </View>
            }

            <View style={[styles.switchCam, {position:'absolute', top:windowHeight/2, right:5}]}>
                <Pressable onPress={switchCamFunc} style={styles.pressableS}>
                <Text style={styles.btnTextStyle}>Switch Cam</Text>
                </Pressable>                    
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    videoStyles :{
        // height:windowHeight,
        // width:windowWidth
    },
    container:{
        flex:1,
        position:'relative'
    },
    live:{
        position:'absolute',
        top:8,
        left:5,
        backgroundColor:'#0DAF42',
        padding:5,
        borderRadius:10,
    },
    end:{
        position:'absolute',
        top:8,
        right:5,
        backgroundColor:"#F15917",
        padding:5,
        borderRadius:10
    },
    isLiveContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    isLiveDot:{
        width:10,
        height:10,
        backgroundColor:'#F15917',
        borderRadius:5,
        marginRight:2
    },
    switchCam:{
        backgroundColor:"#F15917",
        padding:5,
        borderRadius:10
    },
    btnTextStyle:{
        color:'#D4F1EC',
        fontSize:15
    },
    pressableS:{
        width:'100%'
    }
})

export default BroadcastingPage

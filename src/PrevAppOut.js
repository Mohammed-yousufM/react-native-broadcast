// import React, {useRef, useState, useEffect} from 'react'
// import { View, Text, SafeAreaView, PermissionsAndroid, Button } from 'react-native';
// import { NodeCameraView } from 'react-native-nodemediaclient';

// const App = () => {
//   const nodeCamRef = useRef();
//   const [permissionStat, setPermissionStat]= useState(false)

//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: "Cool Photo App Camera Permission",
//           message:
//             "Cool Photo App needs access to your camera " +
//             "so you can take awesome pictures.",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK"
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         setPermissionStat(true)
//         console.log("You can use the camera", granted);
//       } else {
//         setPermissionStat(false)
//         console.log("Camera permission denied");
//       }
//     } catch (err) {
//       setPermissionStat(false)
//       console.warn(err);
//     }
//   };

//   // useEffect(() => {
//   //  if(permissionStat){
//   //   console.log('we can start stream');
//   //   nodeCamRef.current.start();
//   // }
//   // // nodeCamRef.start();
//   // }, [permissionStat])

//   return (
//     <SafeAreaView>
//       <Text>This is app. Lets Build. imported</Text>
//       <Button title='for perm' onPress={requestCameraPermission}/>
//       <NodeCameraView
//           style={{
//           // position: 'absolute',
//           // top: 0,
//           // left: 0,
//           height:100,
//           width:100
//         }}
//           ref={nodeCamRef}
//           outputUrl={'rtmps://785e05032bc0.global-contribute.live-video.net:443/app/sk_us-east-1_XId6XEUMI5Wx_iXdwRwRtPYK7gU5V4kJ42XYo02fqnK'}
//           camera={{ cameraId: 1, cameraFrontMirror: true }}
//           audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
//           video={{
//             preset: 1,
//             bitrate: 500000,
//             profile: 1,
//             fps: 15,
//             videoFrontMirror: false,
//           }}
//           smoothSkinLevel={3}
//           autopreview={true}
//         />
//         <Button title="start stream" onPress={()=>{
//           try {
//             nodeCamRef?.current.start()
            
//           } catch (error) {
//             console.log(error, 'cant stream')
//           }
          
//           }}/>
//         <Text>HI</Text>
//         <Button title="stop stream" onPress={()=>nodeCamRef?.current.stop()}/>
//     </SafeAreaView>
//   )
// }

// export default App

// // import React, { Component } from 'react'
// // import { Text, View, SafeAreaView } from 'react-native'
// // import { NodeCameraView as ShitMan} from 'react-native-nodemediaclient';


// // export class App extends Component {
// //   render() {
// //     return (
// //       <SafeAreaView>
// //         <Text> textInComponent </Text>
// //         <ShitMan
// //            style={{
// //             position: 'absolute',
// //             top: 0,
// //             left: 0,
// //             height:100,
// //             width:100
// //           }}
// //             // ref={nodeCamRef}
// //             outputUrl={'outputUrl'}
// //             camera={{ cameraId: 1, cameraFrontMirror: true }}
// //             audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
// //             video={{
// //               preset: 1,
// //               bitrate: 500000,
// //               profile: 1,
// //               fps: 15,
// //               videoFrontMirror: false,
// //             }}
// //             smoothSkinLevel={3}
// //             autopreview={false}      
// //         />
// //       </SafeAreaView>
// //     )
// //   }
// // }

// // export default App

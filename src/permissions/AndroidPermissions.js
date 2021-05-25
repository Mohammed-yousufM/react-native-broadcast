import React, {useEffect} from 'react';
import {PermissionsAndroid, SafeAreaView, Text} from 'react-native';

const AndroidPermissions = ({permissionStat, setPermissionStat})=>{
    const requestCameraPermission = async () => {
        try {
          const result = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
          ]);
          if ('granted' === result["android.permission.CAMERA"] && 'granted'===result["android.permission.RECORD_AUDIO"]) {
            setPermissionStat(true)
            console.log("You can use the camera", result);
          } else {
            setPermissionStat(false)
            console.log("Camera permission denied");
          }
          // console.log(granted)
        } catch (err) {
          setPermissionStat(false)
          console.warn(err);
        }
      };

    useEffect(()=>{
        permissionStat || requestCameraPermission();
    },[])


    return <SafeAreaView><Text>App Needs Camera Access To Broadcast Video</Text></SafeAreaView>
};

export default AndroidPermissions;


// const granted = await PermissionsAndroid.requestMultiple(
//   PermissionsAndroid.PERMISSIONS.CAMERA,
//   {
//     title: "Together Broadcast App Camera Permission",
//     message:
//       "Together Broadcast App needs access to your camera " +
//       "so you can take awesome video stream.",
//     buttonNeutral: "Ask Me Later",
//     buttonNegative: "Cancel",
//     buttonPositive: "OK"
//   }
// );
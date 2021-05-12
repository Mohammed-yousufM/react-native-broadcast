import React, {useEffect} from 'react';
import {PermissionsAndroid, SafeAreaView, Text} from 'react-native';

const AndroidPermissions = ({permissionStat, setPermissionStat})=>{
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Together Broadcast App Camera Permission",
              message:
                "Together Broadcast App needs access to your camera " +
                "so you can take awesome video stream.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setPermissionStat(true)
            console.log("You can use the camera", granted);
          } else {
            setPermissionStat(false)
            console.log("Camera permission denied");
          }
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
import React, {useState} from 'react'
import { View, Text, SafeAreaView, Platform } from 'react-native'
import BroadcastingPage from './src/pages/BroadcastingPage'
import AndroidPermissions from './src/permissions/AndroidPermissions'
import IosPermissions from './src/permissions/IosPermissions'

import StreamSecretPage from './src/pages/StreamSecretPage'

const App = () => {
  const [permissionStat, setPermissionStat]= useState(false);

  const renderFunc = () =>{
   if(permissionStat){
    //  return <BroadcastingPage setPermissionStat={setPermissionStat}/>
    return <StreamSecretPage/>
   } else { //here check if the mobile is android or iOS
      if(Platform.OS==='android'){
        return <AndroidPermissions permissionStat={permissionStat} setPermissionStat={setPermissionStat}/>
      } else if (Platform.OS==='ios'){
        return <IosPermissions permissionStat={permissionStat} setPermissionStat={setPermissionStat}/>
      }
   }
  };

  

  return (
    <SafeAreaView style={{flex:1}}>
      {renderFunc()}
    </SafeAreaView>
  )
}

export default App

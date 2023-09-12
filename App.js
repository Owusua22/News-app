
import { SafeAreaView, StyleSheet } from 'react-native'
import HomeNavigator from './App/Navigations/HomeNavigator';
// import Home from './App/Screen/Home';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      

         <HomeNavigator/>  
      
{/* <Home/>
    */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    padding:30

   
  },
});

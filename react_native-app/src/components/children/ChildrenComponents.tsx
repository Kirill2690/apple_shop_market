import {StyleSheet, Text, View} from "react-native";
import {VStack} from "../vstack/VStack";
import {Box} from "../box/Box";
import {HStack} from "../hstack/HStack";
import {ZStack} from "../zstack/ZStack";

export const ChildrenComponents=()=>{
    return (
        <View style={styles.container}>
            <VStack>
                <Box bgr={'#00FF00'} width={100}>
                <Text>Children</Text>
                </Box>
                    <HStack>
                        <Box bgr={'#800080'} width={100}/>
                        <Box bgr={'#800080'} width={100}/>
                        <Box bgr={'#800080'} width={100}/>
                        <Box bgr={'#800080'} width={100}/>
                        <Box bgr={'#800080'} width={100}/>
                        <Box bgr={'#800080'} width={100}/>
                    </HStack>
                <HStack>
                    <Box bgr={'#800080'} width={100}/>
                    <Box bgr={'#800080'} width={100}/>
                    <Box bgr={'#800080'} width={100}/>
                    <Box bgr={'#800080'} width={100}/>
                </HStack>

                <ZStack reverse>
                    <Box bgr={'#FFFF00'} mt={10} ml={10} width={100}/>
                    <Box bgr={'#FFFF00'} mt={20} ml={20} width={100}/>
                    <Box bgr={'#FFFF00'} mt={30} ml={30} width={100}/>
                    <Box bgr={'#FFFF00'} mt={40} ml={40} width={100}/>

                </ZStack>
            </VStack>
        </View>
    )
}





const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#cecece',

    }
})
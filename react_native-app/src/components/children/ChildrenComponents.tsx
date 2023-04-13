import {StyleSheet, Text, View} from "react-native";
import {VStack} from "../vstack/VStack";
import {Box} from "../box/Box";
import {HStack} from "../hstack/HStack";

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
                    </HStack>
                <Box bgr={'#FF0000'} width={100}/>
            </VStack>
        </View>
    )
}





const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#cecece'
    }
})
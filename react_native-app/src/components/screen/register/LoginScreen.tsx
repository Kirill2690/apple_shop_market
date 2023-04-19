import {Ionicons} from '@expo/vector-icons';
import {Box, Button, Heading, Icon, Image, Input, VStack} from "native-base";
import {Colors} from "../../../constants/colors";
import {useState} from "react";
import {useAppNavigation} from "../../../hooks/useAppNavigation";


interface LoginPropsType {

}

export const LoginScreen = () => {
    const navigation = useAppNavigation()
    const [showPassword, setShowPassword] = useState(false)
    const onClickShowPassword = () => setShowPassword(!showPassword)
    return (
        <Box flex={3} bg={Colors.black}>
            <Image
                flex={1}
                alt={'Logo'}
                resizeMode={"cover"}
                size={"lg"}
                w='full'
                source={require('../../../../assets/apple-logo.png')}/>

            <Box w='full'
                 h='full'
                 position='absolute'
                 top={200}
                 px={120}
                 padding={20}
                 justifyContent={'space-evenly'}

            >
                {/*  <Heading paddingBottom={1} color={Colors.white}>Login</Heading>*/}
                <VStack space={3}>
                    <Input InputLeftElement={<Ionicons name="ios-mail" style={{paddingLeft: 10}} size={20}
                                                       color={Colors.purple}/>}
                           variant={"outline"}
                           width='200'
                           placeholder={'enter your email'}
                           color={Colors.black}
                           fontSize={14}
                           bgColor={Colors.white}
                           borderRadius={20}
                    />

                    <Input
                        InputLeftElement={<Ionicons onPress={onClickShowPassword} name="eye" style={{paddingLeft: 10}}
                                                    size={20}
                                                    color={Colors.purple}/>}
                        variant={"outline"}
                        width='200'
                        type={'password'}
                        placeholder={'enter your password'}
                        color={Colors.black}
                        fontSize={14}
                        bgColor={Colors.white}
                        borderRadius={20}


                    />

                </VStack>

                    <Button _pressed={{
                        bg: Colors.purple,

                    }}
                            width='200'
                            borderRadius={50}
                            bg={Colors.purple}
                            onPress={()=>navigation.navigate('Product')}>
                        Login
                    </Button>


            </Box>
        </Box>

    )
};



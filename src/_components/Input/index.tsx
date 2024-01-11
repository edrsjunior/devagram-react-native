import { Image, ImageSourcePropType, TextInput, View } from "react-native"
import { IInput } from "./types"
import styles from "./styles";

const Input = (props: IInput) => {
    return(
        <View style={styles.containerInput}>
            <View style={styles.row}>
                {props.icone &&
                    <Image source={props.icone}></Image>
                }
                
                <TextInput 
                placeholder={props.placeholder}
                style={[styles.input, props.style]}
                secureTextEntry={props.secured}
                value={props.value}
                onChangeText={props.onChangeText}
                autoCapitalize="none"
                >

                </TextInput>
            </View>
        </View>
    )
}

export default Input;
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import { IButton } from "./types";
import {colors} from "../../../app.json"
import styles from "./styles";

const Button = (props: IButton) => {
    return (
        <View style={styles.containerButton}>
             <TouchableOpacity 
            onPress={props.onPress}
            disabled={props.disable}
            style={props.disable ? [styles.button,props.style,styles.buttonDisable] : [styles.button,props.style]}
            >
                {props.loading ?
                    <ActivityIndicator size={30} color={colors.whiteColor}/>
                    :
                    <Text style={styles.text}>{props.placeholder}</Text>
            }
            
        </TouchableOpacity>

        </View>
       
    )
}

export default Button;
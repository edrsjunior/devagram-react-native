import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../app.json'

const {height, width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    containerButton: {
        marginTop: height /20,

    },
    button: {
        width: width/1.3,
        height: height/15,
        backgroundColor: colors.primaryColor,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        
    },

    buttonDisable:{
        backgroundColor: colors.grayColor03
    },

    text: {
        color: colors.whiteColor,
        fontFamily: "Inter_600SemiBold",
        
    }
});

export default styles;
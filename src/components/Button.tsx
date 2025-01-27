import { TouchableOpacity, Text } from "react-native";

type Props = {
    onPress: any;
    text: string;
}

const Button = ({onPress, text}: Props) => {

    return (
        <TouchableOpacity
        onPress={onPress}
        className="border-blue-600 border-2 rounded-md p-2 self-center"
        >
            <Text className="text-[16px] font-poppins font-semibold">{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;
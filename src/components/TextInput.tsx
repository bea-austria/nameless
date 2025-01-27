import { View, TextInput as RNTextInput, Text } from "react-native";
import { getIn, useFormikContext } from "formik";

type Props = {
    name: string;
    isSecured?: boolean
}

const TextInput: React.FC<Props> = ({name, isSecured}: Props) => {
    const  { values, errors, touched, setFieldValue } = useFormikContext();

    const value = getIn(values, name);
    const error = getIn(errors, name);
    const isTouched = getIn(touched, name);

    const handleChange = (text: string) => {
        setFieldValue(name, text)
    };

    return (
        <View className="w-full">
            <RNTextInput
            value={value}
            onChangeText={handleChange}
            secureTextEntry={isSecured}
            className="text-[14px] font-poppins font-semibold border-b border-black p-3 "
            />
            {error && isTouched && 
                <Text className="text-red-600">{error}</Text>
            }
        </View>
    )
}

export default TextInput;
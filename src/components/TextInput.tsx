import { View, TextInput as RNTextInput, Text } from "react-native";
import { getIn, useFormikContext } from "formik";

type Props = {
    name: string;
    isSecured?: boolean;
    placeHolder: string;
    label: string;
}

const TextInput: React.FC<Props> = ({ name, isSecured, placeHolder, label }: Props) => {
    const { values, errors, touched, setFieldValue } = useFormikContext();

    const value = getIn(values, name);
    const error = getIn(errors, name);
    const isTouched = getIn(touched, name);

    const handleChange = (text: string) => {
        setFieldValue(name, text)
    };

    return (
        <View className="w-full">
            <Text>{label}</Text>
            <RNTextInput
                value={value}
                onChangeText={handleChange}
                secureTextEntry={isSecured}
                placeholder={placeHolder}
                className="text-[14px] font-poppins border-stone-400 border-[1px] rounded-lg p-3"
            />
            <Text className="text-red-600">{(isTouched && error) ? error : ''}</Text>
        </View>
    )
}

export default TextInput;
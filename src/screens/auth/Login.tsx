import { Text, View, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { ScreenRef } from "../../helper/ScreenRef";

const Login = () => {
    const navigation = useNavigation();

    const validationSchema = Yup.object().shape({
        logInEmail: Yup.string().email('Invalid email').required('Required'),
        logInPassword: Yup.string()
            .required('Required')
    });

    return (
        <KeyboardAvoidingView
            className="flex-1 items-center justify-center w-full px-10"
        >
            <Text className="text-blue-600 font-poppins font-semibold text-[32px] mb-2">Welcome</Text>
            <View className="flex justify-center items-center w-full">
                <Formik
                    initialValues={{
                        logInEmail: '',
                        logInPassword: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values: any, { resetForm }: any) => {
                        console.log(values)
                        resetForm()
                    }}
                >
                    {({ handleSubmit }) => (
                        <View className="w-full flex flex-col gap-2">
                            <TextInput
                                name="logInEmail"
                                placeHolder="Email"
                                label="Email"
                            />
                            <View>
                                <TextInput
                                    name={"logInPassword"}
                                    isSecured={true}
                                    label="Password"
                                    placeHolder="Password"
                                />
                                <Text className="text-blue-600">Forgot Password</Text>
                            </View>
                            <View className="mt-4">
                                <Button
                                    onPress={handleSubmit}
                                    text={"Login"}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
            <Text className="mt-2">Don't have an account?
                <Text
                    className="text-blue-600"
                    onPress={() => navigation.navigate(ScreenRef.Signup)}
                >
                    Register here
                </Text>
            </Text>
        </KeyboardAvoidingView >
    )
}

export default Login;
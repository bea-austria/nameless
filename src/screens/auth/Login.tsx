import { ScrollView, Text, View, KeyboardAvoidingView } from "react-native";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const Login = () => {

    let validationSchema = Yup.object().shape({
        logInEmail: Yup.string().email('Invalid email').required('Required'),
        logInPassword: Yup.string()
            .required('Required')
    });

    return (
        <KeyboardAvoidingView
            className="flex-1 items-center justify-center w-full px-10"
        >
            <Text className="text-blue-600 font-poppins font-semibold text-[32px]">Welcome</Text>
            <View className="flex justify-center items-center w-full">
                <Formik
                    initialValues={{
                        logInEmail: '',
                        logInPassword: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values: any, { resetForm }: any) => {
                        resetForm()
                    }}
                >
                    {({ handleSubmit }) => (
                        <View className="w-full">
                            <TextInput
                                name={"logInEmail"}
                            />
                            <TextInput
                                name={"logInPassword"}
                                isSecured={true}
                            />
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
        </KeyboardAvoidingView >
    )
}

export default Login;
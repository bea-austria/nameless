import { ScrollView, Text, View, KeyboardAvoidingView } from "react-native";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { ScreenRef } from "../../helper/ScreenRef";

const Signup = () => {
    const navigation = useNavigation();

    const registrationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        userName: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!')
            .matches(/[a-zA-Z]/, 'Should contain at least one letter')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required')
            .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Should contain at least one uppercase and lowercase character")
            .matches(/\d/, "Should contain at least one number")
            .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Should contain at least one special character"),
        confirmPassword: Yup.string()
            .when("password", (password: any, schema: any) => {
                if (password) {
                    return schema
                        .required("Required")
                        .oneOf([Yup.ref("password")], "Passwords do not match");
                }
            }),
    });

    return (
        <KeyboardAvoidingView
            className="flex-1 items-center justify-center w-full px-10"
        >
            <Text className="text-blue-600 font-poppins font-semibold text-[32px] mb-2">Create Your Account</Text>
            <View className="flex justify-center items-center w-full">
                <Formik
                    initialValues={{
                        email: '',
                        userName: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={registrationSchema}
                    onSubmit={(values: any, { resetForm }: any) => {
                        console.log(values)
                        resetForm()
                    }}
                >
                    {({ handleSubmit }) => (
                        <View className="w-full flex flex-col gap-[1px]">
                            <TextInput
                                name="email"
                                label="Email"
                                placeHolder="Email"
                            />
                            <TextInput
                                name="userName"
                                label="Username"
                                placeHolder="Username"
                            />
                            <TextInput
                                name="password"
                                label="Password"
                                isSecured={true}
                                placeHolder="Password"
                            />
                            <TextInput
                                name={"confirmPassword"}
                                label="Retype Password"
                                isSecured={true}
                                placeHolder="Retype Password"
                            />
                            <View className="mt-4">
                                <Button
                                    onPress={handleSubmit}
                                    text={"Sign Up"}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
            <Text className="mt-2">Already have an account?
                <Text
                    className="text-blue-600"
                    onPress={() => navigation.navigate(ScreenRef.Login)}
                >
                    Log in here
                </Text>
            </Text>
        </KeyboardAvoidingView >
    )
}

export default Signup;
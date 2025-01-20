import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = () => {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 flex justify-center items-center">
                <Text className="font-extrabold text-blue-600 text-[32px] font-poppins">Nameless</Text>
                <Text className="text-blue-500 font-poppins">Where you redefine music experience</Text>
            </View>
        </SafeAreaView>
    )
};

export default Splash;
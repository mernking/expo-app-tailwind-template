import { Text, View, TouchableOpacity } from "react-native";
import "./index.css";

export default function App() {
  return (
    <View className="w-full h-full flex flex-col gap-2 items-center justify-center">
      <Text className="text-3xl text-blue-500 font-bold">Open up App.js</Text>
      <Text className="">to start editing</Text>
      <View className="">
        <TouchableOpacity
          className="bg-black text-white font-bold rounded-md px-3 py-2"
          onPress={() => alert("Button pressed")}
        >
          <Text className="text-white">Press me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

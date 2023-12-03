// import { View, Text, TouchableOpacity } from "react-native";
// import React from "react";
// import BackArrowView from "../../../assets/back-Arrow.svg";

// export default function ItemCart() {
//   return (
//     <View className="mx-10">
//       <TouchableOpacity onPress={() => navigation.navigate("measuring-party")}>
//         <View className="flex flex-row justify-between items-center w-full px-5 py-4 mt-3 bg-white rounded-2xl">
//           <View className="flex flex-row">
//             <Text>({count})</Text>
//             <Text className="mx-2">Party Dress</Text>
//           </View>
//           <BackArrowView />
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate("measuring-daily")}>
//         <View className="flex flex-row justify-between items-center w-full px-5 py-4 mt-3 bg-white rounded-2xl">
//           <View className="flex flex-row">
//             <Text>({count})</Text>
//             <Text className="mx-2">Daily Wear Set</Text>
//           </View>
//           <BackArrowView />
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate("measuring-daily")}>
//         <View className="flex flex-row justify-between items-center w-full px-5 py-4 mt-3 bg-white rounded-2xl">
//           <View className="flex flex-row">
//             <Text>({count})</Text>
//             <Text className="mx-2">Pajamas Set</Text>
//           </View>
//           <BackArrowView />
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }
// ItemCart.js

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BackArrowView from "../../../assets/back-Arrow.svg";

export default function ItemCart({ navigation, count }) {
  const navigateToMeasuring = (screen) => {
    navigation.navigate(screen);
  };

  const renderCartItem = (title, screen) => (
    <TouchableOpacity onPress={() => navigateToMeasuring(screen)}>
      <View className="flex flex-row justify-between items-center w-full px-5 py-4 mt-3 bg-white rounded-2xl">
        <View className="flex flex-row">
          <Text>({count})</Text>
          <Text className="mx-2">{title}</Text>
        </View>
        <BackArrowView />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {renderCartItem("Party Dress", "measuring-party")}
      {renderCartItem("Daily Wear Set", "measuring-daily")}
      {renderCartItem("Pajamas Set", "measuring")}
      {/* Adjust the screen as needed */}
    </View>
  );
}

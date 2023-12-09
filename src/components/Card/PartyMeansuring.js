// import { View, Text, TextInput } from "react-native";
// import React from "react";

// const ButtomstInput = ({ label, placeholder, setQuery }) => {
//   return (
//     <View className="flex flex-row justify-between items-center w-full px-5 py-4 mt-3 bg-white rounded-2xl">
//       <Text className="font-semibold">{label}</Text>
//       <View className="flex flex-row">
//         <TextInput
//           placeholder={placeholder}
//           onChangeText={(text) => setQuery(text)}
//           className="text-center"
//         />
//         <Text className="pt-1 px-1">cm</Text>
//       </View>
//     </View>
//   );
// };

// export default function PartyMeansuring({ setQuery }) {
//   return (
//     <View className="justify-center mx-10 pt-8">
//       <ButtomstInput
//         label="Bust"
//         placeholder="..."
//         setQuery={setQuery}
//       />
//       <ButtomstInput
//         label="Waist"
//         placeholder="..."
//         setQuery={setQuery}
//       />
//       <ButtomstInput
//         label="Hips"
//         placeholder="..."
//         setQuery={setQuery}
//       />
//       <ButtomstInput
//         label="Length"
//         placeholder="..."
//         setQuery={setQuery}
//       />
//     </View>
//   );
// }

import { View, Text, TextInput } from "react-native";
import React from "react";

const InputField = ({ label, placeholder, setValue }) => {
  return (
    <View className="flex flex-row justify-between items-center w-full px-5 py-4 mt-3 bg-white rounded-2xl">
      <Text className="font-semibold">{label}</Text>
      <View className="flex flex-row">
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => setValue(text)}
          className="text-center"
          keyboardType="numeric"
        />
        <Text className="pt-1 px-1">cm</Text>
      </View>
    </View>
  );
};

export default function PartyMeansuring({
  setBust,
  setWaist,
  setHips,
  setLength,
}) {
  return (
    <View className="justify-center mx-8">
      <InputField
        label="Bust"
        placeholder="..."
        setValue={setBust}
      />
      <InputField
        label="Waist"
        placeholder="..."
        setValue={setWaist}
      />
      <InputField
        label="Hips"
        placeholder="..."
        setValue={setHips}
      />
      <InputField
        label="Length"
        placeholder="..."
        setValue={setLength}
      />
    </View>
  );
}

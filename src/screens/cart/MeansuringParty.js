// import { View, FlatList, ScrollView, Text } from "react-native";
// import React, { useState } from "react";
// import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
// import PartyMeansuring from "../../components/Card/PartyMeansuring";
// import { useNavigation } from "@react-navigation/native";
// import ColoredButton from "../../components/Button/ColoredButton";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function MeansuringParty() {
//   const navigation = useNavigation();

//   const [query, setQuery] = useState("");

//   return (
//     <MeansuringTemplate title={"Party Dress"}>
//       <ScrollView>
//         <SafeAreaView>
//           <PartyMeansuring setQuery={setQuery} />
//           <View className="mx-10">
//             <ColoredButton
//               title={"Next"}
//               styleButton={"bg-old-rose w-full my-4 py-5 mt-10 rounded-2xl"}
//               styleText={"text-white"}
//               onPress={() => navigation.navigate("measuring-daily")}
//             />
//           </View>
//         </SafeAreaView>
//       </ScrollView>
//     </MeansuringTemplate>
//   );
// }

import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import PartyMeansuring from "../../components/Card/PartyMeansuring";
import { useNavigation } from "@react-navigation/native";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";

export default function MeansuringParty() {
  const navigation = useNavigation();

  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [length, setLength] = useState("");

  const handleNext = () => {
    // Validate that all fields are filled
    if (!bust || !waist || !hips || !length) {
      Alert.alert("Incomplete Fields", "Please fill in all the measurements.");
    } else {
      // Navigate to the next page
      navigation.navigate("measuring-daily");
    }
  };

  return (
    <MeansuringTemplate title={"Party Dress"}>
      <ScrollView>
        <SafeAreaView>
          <PartyMeansuring
            setBust={setBust}
            setWaist={setWaist}
            setHips={setHips}
            setLength={setLength}
          />
          <View className="mx-8">
            <ColoredButton
              title={"Next"}
              styleButton={"bg-old-rose w-full my-4 py-5 mt-10 rounded-2xl"}
              styleText={"text-white"}
              onPress={handleNext}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </MeansuringTemplate>
  );
}

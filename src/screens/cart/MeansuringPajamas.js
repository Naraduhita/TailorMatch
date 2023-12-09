// import { View, FlatList, ScrollView, Text } from "react-native";
// import React, { useState } from "react";
// import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
// import TopMeansuring from "../../components/Card/TopMeansuring";
// import ButtonMeansuring from "../../components/Card/ButtonMeansuring";
// import { useNavigation } from "@react-navigation/native";
// import ColoredButton from "../../components/Button/ColoredButton";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Meansuring() {
//   const navigation = useNavigation();

//   const [query, setQuery] = useState("");

//   return (
//     <MeansuringTemplate title={"Pajamas Set"}>
//       <ScrollView>
//         <SafeAreaView>
//           <TopMeansuring setQuery={setQuery} />
//           <ButtonMeansuring setQuery={setQuery} />
//           <View className="mx-10">
//             <ColoredButton
//               title={"Submit"}
//               styleButton={"bg-old-rose w-full my-4 py-5 mt-10 rounded-2xl"}
//               styleText={"text-white"}
//               onPress={() => navigation.navigate("sewing")}
//             />
//           </View>
//         </SafeAreaView>
//       </ScrollView>
//     </MeansuringTemplate>
//   );
// }

import { View, FlatList, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import TopMeansuring from "../../components/Card/TopMeansuring";
import ButtonMeansuring from "../../components/Card/ButtonMeansuring";
import { useNavigation } from "@react-navigation/native";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";

export default function Meansuring() {
  const navigation = useNavigation();

  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [length, setLength] = useState("");
  const [Sleeve, setSleeveLength] = useState("");
  const [waist2, setWaist2] = useState("");
  const [hips2, setHips2] = useState("");
  const [inseam2, setInseam2] = useState("");
  const [length2, setLength2] = useState("");

  const handleNext = () => {
    // Validate that all fields are filled
    if (
      !bust ||
      !waist ||
      !hips ||
      !length ||
      !Sleeve ||
      !waist2 ||
      !hips2 ||
      !inseam2 ||
      !length2
    ) {
      Alert.alert("Incomplete Fields", "Please fill in all the measurements.");
    } else {
      // Navigate to the next page
      navigation.navigate("sewing");
    }
  };

  return (
    <MeansuringTemplate title={"Pajamas Set"}>
      <ScrollView>
        <SafeAreaView>
          <TopMeansuring
            setBust={setBust}
            setWaist={setWaist}
            setHips={setHips}
            setLength={setLength}
            setSleeveLength={setSleeveLength}
          />
          <ButtonMeansuring
            setWaist2={setWaist2}
            setHips2={setHips2}
            setInseam2={setInseam2}
            setLength2={setLength2}
          />
          <View className="mx-8">
            <ColoredButton
              title={"Submit"}
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

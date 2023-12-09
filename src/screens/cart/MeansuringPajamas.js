import { View, FlatList, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import TopMeansuring from "../../components/Card/TopMeansuring";
import ButtonMeansuring from "../../components/Card/ButtonMeansuring";
import { useNavigation, useRoute } from "@react-navigation/native";
import ColoredButton from "../../components/Button/ColoredButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";
import createDetailCloth from "../../api/clothes/create-detail-cloth";
import { useAuthContext } from "../../contexts/AuthContext";
import getDetailCloth from "../../api/clothes/get-detail-cloth-by-id";

export default function Meansuring() {
  const navigation = useNavigation();
  const route = useRoute();
  const auth = useAuthContext();

  const [bustTop, setBustTop] = useState(0);
  const [waistTop, setWaistTop] = useState(0);
  const [hipsTop, setHipsTop] = useState(0);
  const [lengthTop, setLengthTop] = useState(0);
  const [SleeveTop, setSleeveLengthTop] = useState(0);
  const [waistBottom, setWaistBottom] = useState(0);
  const [hipsBottom, setHipsBottom] = useState(0);
  const [inseamBottom, setInseamBottom] = useState(0);
  const [lengthBottom, setLengthBottom] = useState(0);

  const { Clothes } = route.params;

  const handleNext = () => {
    if (
      (!bustTop || !waistTop || !hipsTop || !lengthTop || !SleeveTop) &&
      (!waistBottom || !hipsBottom || !inseamBottom || !lengthBottom)
    ) {
      Alert.alert(
        "Incomplete Fields",
        "Please fill in top / bottom the measurements.",
      );
    } else {
      const dataTop = {
        bust: parseFloat(bustTop),
        waist: parseFloat(waistTop),
        hips: parseFloat(hipsTop),
        length: parseFloat(lengthTop),
        sleeve_length: parseFloat(SleeveTop),
        cloth_type: "TOP",
      };
      const dataBottom = {
        waist: parseFloat(waistBottom),
        hips: parseFloat(hipsBottom),
        inseam: parseFloat(inseamBottom),
        length: parseFloat(lengthBottom),
        cloth_type: "BOTTOM",
      };

      createDetailClothes(dataTop, dataBottom);
    }
  };

  const createDetailClothes = async (dataTop, dataBottom) => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const isDataTopValid = Object.values(dataTop).some(
        (value) => !isNaN(value) && value !== 0,
      );
      const isDataBottomValid = Object.values(dataBottom).some(
        (value) => !isNaN(value) && value !== 0,
      );

      console.log("isDataTopValid", isDataTopValid);
      console.log("isDataBottomValid", isDataBottomValid);

      if (isDataTopValid || isDataBottomValid) {
        if (isDataTopValid) {
          const top = await createDetailCloth(user_token, Clothes.id, dataTop);
          console.log("top");
          console.log(top);

          if (top.data.status === "success") {
            // const topData = top.data.data;
            // console.log('topData');
            // console.log(topData);
            navigation.goBack();
          }
        }

        if (isDataBottomValid) {
          const bottom = await createDetailCloth(
            user_token,
            Clothes.id,
            dataBottom,
          );
          if (bottom.data.status === "success") {
            // const bottomData = bottom.data.data;
            // console.log('bottomData');
            // console.log(bottomData);
            navigation.goBack();
          }
        }
      } else {
        Alert.alert(
          "Incomplete Fields",
          "Please fill in top / bottom the measurements.",
        );
      }
    } else {
      navigation.navigate("login");
    }
  };

  React.useEffect(() => {
    const getData = async () => {
      const isLoggedIn = await auth.CheckToken();

      if (isLoggedIn) {
        const user_token = await auth.getToken();
        const detailCloth = await getDetailCloth(user_token, Clothes.id);
        console.log("detailCloth");
        console.log(detailCloth);
        console.log("cloth id: " + Clothes.id);

        if (detailCloth.data.status === "success") {
          const data = detailCloth.data.data;
          // if (data.length > 0) {
          //   const top = data.find((item) => item.cloth_type === "TOP");
          //   const bottom = data.find((item) => item.cloth_type === "BOTTOM");

          //   if (top) {
          //     setBustTop(top.bust);
          //     setWaistTop(top.waist);
          //     setHipsTop(top.hips);
          //     setLengthTop(top.length);
          //     setSleeveLengthTop(top.sleeve_length);
          //   }

          //   if (bottom) {
          //     setWaistBottom(bottom.waist);
          //     setHipsBottom(bottom.hips);
          //     setInseamBottom(bottom.inseam);
          //     setLengthBottom(bottom.length);
          //   }
          // }
        }
      }
    };

    getData();
  }, []);

  return (
    <MeansuringTemplate title={Clothes.name}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mx-3">
        <TopMeansuring
          setBust={setBustTop}
          setWaist={setWaistTop}
          setHips={setHipsTop}
          setLength={setLengthTop}
          setSleeveLength={setSleeveLengthTop}
        />
        <ButtonMeansuring
          setWaist2={setWaistBottom}
          setHips2={setHipsBottom}
          setInseam2={setInseamBottom}
          setLength2={setLengthBottom}
        />
        <ColoredButton
          title={"Submit"}
          styleButton={"bg-old-rose w-full my-4 py-5 mt-10 rounded-2xl"}
          styleText={"text-white"}
          onPress={handleNext}
        />
      </ScrollView>
    </MeansuringTemplate>
  );
}

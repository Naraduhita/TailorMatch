import { View, FlatList, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import MeansuringTemplate from "../../components/Order/MeansuringTemplate";
import TopMeansuring from "../../components/Card/TopMeansuring";
import ButtonMeansuring from "../../components/Card/ButtonMeansuring";
import { useNavigation, useRoute } from "@react-navigation/native";
import ColoredButton from "../../components/Button/ColoredButton";
import { Alert } from "react-native";
import createDetailCloth from "../../api/clothes/create-detail-cloth";
import { useAuthContext } from "../../contexts/AuthContext";
import getDetailCloth from "../../api/clothes/get-detail-cloth-by-id";
import Loading from "../../components/Loading";

export default function Meansuring() {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params;
  const { Clothes } = route.params;
  const auth = useAuthContext();

  const [loading, setLoading] = useState(true);
  const [measurements, setMeasurements] = useState([]);
  const [template, setTemplate] = useState({
    bust_top: 0,
    waist_top: 0,
    hips_top: 0,
    length_top: 0,
    sleeve_length_top: 0,
    inseam_bottom: 0,
    waist_bottom: 0,
    hips_bottom: 0,
    length_bottom: 0,
  });
  const [isDataExists, setIsDataExists] = useState(false);

  const handleInputChange = (index, field, value) => {
    const newMeasurements = [...measurements];
    newMeasurements[index] = {
      ...newMeasurements[index],
      [field]: parseFloat(value),
    };
    setMeasurements(newMeasurements);
  };

  const createDetailClothes = async () => {
    const isLoggedIn = await auth.CheckToken();

    if (isLoggedIn) {
      const user_token = await auth.getToken();
      const detailCloth = await createDetailCloth(
        user_token,
        Clothes.id,
        measurements,
      );

      if (detailCloth.data.status == "success") {
        navigation.goBack();
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

        if (detailCloth.data.status === "success") {
          const data = detailCloth.data.data;
          if (data.DetailClothes.length > 0) {
            setMeasurements(data.DetailClothes);
            setIsDataExists(true);
          } else {
            let detailCloth = [];
            for (let i = 0; i < item.Clothes.quantity; i++) {
              detailCloth.push(template);
            }
            setMeasurements(detailCloth);
          }
          setLoading(false);
        }
      }
    };

    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <MeansuringTemplate title={Clothes.name}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mx-3">
        {Array.from({ length: item.Clothes.quantity }).map((_, index) => (
          <View key={index}>
            <Text className="my-2 text-lg font-bold">
              {item.Clothes.name} - ({index + 1})
            </Text>
            <TopMeansuring
              setBust={(value) => handleInputChange(index, "bust_top", value)}
              setWaist={(value) => handleInputChange(index, "waist_top", value)}
              setHips={(value) => handleInputChange(index, "hips_top", value)}
              setLength={(value) =>
                handleInputChange(index, "length_top", value)
              }
              setSleeveLength={(value) =>
                handleInputChange(index, "sleeve_length_top", value)
              }
              bust={measurements[index].bust_top.toString()}
              waist={measurements[index].waist_top.toString()}
              hips={measurements[index].hips_top.toString()}
              length={measurements[index].length_top.toString()}
              sleeveLength={measurements[index].sleeve_length_top.toString()}
            />
            <ButtonMeansuring
              setWaist2={(value) =>
                handleInputChange(index, "waist_bottom", value)
              }
              setHips2={(value) =>
                handleInputChange(index, "hips_bottom", value)
              }
              setInseam2={(value) =>
                handleInputChange(index, "inseam_bottom", value)
              }
              setLength2={(value) =>
                handleInputChange(index, "length_bottom", value)
              }
              waist={measurements[index].waist_bottom.toString()}
              hips={measurements[index].waist_bottom.toString()}
              inseam={measurements[index].inseam_bottom.toString()}
              length={measurements[index].length_bottom.toString()}
            />
          </View>
        ))}

        {isDataExists == false && (
          <ColoredButton
            title={"Submit"}
            styleButton={"bg-old-rose w-full my-4 py-5 mt-10 rounded-2xl"}
            styleText={"text-white"}
            onPress={createDetailClothes}
          />
        )}
      </ScrollView>
    </MeansuringTemplate>
  );
}

import { View, Text } from "react-native";
import React from "react";

export default function ColoredBox({ status }) {
  const colorStatus = (status) => {
    switch (status.toLowerCase()) {
      case "ongoing":
        return "bg-yellow";
      case "done":
        return "bg-green";
      case "cancelled":
        return "bg-red";
      case "payment":
        return "bg-emperor";
      case "awaiting":
        return "bg-emperor";
      case "deliver":
        return "bg-red_button";
      case "sewing":
        return "bg-[#ffa500]";
      case "fitting":
        return "bg-pink";
      case "measuring":
        return "bg-yellow";
      default:
        return "";
    }
  };

  return (
    <Text
      className={`text-white text-center font-medium px-1 py-0.5 text-xs rounded-xl ${colorStatus(
        status,
      )}`}>
      {status}
    </Text>
  );
}

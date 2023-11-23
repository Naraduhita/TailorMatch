import { View, Text } from "react-native";
import React from "react";

export default function ColoredBox({ status }) {
  const colorStatus = (status) => {
    switch (status) {
      case "Ongoing":
        return "bg-yellow";
      case "Done":
        return "bg-green";
      case "Cancelled":
        return "bg-red";
      default:
        return "";
    }
  };

  return (
    <Text
      className={`text-white text-center font-medium rounded-md px-2 py-0.5 text-xs ${colorStatus(
        status,
      )}`}>
      {status}
    </Text>
  );
}

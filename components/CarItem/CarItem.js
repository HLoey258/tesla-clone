import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./style";

export default function CarItem() {
  return (
    <View>
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>ModelS</Text>
          <Text style={styles.subtitles}>Start at $600000</Text>
        </View>
      </View>
    </View>
  );
}

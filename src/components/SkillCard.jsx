import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function SkillCard({ Skill, key }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} key={key}>
      <Text style={styles.textSkill}>{Skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
});

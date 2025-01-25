import React, { useState } from "react";

import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button } from "./components/Button";
import { SkillCard } from "./components/SkillCard";

export default function App() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<string[]>([]);

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Gabriel</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <SkillCard Skill={item} key={item} />
        )}
      />
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});

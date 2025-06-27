import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Text, ActivityIndicator, MD2Colors } from "react-native-paper";

export default function HomeScreen({ navigation, route }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.30.33.35:3000/produtos?delay=2000")
      .then((res) => {
        setProdutos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() =>
              navigation.navigate("ProdutoScreen", { id: item._id })
            }
          >
            <Card.Cover source={{ uri: item.foto }} style={{ height: 150 }} />

            <Card.Title title={item.nome} />
          </Card>
        )}
        /*  keyExtractor={(item) => item.id.toString()} */
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListEmptyComponent={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
            <Text> Carregando ....</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    width: "48%",
    backgroundColor: "#eee",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
  },
});

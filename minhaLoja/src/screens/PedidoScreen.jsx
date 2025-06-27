import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState,  } from "react";
import{ Form, Formik } from "formik"
import axios from "axios";
import { Card, Avatar, TextInput, Button } from "react-native-paper";

export default function PedidoScreen() {
  const [funcionarios, setFuncionarios] = useState();
  const [clientes, setclientes] = useState();
  const [produtos, setProdutos] = useState();
  const [quantidade, SetQuantidade] = useState ([])
  const [carrinho, setCarrinho] = useState ([])

  useEffect(() => {
    axios
      .get("http://10.30.33.35:3000/funcionarios")
      .then((res) => {
        
        setFuncionarios(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://10.30.33.35:3000/clientes")
      .then((res) => {
       
        setclientes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://10.30.33.35:3000/produtos")
      .then((res) => {
        
        setProdutos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const atulizarQuantidade = (id, valor) => {
    SetQuantidade ((prev) => ({
      ...prev,
      [id]: valor
    }));
  };

  const adicionarAoCarrinho = (produto) =>{
      const qtd = parseInt(quantidade[produto._id]) || 1 ;
        
        const itemCarrinho = {
          ...produto,
          quantidade: qtd
        };

        setCarrinho((prev) => [...prev, itemCarrinho]);
        alert(`Adicionado ${qtd} x ${produto.nome} ao carrinho`)
      
  }

  return (
    <View style={styles.container} >

        <FlatList 
        data={produtos}
        renderItem={({ item }) => (
            <Card style={styles.card}>
                <Card.Title 
                title={item.nome}
                subtitle={`R$ ${item.preco}`}
                left={(props) => item.foto ? (
                  <Avatar.Image
                    {...props}
                    source={{ uri: item.foto }}
                    size={50}
                  />
                ) : (
                  <Avatar.Icon {...props} icon="image" />
                )
              }
                />

                <View style={styles.produtoContainer}>
                  <Text> Quantidade: </Text>
                  <TextInput 
                  style={styles.input}
                  keyboardType="numeric"
                  value={(quantidade[item._id] || "").toString()}
                  onChangeText={(text) => atulizarQuantidade(item._id, text)  }
                  placeholder="1"
                  />
                </View>

              <Button title="Adicionar" onPress={() => adicionarAoCarrinho(item)}> Adicionar </Button>


            </Card>
        )}
        />

        <View style={styles.resumo}>
          <Text style={styles.title}> Carrinho:</Text>
          {carrinho.map((item, index) => (
            <Text key={index}>
              {item.quantidade}x {item.nome} - R$ {(item.preco* item.quantidade).toFixed(2)}
            </Text>
          ))}
        </View>


     
    </View>
  );
}

const styles = StyleSheet.create({

     container: {
      padding: 10,
      flex: 1
     },
     card:{
      marginBottom: 10,
     },
     produtoContainer:{
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: "16",
      paddingBottom:"10",
      gap: 10,
     },
     input:{
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 6,
      width: 60,
      textAlign: "center",
      borderRadius: 4
     },
     resumo:{
      padding:10 ,
      borderTopWidth: 1,
      borderColor: "#ccc",
      marginTop: 10,
         },
      title:{
        fontWeight: "bold",
        fontSize: 16,
        marginBottom:4,
      },
         


});

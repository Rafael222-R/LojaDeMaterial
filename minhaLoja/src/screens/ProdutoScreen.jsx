import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Text } from 'react-native-paper';

export default function ProdutoScreen({navigation, route}) {
console.log('ID DO PRODUTO RECEBIDO:', route.params);

const id = route.params.id
const [produtoId, setProdutoId] =useState({})

useEffect(() => {
    axios.get(`http://10.30.33.35:3000/produtos/${id}` )
    .then((res) => {
        setProdutoId(res.data)
    })
    .catch((err) =>{
        console.log(err)
    })
},[])

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
      <Card style={{ width: '100%' }}>
        <Card.Title 
        title={produtoId.nome}
        titleStyle={{ textAlign: 'center', flex: 1 }}
        />

        <Card.Cover 
        source={{uri: produtoId.foto }}
        />
        <Card.Content>
        <Text > Descrição: {produtoId.descricao} </Text>
        <Text > Categoria: {produtoId.categoria} </Text>
        <Text > Fabricante: {produtoId.fabricante} </Text>
        <Text > Codigo de Barra: {produtoId.codigo_barras} </Text>
        <Text > Peso: {produtoId.peso} kg </Text>
        <Text > Valor: R$ {produtoId.preco} </Text>
        
        </Card.Content>
        
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})
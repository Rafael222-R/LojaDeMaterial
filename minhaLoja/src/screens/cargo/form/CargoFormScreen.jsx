import { StyleSheet, View, ScrollView } from 'react-native'
import {Text, TextInput, Button, Title} from "react-native-paper"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CargoScreen() {

    const [CargoForm, setCargoForm] = useState({
        nome: '',
        descricao:'',
        
    })

    useEffect(() =>{
        axios.post ("http://192.168.2.104:3000/cargos/form")
        .then((res) => {
            console.log(res.status)
            setCargoForm(res.data)
        })
        .catch((err) => {
            console.log(err)

        })
    },[])
  return (
    <ScrollView  >
    <Title> Cadastro de Cargo: </Title>
    
    <TextInput 
    label="Nome"
    value={CargoForm.name}
    mode='flat'
    />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
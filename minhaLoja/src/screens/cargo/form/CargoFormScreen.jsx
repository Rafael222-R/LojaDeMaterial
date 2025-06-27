import { StyleSheet, View, ScrollView } from "react-native";
import { TextInput, Button, Title, Text } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

export default function CargoScreen() {
  const [CargoForm, setCargoForm] = useState({
    nome: "",
    descricao: "",
    salario: "",
    habilidade: "",
    status_cargo: "",
    departamento: "",
    nivel_hierarquico: "",
    data_criacao: "",
  });
  const formatDate = (brDate) => {
    const [dia, mes, ano] = brDate.split("/");
    return `${ano}-${mes}-${dia}`;
  };

  function salvar() {
    console.log(CargoForm);

    axios
      .post("http://10.30.33.35:3000/cargos", CargoForm)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });

    const dadosCorrigidos = {
      ...CargoForm,
      data_criacao: formatDate(CargoForm.data_criacao),
    };
  }

  return (
    <ScrollView>
      <Title> Cadastro de Cargo: </Title>

      <TextInput
        label="Nome"
        value={CargoForm.nome}
        mode="flat"
        onChangeText={(text) => setCargoForm({ ...CargoForm, nome: text })}
      />

      <TextInput
        label="Descrição"
        value={CargoForm.descricao}
        mode="flat"
        onChangeText={(text) => setCargoForm({ ...CargoForm, descricao: text })}
      />

      <TextInput
        label="Salário"
        value={CargoForm.salario}
        mode="flat"
        onChangeText={(text) => setCargoForm({ ...CargoForm, salario: text })}
      />

      <TextInput
        label="Habilidade"
        value={CargoForm.habilidade}
        mode="flat"
        onChangeText={(text) =>
          setCargoForm({ ...CargoForm, habilidade: text })
        }
      />

      {/* <View style={styles.inputWrapper}>
  <Text style={styles.label}>Status do Cargo</Text>
  <View style={styles.pickerContainer}>
    <Picker
      selectedValue={CargoForm.status_cargo}
      onValueChange={(itemValue) =>
        setCargoForm({ ...CargoForm, status_cargo: itemValue })
      }
      style={styles.picker}
    >
      <Picker.Item label="Selecione o status" value="" />
      <Picker.Item label="Ativo" value="Ativo" />
      <Picker.Item label="Inativo" value="Inativo" />
    </Picker>
  </View>
</View> */}

      <TextInput
        label="Status do Cargo"
        value={CargoForm.status_cargo}
        mode="flat"
        render={() => (
          <Picker
            selectedValue={CargoForm.status_cargo}
            onValueChange={(itemValue) =>
              setCargoForm({ ...CargoForm, status_cargo: itemValue })
            }
            /* style={styles.pickerInsideTextInput} */
          >
            <Picker.Item label="Selecione o status" value="" />
            <Picker.Item label="Ativo" value="Ativo" />
            <Picker.Item label="Inativo" value="Inativo" />
          </Picker>
        )}
      />

      <TextInput
        label="Departamento"
        value={CargoForm.departamento}
        mode="flat"
        onChangeText={(text) =>
          setCargoForm({ ...CargoForm, departamento: text })
        }
      />

      <TextInput
        label="Nivel Hierarquico"
        value={CargoForm.nivel_hierarquico}
        mode="flat"
        render={() => (
          <Picker
            selectedValue={CargoForm.nivel_hierarquico}
            onValueChange={(itemValue) =>
              setCargoForm({ ...CargoForm, nivel_hierarquico: itemValue })
            }
            /* style={styles.pickerInsideTextInput} */
          >
            <Picker.Item label="Selecione o status" value="" />
            <Picker.Item label="Junior" value="Junior" />
            <Picker.Item label="Pleno" value="Pleno" />
            <Picker.Item label="Senior" value="Senior" />
          </Picker>
        )}
      />

      <TextInput 
  label="Data da Criação"
  value={CargoForm.data_criacao}
  mode='flat'
  onChangeText={(text) => setCargoForm({ ...CargoForm, data_criacao: text })}
/>

      <Button mode="contained" onPress={salvar} style={{ marginTop: 20 }}>
        Salvar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    color: "#6a6a6a",
    marginBottom: 4,
    marginLeft: 4,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#c7c7c7",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  picker: {
    height: 50,
    paddingHorizontal: 8,
  },
  pickerInsideTextInput: {
    height: 50,
    marginTop: -10, // ajusta visualmente dentro do TextInput
    marginBottom: -10,
  },
});

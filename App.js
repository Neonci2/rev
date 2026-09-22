import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
const frases = [
  'Mewtwo',
  'Lugia',
  'Ho-Oh',
  'Kyogre',
  'Groudon',
  'Rayquaza',
  'Dialga',
  'Palkia',
  'Giratina',
  'Reshiram',
  'Zekrom',
  'Kyurem',
  'Xerneas',
  'Yveltal',
  'Zygarde',
  'Solgaleo',
  'Lunala',
  'Necrozma',
  'Zacian',
  'Zamazenta',
  'Eternatus',
  'Koraidon',
  'Miraidon',
  'Articuno',
  'Zapdos',
  'Moltres',
  'Entei',
  'Raikou',
  'Suicune',
  'Regirock',
  'Regice',
  'Registeel',
  'Latios',
  'Latias',
  'Azelf',
  'Mesprit',
  'Uxie',
  'Cobalion',
  'Terrakion',
  'Virizion',
  'Silvally',
  'Tapu Koko',
  'Tapu Lele',
  'Tapu Bulu',
  'Tapu Fini',
];

  const [fraseAtual, setFraseAtual] = useState('');
  const [imagemAtual, setImagemAtual] = useState(false);

  const [frasesDisponiveis, setFrasesDisponiveis] = useState(frases);

  function abrirBiscoito() {
    let lista = [...frasesDisponiveis];

    if (lista.length === 0) {
      lista = frases.filter((frase) => frase !== fraseAtual);
    }

    const indice = Math.floor(Math.random() * lista.length);
    const frase = lista[indice];

    lista.splice(indice, 1);

    setFrasesDisponiveis(lista);
    setFraseAtual(frase);
    setImagemAtual(true);
  }

  function voltarBiscoito() {
    setImagemAtual(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacote da Sorte Pokémon</Text>

      {!imagemAtual ? (
        <>
          <Pressable onPress={abrirBiscoito}>
            <Image
              source={require('./assets/atum.webp')}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>

          <Text style={styles.instrucao}>
            Abra o pacote e descubra seu Pokémon
          </Text>
        </>
      ) : (
        <>
          <Image
            source={require('./assets/atim.webp')}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.fraseContainer}>
            <Text style={styles.frase}>
              Seu Pokémon é: {'\n'}
              {fraseAtual}!
            </Text>
          </View>

          <Pressable style={styles.botao} onPress={voltarBiscoito}>
            <Text style={styles.textoBotao}>Tentar novamente</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3E5FC',
    padding: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 30,
    textAlign: 'center',
  },

  image: {
    width: 400,
    height: 400,
  },

  instrucao: {
    fontSize: 18,
    color: '#1565C0',
    textAlign: 'center',
    marginTop: 5,
  },

  fraseContainer: {
    backgroundColor: '#E1F5FE',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 330,
  },

  frase: {
    fontSize: 23,
    lineHeight: 34,
    color: '#01579B',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  botao: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 10,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
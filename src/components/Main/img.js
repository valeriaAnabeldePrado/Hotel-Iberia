
//H-SINGLE
import singlee from '../images/single.jpg'
import simgled1 from '../images/single/single-d1.jpg' 
import simgled2 from '../images/single/single-d2.jpg' 
//H-DOBLE
import doblee from '../images/doble.png'
import dobled1 from '../images/doble/dobleD1.jpg'
import dobled2 from '../images/doble/dobleD2.jpg'
//H-TRIPLE
import habTriple from '../images/triple.png'
import tripled1 from '../images/triple/tripleD1.jpg'
import triple2 from '../images/triple/tripleD2.jpg'
//H-CUADRUPLE
import cuadruHabi from '../images/cuadruple.png'
import cuadrupleD1 from '../images/cuadruple/cuadrupleD1.jpg'
import cuadrupleD2 from '../images/cuadruple/cuadrupleD2.jpg'
//H-QUINTUPLE
import quintupleHabi from '../images/quintuple.png'
import quintuD1 from '../images/quintuple/quintuD1.jpg'
import quintuD2 from '../images/quintuple/quintuD2.jpg'
//H-SEXTUPLE
import sextuHabi from '../images/sextuple.jpg'
import sextuD1 from '../images/sextuple/sextuD1.jpg'
import sextuD2 from '../images/sextuple/sextuD2.jpg'
//SERVICIOS
import desayuno from '../images/desayuno.jfif'
import pasillo from '../images/pasillo.jpg'
import pasillo2 from '../images/pasillo2.jpg'
import sala from '../images/sala.jpg'
import sala2 from '../images/sala2.jpg'

const habitacionesDatos = [
 {name: "Habitación single",
  cardName: "Single",
  data: "Acogedoras habitaciones con cama idividual de medidas estandar y baño privado. Cuenta con WiFi, televisor, ropero y un escritorio.", 
  price: "Tarifa: $8100",
  button: "Habitación simple",
  images: [singlee, simgled1, simgled2]
 },
 {
    name: "Habitación doble",
    cardName: "Doble",
    data: "Cálidas habitaciones con camas individuales o matrimoniales con baño privado. Cuenta con WiFi, televisor, ropero y un escritorio.",
    price: "Tarifa: $9900",
    button: "Habitación doble",
    images: [doblee, dobled1, dobled2]
 },
 {
    name: "Habitación triple",
    cardName: "Triple",
    data: "Confortables habitaciones con tres camas individuales o una cama matrimonial mas una individual, las mismas poseen baño privado. Cuenta con WiFi, televisor, ropero y un escritorio.",
    price: "Tarifa: $12000",
    button: "Habitación triple",
    images: [habTriple, tripled1, triple2 ]
 },
  {
    name: "Habitación cuádrupe",
    cardName: "Cuádruple",
    data:  "Cálidas habitaciones con cuatro camas individuales o una cama matrimonial mas dos individuales, las mismas poseen baño privado. Cuenta con WiFi, televisor, ropero y un escritorio.",
    price: "Tarifa: $14400",
    button: "Habitación cuádruple",
    images: [cuadruHabi, cuadrupleD1, cuadrupleD2 ]
  },
 {
    name: "Habitación quíntuple",
    cardName: "Quíntuple",
    data:  "Cálidas habitaciones con una cama matrimonial mas tres camas individuales, las mismas poseen baño privado. Cuenta con WiFi, televisor, ropero y un escritorio.",
    price: "Tarifa: $17400",
    button: "Habitación quíntuple",
    images: [quintupleHabi, quintuD1, quintuD2 ]
 },
 {
    name: "Habitación séxtuple",
    cardName: "Séxtuple",
    data:  "Cálidas habitaciones con una cama matrimonial mas cuatro camas individuales, las mismas poseen baño privado. Cuenta con WiFi, televisor, ropero y un escritorio.",
    price: "Tarifa: $18600",
    button: "Habitación séxtuple",
    images: [sextuHabi, sextuD1, sextuD2 ]
 }
]

const roomData = [
   {name: "Single room",
    cardName: "Single",
    data: "Cozy rooms with single standard size bed and private bathroom. It has WiFi, TV, wardrobe and a desk.", 
    price: "Price: $8100",
    button: "Single room",
    images: [singlee, simgled1, simgled2]
   },
   {
      name: "Double room",
      cardName: "Double",
      data: "Comfortable rooms with single or double beds with private bathroom. It has WiFi, TV, wardrobe and a desk.",
      price: "Price: $9900",
      button: "Double room",
      images: [doblee, dobled1, dobled2]
   },
   {
      name: "Triple room",
      cardName: "Triple",
      data: "Comfortable rooms with three single beds or one double bed plus one single, they have a private bathroom. It has WiFi, TV, wardrobe and a desk.",
      price: "Price: $12000",
      button: "Triple room",
      images: [habTriple, tripled1, triple2 ]
   },
    {
      name: "Quadruple room",
      cardName: "Quadruple",
      data:  "Warm rooms with four single beds or one double bed plus two singles, they have a private bathroom. It has WiFi, TV, wardrobe and a desk.",
      price: "Price: $14400",
      button: "Quadruple room",
      images: [cuadruHabi, cuadrupleD1, cuadrupleD2 ]
    },
   {
      name: "Quintuple room",
      cardName: "Quintuple",
      data:  "Warm rooms with a double bed plus three single beds, they have a private bathroom. It has WiFi, TV, wardrobe and a desk.",
      price: "Price: $17400",
      button: "Quintuple room",
      images: [quintupleHabi, quintuD1, quintuD2 ]
   },
   {
      name: "Sextuple room",
      cardName: "Sextuple",
      data:  "Warm rooms with a double bed plus four single beds, they have a private bathroom. It has WiFi, TV, wardrobe and a desk.",
      price: "Price: $18600",
      button: "Sextuple room",
      images: [sextuHabi, sextuD1, sextuD2 ]
   }
  ]

const servicioss = [
   desayuno, pasillo, pasillo2, sala, sala2
]
export {habitacionesDatos, servicioss, roomData}


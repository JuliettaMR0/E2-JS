const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*PUNTO UNO*/

console.log("Pizzas con ID impar:");
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`Pizza ${pizza.nombre}`);
  }
});

/*PUNTO DOS*/

const pizzaBarata = pizzas.some((pizza) => pizza.precio < 600);
if (pizzaBarata) {
  console.log("Sí, hay al menos una pizza que cuesta menos de $600.");
} else {
  console.log("No, todas las pizzas cuestan $600 o más.");
}

/*PUNTO TRES*/

console.log("Nombre y precio de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`Pizza ${pizza.nombre}, tiene un valor de $${pizza.precio}.`);
});

/*PUNTO CUATRO*/

console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`Pizza ${pizza.nombre} - Ingredientes:`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
  });
  console.log("-------");
});


import ImageTwo from "./../images/Injera-2.jpg";
import ImageOne from "./../images/Injera-1.jpg";
import { Color } from "./Color";

export const InfoData = [
  {
    title: "Welcome to Our Restaurant",
    paragraphs: [
      "Ethiopian cuisine (Amharic: የኢትዮጵያ ምግብ?) characteristically consists of vegetable and often very spicy meat dishes. This is usually in the form of wat, a thick stew, served atop injera, a large sourdough flatbread, which is about 50 centimeters (20 inches) in diameter and made out of fermented teff flour. Ethiopians eat exclusively with their right hands, using pieces of injera to pick up bites of entrées and side dishes.",
      "The cuisine is one of the world’s healthiest and most flavorful, not to mention most photogenic. Ethiopians are rightly proud of their culture and take pains to preserve traditional food ways...",
    ],
    button: true,
    buttonLabel: "Read More",
    buttonPath: "/about",
    reverse: false,
    color: Color.white,
    image: ImageOne,
    alt: "picture of ethiopian dish",
    font: Color.black,
  },
  {
    title: "Our Menu",
    paragraphs: [
      "For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates. We love food, lots of different food, just like you.",
    ],
    button: true,
    buttonLabel: "Menu",
    buttonPath: "/menu",
    reverse: true,
    image: ImageTwo,
    color: Color.black,
    font: Color.white,
    alt: "picture of ethiopian dish",
  },
];

const cilv = ["Aivars Bērziņš", "Gunārs janovskis", "Jānis Krūmiņš", "Kārlis Maska", "Ivans Timoshenko"];
const balva = ["Dators ar Ryzen 9", "SAMSUNG A70", "McLaren P1", "Mercedes-Benz AMG GT Black Series", "GOOGLE"];
const naudaKopa=100000;//kopeja summa
let uzvaretajuSkaits=5;//uzvarētāju skaits
let rand= Math.random()*5;
rand=Math.floor(rand);//noapaļo uz leju, math.floor - noapaļo uz leju
console.log(cilv[rand]);//izvada konsolē
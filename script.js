const cilv = ["Oto Bismarks", "Josifs Gubers", "Artūrs Grāvītis ", "Igors", "Ivans Timoshenko"];
const balva = ["Dators ar Ryzen 9", "SAMSUNG A70", "McLaren P1", "Mercedes-Benz AMG GT Black Series", "GOOGLE"];
const naudaKopa = 100000;//kopeja summa
let uzvaretajuSkaits = 5;//uzvarētāju skaits
let rindas = document.querySelector(".rindas");
rindas.innerHTML = " ";

for (let i = 0; i < uzvaretajuSkaits; i++) {
    //let rand = Math.random()*vardi.length;
    let rand = Math.random() * 5;
    rand = Math.floor(rand);//noapaļo uz leju, math.floor - noapaļo uz leju


    let bonus = balva[rand];
    let uzvaretajs = cilv[rand];
    rindas.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${uzvaretajs}</td>
<td>${bonus}</td>
</tr>`
}
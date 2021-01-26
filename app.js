//task 1
let massiv1 = [];
let sum1 = 0;
for (let i = 0; i<3; i++){
    massiv1[i] = Math.floor(Math.random()*198)-99;
    sum1 += massiv1;
    if (massiv1[i]>0){
        console.log(`massiv1 ${massiv1[i]}`)
    }
}
//task 2
let massiv2 = [];
let sum2 = 0;
for (let i = 0; i<3; i++){
    massiv2[i] = Math.floor(Math.random()*198)-99;
    sum2 += massiv2;
    console.log(`massiv21 ${massiv2}`)
    if (massiv2[0]  > massiv2[2]){
        let newLast = massiv2.push(massiv2[0]);
        let newFirst = massiv2.unshift(massiv2[2]);
        let deleteFirst = massiv2.splice(1, 1);
        let deleteLast = massiv2.splice(2, 1);
    }
}
console.log(`massiv22 ${massiv2}`);

//task 3
let massiv3 = [];
let sum3 = 0;

for(let i = 0; i<10; i++){
    massiv3[i] = Math.floor(Math.random()*100);
    sum3 += massiv3;
}
let max; let min;
let max3 = massiv3[0];
for(let i = 0; i<=massiv3.length; i++){
    if(max3<massiv3[i]){
        max3=massiv3[i];
        max=i;
    }
}
let min3 = massiv3[0];
for(let i = 0; i<=massiv3.length; i++){
    if(min3>massiv3[i]){
        min3=massiv3[i];
        min=i;
    }
}
console.log(massiv3)
let addMin = massiv3.splice (max, 0, min3);
let addMax = massiv3.splice (min+1, 0, max3);


console.log(max);
console.log(min);
console.log(massiv3);
'use strict'

//EJERCICIO 01
let nums = [7, 4, 0, 9, 7, 6, 3, 8]
let contador=0;
for(let i=0;i<=nums.length;i++){
    contador=i;
}

alert('Ej1 El tamaño del array '+nums+' es de '+contador+' elementos');

//EJERCICIO 02
let texto='';
nums=[0,2,4,8]
let num=0;
for(let i=0; i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        texto=texto+(nums[i]+''+nums[j]+' ')
    }
    texto= texto + '\n';
}
alert('Ej2 Resultado texto: '+'\n'+texto)

//EJERCICIO 03
nums= [0,2,4,8]
alert('Ejercicio3 : '+nums)

    for(let i=0;i<nums.length;i++){
        for(let j=i+1; j<nums.length;j++){
            alert(nums[i]+" "+nums[j]);
        }
    }

//EJERCICIO 04

nums= [2,3,6,5,0];
let indices = [];

let numSearch = Number(prompt('Ingresa el numero a buscar : '));
let aux=0;
for(let i=0; i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        aux= nums[i]+nums[j];
        if(aux == numSearch){
            indices.push(i);
            indices.push(j);
        }
    }

}
alert('Ej4 - Indices: ['+indices+']')


//Ejercicio 05

nums=[3, 5, 6, 7, 3, 5, 6, 7];
let cont=0;

for(let i=0; i<nums.length;i++){
    if(nums[i]%2 == 1){
        cont ++;
    }
}

alert('Ej5 - Cantidad de impares en el array: '+cont)


// Ejercicio 06

let name = ['a','o','l','h'];
alert('Array inicio: '+name)
aux= name[0];
name [0]=name[name.length-1]
name[name.length-1]= aux
alert('Ej6 - Array modificado: '+name)

//Ejercicio 07

let world=['o','ñ','e','l','i','u','q','a','y','a','u','g'];
alert ('Array normal: '+world);
aux='';
let size = world.length;
for(let i=0;i<(size/2);i++){
        aux=world[i];
        world[i]=world[size-1-i]
        world[size-1-i]=aux 
        aux='';
}
alert ('Ej7 - Array invertido: '+world)


//Ejercicio 08

world=['s','o','n','a','c','n','e','u','c'];

alert ('Array normal: '+world)
size = world.length-1;
aux='';
for(let i=0;i<(size/2);i++){
        aux=world[i];
        world[i]=world[size-i]
        world[size-i]=aux 
        aux='';
}
alert ('Ej8 - Array invertido: '+world)

//Ejercicio 09

nums = [0, 0, 0, 0];
alert('Array inicio: '+nums);
let val=Number(prompt('Ingrese valor: '));
for(let i=nums.length-1; i>=0;i--){
    nums[i]=val;
    val=val+val;
}
alert('Ej9 - Array final: '+nums);


//Ejercicio 10 

let binaryNumber =[0,1,0,1]
let b1,b2,b3,b4; 
let valor=0;
cont=0
for(let i=nums.length-1; i>=0;i--){
    valor=valor+binaryNumber[i]*(Math.pow(2,cont))
    cont++;
}

alert('Ej10 - Valor decimal: '+valor)






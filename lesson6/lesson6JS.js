
// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

//let array = [6,1,2,4,5,7,9,0,3,10,13,11,14,12,15,18,17,20,16,19,8]
//-- при помощи метода sort и колбека  отсортировать массив.
//let sort = array.sort((a,b)=>a-b)
//console.log(sort)
//-----------------------------------------------------------------------------------
//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//let sort = array.sort((a,b)=>b-a);
//console.log(sort);
//-----------------------------------------------------------------------------------
//-- при помощи filter получить числа кратные 3
//let filter =array.filter((value)=>{
//return value < 3
//})
//console.log(filter);
//-----------------------------------------------------------------------------------
// -- при помощи filter получить числа кратные 10
//let filter = array.filter((value) => value < 10;)
//console.log(filter);
//
//let sort = filter.sort((a,b)=>a-b)
//console.log(sort);
//------------------------------------------------------------------------------------
// -- перебрать (проитерировать) массив при помощи foreach()
//
//array.forEach(value => value.lenght)
//console.log(array);
//-----------------------------------------------------------------------------------------------------------
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//
//let map = array.map((value)=> value * 3)
//console.log(map);
//let sort = map.sort((a,b,)=>a-b);
//console.log(sort);
//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце


// - создать массив со словами на 15-20 элементов.
 //let words = ['Maksum', 'Jan', 'Fox', 'Dorian','Ana','Nataxa','Ola','Viktor','Roman','Gala','Zina','Borus','Ina','Carina','Elena','Lyda','Hana'];
//
 //words.sort()

// // -- отсортировать его по алфавиту в восходящем порядке.
// let sortD = words.sort(function (a, b) {
//     if (a < b) {
//         return -1;
//     }
//     return 1;
// })
// console.log(sortD);


// // -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortA = words.sort(function (a, b) {
//         if (a > b) {
//             return -1;
//         }
//         return 1;
//     })
// console.log(sortA);
// -- отфильтровать слова длиной менее 4х символов
//let filter = words.filter(value => value.length < 4);
//console.log(filter);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
//let map = words.map((value) => value = "!")
//console.log(map);
//
//------------------------------------------------------------------------------------------------------------------------------------
//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
//let sort1 =users.sort((a,b) => a.age - b.age)
//let sort2 = users.sort((a,b) => b.age -a.age)
////console.log(sort1);
////console.log(sort2);
////////====================================
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//let nemeArray1 = JSON.parse(JSON.stringify(users))
//let nemeArray2 = JSON.parse(JSON.stringify(users))
//
//let newArray1 = nemeArray1.sort((a,b) => a.name.length - b.name.length)
//console.log(newArray1);
//let newArray2 = nemeArray2.sort((a,b)=>b.name.length - a.name.length)
//console.log(newArray2);
//===========================================
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//
//
//let newID = users.map((user,index) =>{
//user.id = index;
//return users;
//})
//console.log(newID)
//let userID  = users.map((user,index)=>{
//
//user.id = Math.round(index) * (0,10);
//return users
//})
//console.log(userID);
//// - відсортувати його за індентифікатором
//
//let sortID = userID.sort((a,b) => a.id - b.id)
//console.log(sortID);
//===============================================================================================================================================
//===============================================================================================================================================
// -- наисать функцию калькулятора с 2мя числами и колбеком
//function conculator(a,b,callback){
//    return callback(a,b)
//}
//let result = conculator(+prompt('види число'),+prompt('види число'),(a,b)=>{
//    return a+b;
//})
//console.log(result);
//
// -- наисать функцию калькулятора с 3мя числами и колбеком
//
//function calculator(a,b,c, collback){
//    return collback(a,b,c);
//}
//let result = calculator(+prompt("+"),+prompt("+"),+prompt("+"),(a,b,c) =>{
//
//    return a + b + c ;
//})
//console.log(result);
//result = calculator(+prompt("-"),+prompt("-"),+prompt("-"),(a,b,c) =>{
//
//    return a - b - c;
//})
//console.log(result);
//
//result = calculator(+prompt("*"),+prompt("*"),+prompt("*"),(a,b,c) =>{
//    return a * b * c;
//})
//console.log(result);
//
//result = calculator(+prompt("/"),+prompt("/"),+prompt("/"),(a,b,c) =>{
//    return a / b / c;
//})
//console.log(result);
//
//
//









// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
//let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//
//// - двигун більше 3х літрів
//
//let result = cars.filter(value => value.volume >= 3);
//console.log(result)
//
//// - двигун = 2л
//
//let res = cars.filter(value  => value.volume === 2);
//console.log(res);
//
//// - виробник мерс
//
//let result = cars.filter(value => value.producer === "mercedes");
//console.log(result);
//
// - двигун більше 3х літрів + виробник мерседес
//
//let result = cars.filter(value => value.producer === "mercedes" && value.volume >= 3)
//console.log(result);
//
// - двигун більше 3х літрів + виробник субару
//
//let fiter = cars.filter(value => value.producer === "subaru" && value.power > 3);
//console.log(fiter);
//
// - сили більше ніж 300
//
//let filter = cars.filter(value => value.power >300)
//console.log(filter);
//
// - сили більше ніж 300 + виробник субару
//
//let filter = cars.filter(value => value.power > 300 && value.producer === "subaru")
//console.log(filter);
//
//мотор серіі ej
//
//let filter = cars.filter(value => value.engine.startsWith('ej'))////////  по  початкового елементу 
//console.log(filter);
////
//============================================================================================================================================================================================================================
//
// - взять слдующий массив
 //let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
///////////////////////////////////////////////
 // -- отсортировать его по id пользователей
//
//let sort = usersWithAddress.sort((a,b) => a.id -b.id);
//console.log(sort);
//
// -- отсортировать его по id пользователей в обратном опрядке
//
//let sort = usersWithAddress.sort((a,b) => b.id - a.id);
//console.log(sort);
//
// -- отсортировать его по возрасту пользователей
//
//let sort = usersWithAddress.sort((a,b) => a.age - b.age)
//console.log(sort);
//
// -- отсортировать его по возрасту пользователей в обратном порядке
//
//let cort = usersWithAddress.sort((a,b) => b.age - a.age )
//console.log(cort);
//
// -- отсортировать его по имени пользователей
//
//let sort =usersWithAddress.sort((a,b) =>{
//    if( a.name < b.name){
//return -1;
//    }
//return 1;
//})
//console.log(sort);
// -- отсортировать его по имени пользователей в обратном порядке
//let sort1 = usersWithAddress.sort((a,b) =>{
//    if(a.name > b.name){
//        return -1;
//    }
//    return 1;
//} );
// -- отсортировать его по названию улицы  в алфавитном порядке
//let sort = usersWithAddress.sort((a,b) =>{
//    if(a.address.street < b.address.street){
//        return -1
//    }
//        return 1;
//    });
//console.log(sort);
//
// -- отсортировать его по номеру дома по возрастанию
//
//let sort = usersWithAddress.sort((a,b) => a.address.number - b.address.number)
//console.log(sort);
//
// -- отфильтровать (оставить) тех кто младше 30
//let filter = usersWithAddress.filter((value) => value.age ===30)
//console.log(filter);
//
// -- отфильтровать (оставить) тех у кого отрицательный статус
//let filter = usersWithAddress.filter((velue) => velue.status === false);
//console.log(filter)

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
//let filter = usersWithAddress.filter((value)=>value.status === false && value.age < 30)
//console.log(filter);


// -- отфильтровать (оставить) тех у кого номер дома четный
//let filter = usersWithAddress.filter((value) => value.address.number % 2 == 0);
//console.log(filter);
///////////////////////////////////////////////////////////////////////////////////
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
//let  cars = [
//    {producer:"Subaru", power : 400, vlasnukCar :   {name:"Vova",age: 1991,experience: 3},price:2000,age : 2001},
//    {producer:"BMW", power : 500,    vlasnukCar :   {name:"Yluk",age: 1987,experience: 8},price:50000,age : 2018},
//    {producer:"Ford", power : 800,   vlasnukCar :   {name:"Petro",age: 1991,experience: 10},price:10000,age : 2019},
//    {producer:"Toyota", power : 300, vlasnukCar :   {name:"Taras",age: 1991,experience: 1},price:30000,age : 2001},
//    {producer:"Mersedes", power : 700, vlasnukCar:  {name:"Anton",age: 1990,experience: 7},price:40000,age : 2002},
//    {producer:"Jeep", power : 200, vlasnukCar : {name:"Ana",age: 1998,experience: 0},price:20000,age : 2014},
//    {producer:"Suzuki", power : 300, vlasnukCar :{name:"Levko",age: 2000,experience: 3},price:25000,age : 2015},
//    {producer:"LAZ", power : 800, vlasnukCar : {name:"Ivanov",age: 1967,experience: 999},price:14000,age : 2016},
//    {producer:"MAZ", power : 400, vlasnukCar : {name:"Feda",age: 1999,experience: 2},price:2000,age : 1999},
//    {producer:"ZAZ", power : 500, vlasnukCar : {name:"Griha",age: 1988,experience: 8},price:1000,age : 1987},
//    {producer:"Nuva", power : 450, vlasnukCar : {name:"Sahko",age: 1991,experience: 11},price:1500,age : 1992},
//    {producer:"Audi", power : 800, vlasnukCar : {name:"Miha",age: 1991,experience: 8},price:200000,age : 2020}
//
//
//
//
//];
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
//let changePawer = cars.map((value,index) =>{
//if(index % 2){
//value.power +=  10;
//}
//return value;
//})  
//console.log(changePawer)
//// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//
//let newdrivers = changePawer.map((value) =>{
//  value.driver = value.vlasnukCar.name;
//  return value  
//})
//console.log(newdrivers)
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
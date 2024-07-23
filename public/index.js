"use strict";
//   Infer/Implicit types(Automatic aayitt type assume akkum athan infer type)
// let userName = "Debug Media";
// let sub = 3000;
//Defining Types(Explicit Types:Manually Type kodukkanath)
// let userName: string= "Debug Media"
// let sub: Number = 3000;
// let isSubbed:Boolean = true;
// let skills: string[] = ["JS","TS","CSS"]
// let count: number[] = [1,2,3,4]
// let userDetails: {name:string,age:number,salary:number} = {
//     name:"Ashik",
//     age:26,
//     salary:150000
// };
// userDetails.age = 20
//How to run the TS file in JS
//Go to terminal -> type tsc file_name.ts -> this will create a js file automatically
//Interface concept
//(common aayitt oru type declare cheyth vekkan pattum it will act like a constructor
//pinned athinte copy eduth name kodutha mathy declare akkana property ellam avida use akkan pattum)
//nameing convention capital letter il start aakknm if it is an interface
// interface Details {
//     name:string;
//     age: number;
//     salary:number;
//     getName: ()=>void; //function oru interface in vilikkana ingna aan
// }
// let userDetails: Details ={
//     name:"Ashik",
//     age:26,
//     salary:150000,
//     getName() {
//         console.log(this.name);
//     }
// }
// let adminDetails: Details ={
//     name:"Ashik",
//     age:26,
//     salary:2500000,
//     getName() {
//         console.log(this.age);
//     }
// }
// Type(Similar to Interface)
// type anotherDetails = {
//     name:string;
//     age: number;
//     salary:number | string; //this is called UNION by using this we can give an or functionality
//                             //this is not work only on type just given here thats it
//     getName?: ()=>void; //question mark reqpresent option
// }
// let anotherUser:anotherDetails = {
//     name:"Ashik",
//     age:26,
//     salary:150000, //here number
//     getName() {
//         console.log(this.name);
//     }
// }
// let anotherUser2:anotherDetails = {
//     name:"Ashik",
//     age:26,
//     salary:"Just Five lakh per month only", //here string
//     getName() {
//         console.log(this.name);
//     }
// }
//Union
// let skills: (string | number | boolean)[] = ["A","B","C",false,1,2,3,true]
//Option(Similar to do optional chaining in JS)
// let anotherUser3:anotherDetails = {
//     name:"Ashik",
//     age:26,
//     salary:"Just Five lakh per month only", //here string
//since we have given options to functions it is not mandatory to add function here
// }
// type Details = {
//     name:string;
//     age: number;
//     salary:number;
// }
// let userDetails: Details ={
//     name:"Ashik",
//     age:26,
//     salary:150000,
// }
// function getUserName(userDetails:Details):string{ //ivide kodutha string return type aan so on next line nammal edutha data il use akkn pattana string methods mathrm aayrikkum
//     return userDetails.name
// }
// const newValue = getUserName(userDetails)
// newValue.length
// function getAge(userDetails:Details):void{ //it will return void so we use this when we dont have to return anything it is just consoling
//     console.log(userDetails.age);
// }
//Named Types(ivide kodutha sadnm mathrm access akkan pattum as option aayitt)
// type statusType = "pending" | "completed" | "failed" //used for ee spelling consistant aayitt use akknm nkil nammal ith use akkm(API fetching correct aaya nn check akkm)
// let currentStatus: statusType = "completed"
// if(currentStatus === "completed"){
//     console.log("Success");
// }else if(currentStatus === "pending"){
//     console.log("Not yet completed");
// }else{
//     console.log("Failed");
// }
// example2:
// type toggleType = "true" | "false";
// let curretToggle : toggleType = "false" 
//Function Overloading
// function add(num1:number | string,num2:number | string):number | string{//so here we give type of input and also the type of output as well
//     if(typeof num1 === "string" || typeof num2 === "string"){
//         return num1 +" "+num2;
//     }else{
//     return num1+num2;
//     }
// }
// add(2,2)
// add("22","8")
// OR (below method is what considered as best and thats how we should do)
// function add(num1: number,num2:number):number;
// function add(num1:string,num2:string):string;
// function add(num1:any,num2:any):any{
//     return num1+num2
// }
// console.log(add(2,2))
// add("22","8")
// Generics
// function add<T>(age:T):T{
//     return age
// }
// add<number>(25);
//Generic Section Two
// type UserDetail = {
//     name: string;
//     age:number;
// };
// type AdminDetail = UserDetail& { //USerDetail il ulla prop um import aavum adminil
//     role:string;
// }
// const userDet:UserDetail = {
//     name:"Ashik",
//     age:20
// }
// const adminDet:AdminDetail={ //above decleration vech declare akki 
//     name:"Mehfooz",
//     age:24,
//     role:"Administrator"
// }
//As Const(let declare akkana variable const pole act akkn or we can change it ith itta error kaanikkum change akkan nokkiya)
// let username = "Ashik" as const //(we can give like "as string","as number"...)
// username = "Killadi";
//keyof typeof
// const StatusType = {
//     PENDING: "pending",
//     COMPLETED: "completed",
//     FAILED: "failed"
// } as const  //this is one of the  utility case of const
// function getStatus(orderID:string, status: keyof typeof StatusType){
//     console.log(orderID,"==", StatusType[status]);
// }
// getStatus("214548","PENDING");
//Utility Types
//1.(So I need to make only one readonly and
// i want to edit the 0ther also this is already type so i cannot declare this as const)
// type Users ={
//     readonly name: string;
//     age?: number;//orennm mathrm aayitt optional koduth
// }
// const userDetails: Users = {
//     name:"debug media",
//     age:20,
// };
// userDetails.age = 30;
// console.log(userDetails);
// const userDet:Users = {//mukahlil ulle options use akki create akkia item age attribute illa
//     name:"Ashik"
// }
//any/unknown/never/void/null
//any - if i use any for a string value it will let me use 
//array functions on a string and wont show any error until i compile it
//unknown - aahym type kodukknm nnilla insted we can give just type as unknown and
//later we can declare that type
//     let username:unknown = "Ashik" //type unknown koduth
//     const newValue = username as String //declare akki eath type aan nn
//    console.log(newValue.length) // now i can only apply string methods here
//Never & Void 
// both used in a similar place but different context so in case of "Never" it is used in the 
// place which is gonna show  that a function will never return anything because it
// either throws an exception or it has an infinite loop.
// function neverMsg(message:string):never{
//     throw new Error(message);
// }
//in case of void it will be used in the place where their is no return
// function logMsg(message:string): void {
//     console.log(message);
// }
// logMsg("This is killadi broo");
//null
//used to let it know it is gonna return a value mentioned 0r null
let userName = null;
function get() {
    if (userName) {
        return "Hehehe";
    }
    else if (userName === null) {
        return "null aan vro";
    }
}

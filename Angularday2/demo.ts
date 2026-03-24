// function fun(a:number,b:number){
//     console.log(a+b);
// }
// fun(2,3)

// function run(myname:string ,age:number){
//     console.log("My name is :",myname,"and age is :",age)
// }
// run("prem",21)


// function returnnumber(n1:number,n2:number):number{
//     return n1*n2
// }
// console.log(returnnumber(2,3))

// function showEmpDetails(empid:number ,empName:string ,empSalary:number){
//     console.log(empid)
//     console.log(empName)
//     console.log(empSalary)
// }

// showEmpDetails(1,"Dhananjay",85000)

// let obj:{
//     name1:string,
//     age:number,
//     salary:number
// }={
//     name1:"prem",
//     age:21,
//     salary:84000
// }

// console.log(obj.name1)


// let employee={
//     id:1,
//     name1:"prem",
//     age:21,
//     salary:86000,

//             //any
//     show():unknown{
//         // console.log(this.id+this.name1+this.age+this.salary);
//         return this.id+" "+this.name1+" "+this.age+" "+this.salary
//     }
// }

// console.log(employee.show())






//creating Class******************
// class student{
//     sid:number=0;
//     sname:string="";
//     sage:number=0;
//     sdep:string="";

//     show(){
//         console.log("Student id :",this.sid);
//         console.log("Student name :"+this.sname);
//         console.log("Student age :"+this.sage);
//         console.log("Student dep :"+this.sdep);
//     }
// }

// let s1=new student();
// s1.sid=1;
// s1.sname="Dhanu";
// s1.sage=21;
// s1.sdep="IT"
// s1.show();


//create constructor************
class Product{
    // pid:number=0
    // pname:string="";
    // pprice:number=0;
    // constructor(pid:number,pname:string,pprice:number){
    //     this.pid=pid;
    //     this.pname=pname;
    //     this.pprice=pprice;
    // }

    constructor(public pid:number,public pname:string,public pprice:number){
        // console.log(this.pid," ",this.pname," ",this.pprice);
        console.log(`PID:${this.pid},PName:${this.pname},PPrice:${this.pprice}`);

    }

    display(){
        console.log(this.pid," ",this.pname," ",this.pprice);
    }
}

let p1=new Product(1,"Chair",600);



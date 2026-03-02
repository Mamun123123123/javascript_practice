function Persons(name,age,address,blood,nationality,religion){
   this.name = name;
   this.age = age
   this.address = address
   this.blood = blood
   this.nationality=nationality
   this.religion = religion
}

let person1 = new Persons("mamun",200,"Dhaka","O+","Bangladeshi","Islam")
console.log(person1);

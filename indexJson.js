let ob = {
    name:"mamun",
    age:200,
    address:"Dhaka"
}
console.log(ob,typeof ob);

let json_format = JSON.stringify(ob,typeof ob)
console.log(json_format,typeof json_format);

let parse_format = JSON.parse(json_format)
console.log(parse_format,typeof parse_format);

let obwithoutage = JSON.stringify(ob,(key,value)=>{
  if(key === "name") return "Abdullah Al Mamun";
  if(key === "age") return 22
  return value
})
console.log(obwithoutage);

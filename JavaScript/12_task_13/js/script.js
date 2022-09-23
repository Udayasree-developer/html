 for(let i=0;i<5;i++){
    console.log(i)
 }
  let cars=["BMW","VOLVO","MINI"];
  for (const name of cars) {
    console.log(name);
  }
  for(const c in cars){
    console.log(c);
  }
  cars.forEach(element => {
    console.log(element);
});
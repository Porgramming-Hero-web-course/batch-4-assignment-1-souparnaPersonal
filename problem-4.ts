type Circle = {
    shape : string
    radius:number
}

type Rectangle = {
    shape : string
    width:number
    height:number
}

const calculateShapeArea = (data : Circle | Rectangle) : number =>{
   if('radius' in data) {
    return parseFloat((Math.PI * data.radius * data.radius).toFixed(2))
   }  else {
    return data.height * data.width
   }
} 

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  
  console.log(circleArea)
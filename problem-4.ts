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
    return Math.PI * data.radius * data.radius
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
{
    // Problem 4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  type Shape = Circle | Rectangle;
  
  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    }
    return 0;
  }
  
  
  const circleArea = calculateShapeArea({ shape: "circle", radius: 8 });
  console.log(circleArea); 
  
  const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 10, height: 20 });
  console.log(rectangleArea); 
}
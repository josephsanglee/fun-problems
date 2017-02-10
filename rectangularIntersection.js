class Rectangle {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  area() {
    return (x2 - x1) * (y2 - y1);
  }

  perimeter() {
    return (x2 - x1) * 2 + (y2 - y1) * 2;
  }
}

const findIntersectingRectangle = (rect1, rect2) => {
  //specifies which rectangle is left most and right most
  //on the x-axis
  const leftMost = rect1.x1 < rect2.x1 ? rect1 : rect2;
  const rightMost = rect2.x1 > rect1.x1 ? rect2 : rect2;
  
  let x1 = Math.max(leftMost.x1, rightMost.x1);
  let y1 = Math.max(leftMost.y1, rightMost.y1);
  let x2 = Math.min(leftMost.x2, rightMost.x2);
  let y2 = Math.min(leftMost.y2, rightMost.y2);

  return new Rectangle(x1, y1, x2, y2);
};

const rect1 = new Rectangle(1, 1, 3, 3);
const rect2 = new Rectangle(2, 2, 4, 4);
const rect3 = new Rectangle(2, 4, 5, 9);
const rect4 = new Rectangle(3, 8, 10, 10);

console.log(findIntersectingRectangle(rect1, rect2));
console.log(findIntersectingRectangle(rect3, rect4)); // 3, 8, 5, 9
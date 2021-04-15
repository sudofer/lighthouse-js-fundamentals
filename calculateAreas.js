const calculateRectangleArea = (length, width) => {
  let area = '';
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return area = length * width;
  }
}

const calculateTriangleArea = (base, height) => {
  let area = '';
  if (base < 0 || height < 0) {
    return undefined;
  }
  return base * height / 2;
}

const calculateCircleArea = radius => {
  let area = '';
  if (radius < 0) {
    return undefined;
  }
  return Math.PI * (radius * radius);
}

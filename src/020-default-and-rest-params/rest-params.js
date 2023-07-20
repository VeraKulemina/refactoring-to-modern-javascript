function add(...args) {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

function multiplyWithFactor(factor =1 , ...nums) {
  let result = factor;
  for (let i = 0; i < nums.length; i++) {
    result *= nums[i];
  }
  return result;
}

export {
  add,
  multiplyWithFactor,
};

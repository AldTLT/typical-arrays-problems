
exports.min = function min(array) {
  return isEmpty(array) ? 0 : array.reduce((current, next) => {
    return current < next ? current : next;
  });
}

exports.max = function max(array) {
  return isEmpty(array) ? 0 : array.reduce((current, next) => {
    return current > next ? current : next;
  });
}

exports.avg = function avg(array) {
  return isEmpty(array) ? 0 : array.reduce((current, next) => current + next) / array.length;
}

function isEmpty(array) {
  return array == undefined || array.length == 0;
}

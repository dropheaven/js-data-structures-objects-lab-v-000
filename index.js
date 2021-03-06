const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  let newObj = Object.assign({}, driver);
  return delete newObj[key];
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
}

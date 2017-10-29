// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver, { [key]: value });
  return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const globalDriver = Object.assign(driver, { [key]: value });
  return globalDriver;
};

function deleteFromDriverByKey(driver, key) {
  const newDriver = delete driver.key;
  return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
};

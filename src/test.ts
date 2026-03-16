function getLastItem<T>(arr: T[]): T {
  return arr[arr.length - 1];
}
console.log(getLastItem(['abc','ddd','dsdd']));
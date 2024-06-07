const sum = (a: number, b: number) => {
  if (a === 0) {
    return b
  } else if (b === 0) {
    return a
  } else {
    return a + b
  }
}

export { sum }

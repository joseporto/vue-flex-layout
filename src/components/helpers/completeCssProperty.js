export default (property) => {
  let result = property
  if (['start', 'end'].indexOf(property) !== -1) {
    result = `flex-${property}`
  }
  if (['between', 'around', 'evenly'].indexOf(property) !== -1) {
    result = `space-${property}`
  }

  return result
}

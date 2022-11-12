// const arr = [' 17.17text', 'seventeen', 17, null, undefined, NaN];

const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));
const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));
const getParsedFloats = arr => arr.map(Number.parseFloat);
const getParsedFloatsV2 = arr => arr.map(parseFloat);
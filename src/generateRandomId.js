// copied from https://gist.github.com/gordonbrander/2230317
const generateRandomId = () => "" + Math.random().toString(36).substr(2, 9)

export default generateRandomId

function getPostById(idProduct) {
  return new Promise((resolve, reject) => {
    fetch(`https://my-json-server.typicode.com/JuanVidal7/mockjson/products/${idProduct}`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}

module.exports = {
  getPostById,
}

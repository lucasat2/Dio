
const{getFullName} = require("./services/product.js")

async function main() {
   
    
    const produto = await getFullName(1, "Mouse")
    console.log(produto);
}

main()


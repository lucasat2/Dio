
const{getFullName} = require("./services/product")

async function main() {
   
    
    const produto = await getFullName(1, "Mouse")
    console.log(produto);
}

main()


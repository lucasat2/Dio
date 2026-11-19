
import getFullName from "./services/product"

async function main() {
   
    
    const produto = await getFullName(1, "Mouse")
    return produto;
}

main()


import { showCatalog } from "./catalogPage.js";
import * as userService from "./services/userService.js"

export async function logout(domElement){
    await userService.logout()
        showCatalog(domElement);
    
}
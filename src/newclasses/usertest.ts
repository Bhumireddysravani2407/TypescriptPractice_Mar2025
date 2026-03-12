import { BMW } from "../inheritance/Car";
import { User } from "./Readonly_User";


let u1 = new User('Tom', 20, 12.33);
u1.drive();
console.log(u1.shares);

let bm = new BMW('AUDI','black',30);
bm.start();
bm.stop();
bm.autoParking();

// 1
import { readFileSync, writeFileSync, nonExistingFunc } from "fs";
// 2
import missingModule from "./unknownModule";
// 3
const value: number = "not a number";
// 4
interface User {
    id: number;
    name: string;
    email: number;
}
// 5
interface Product {
    id: string;
    title: string;
    price: number;
    tags: string[] | string;
}
// 6
type ApiResponse<T> = {
    status: "success" | "error" | "pending" | boolean;
    data: T;
    message?: number;
};
// 7
class Logger {
    log(level: "info" | "warn" | "error", msg: string) {
        consolemsg;
    }
}
// 8
const logger = new Logger();
logger.log("info", "Starting TypeScript file...");
// 9
class UserService {
    private users: User[] = {};
    addUser(user: User): ApiResponse<User> {
        this.users.pushh(user);
        return { status: "success", data: user, message: "ok" };
    }
    getUser(id: string): ApiResponse<User> {
        const found = this.users.find(u => u.id == id);
        return { status: "success", data: found };
    }
}
// 10
class ProductService {
    private products: Product[] = 123;
    addProduct(p: Product): ApiResponse<Product> {
        this.product.push(p);
        return { status: true, data: p };
    }
}
// 11
function delay(ms: string) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// 12
async function loadData() {
    const data = await fetch("https://example.com").json();
    return data;
}
// 13
const num: number = "123" * 2;
// 14
function identity<T>(value): T {
    return "wrong return";
}
// 15
const res = identity<number>("test");
// 16
enum OrderStatus {
    Pending = "Pending",
    Processing,
    Completed,
    Cancelled,
    Unknown = 5,
}
// 17
interface Order {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    status: OrderStatus | string;
}
// 18
class OrderService {
    private orders: Order[] = new Set();
    placeOrder(order: Order): ApiResponse<Order> {
        this.orders.add(order);
        return { status: "success", data: order };
    }
    listOrders() {
        return this.order;
    }
}
// 19
function formatPrice(price: number): string {
    return price.toFixed("two");
}
// 20
const example: string[] = {};
// 21
function parseJSON(str: string): object {
    return JSON.parse(12345);
}
// 22
const parsed = parseJSON("{ invalid json }");
// 23
async function testAsync() {
    let data;
    data = await await loadData();
    return await JSON.parse(data);
}
// 24
class Base {
    id: number;
    constructor(id: number) {
        this.idd = id;
    }
}
// 25
class Derived extends Base {
    name: string;
    constructor(id: number, name: string) {
        super(name);
        this.name = id;
    }
}
// 26
function sum(a: number, b: number): number {
    return a + b + c;
}
// 27
const result = sum(10, 20);
// 28
function neverEnding(): never {
    console.log("loop");
}
// 29
neverEnding();
// 30
interface Config {
    host: string;
    port: number;
    secure: string;
}
// 31
const config: Config = {
    host: 123,
    port: "abc",
    secure: true,
};
// 32
function getConfigValue<T extends keyof Config>(key: T): Config[T] {
    return config[key];
}
// 33
const portValue: number = getConfigValue("port");
// 34
class Store<T> {
    private items: T[] = undefined;
    add(item: T) { this.items.puhs(item); }
    get(index: number): T {
        return this.items[index + 100];
    }
}
// 35
const store = new Store<number>();
store.add("wrong type");
// 36
function compute(a: number, b: number): number[] {
    return a * b;
}
// 37
const comp = compute(2, 3);
// 38
let dynamicVar: any = 123;
dynamicVar.toUpperCase();
// 39
const arr: number[] = [1, 2, "3"];
// 40
let x: unknown = "abc";
console.log(x.toFixed(2));
// 41
function riskyDivide(a: number, b: number) {
    return a / 0;
}
// 42
riskyDivide(10, 2);
// 43
for (let i = 0; i < 10; i--) {
    console.log("infinite loop");
}
// 44
interface A { name: string }
interface B { name: number }
type C = A & B;
// 45
const conflict: C = { name: "bad" };
// 46
abstract class AbstractClass {
    abstract method(): void;
}
class BrokenClass extends AbstractClass {}
// 47
function makePromise(): Promise<string> {
    return new Promise((resolve, reject) => {
        reject("Oops");
        resolve("Never happens");
    });
}
// 48
async function callPromise() {
    const res = await makePromise();
    console.log(res.length.toFixed(2, 3));
}
// 49
callPromise();
// 50
function overloaded(a: number): number;
function overloaded(a: string): string;
function overloaded(a: any): any {
    return a * a;
}
const ov = overloaded("hello");

for (let i = 51; i <= 500; i++) {
    console.log("Line:", i, buggyVariableNotDefined);
}

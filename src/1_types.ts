const ifFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "hello Ts";

const array: string[] = ["hello", "TypeScript"];
const numberArray: number[] = [1, 2, 3, 4];
const numberArray2: Array<number> = [1, 2, 3, 4];

// Tuple
const contact: [string, number] = ["vladilen", 12345];

//Any
let variable: any = 42;
variable = "hi";
variable = [];

//
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("auto.ru");

//never
//тип который видит что будет выброшена ошибка
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {
    //этот цикл постоянно будет возращать true, поэтому он зависнет и нам нужен тип never
  }
}

//type
// создаем Элиас, мы не можем создать login2 и дать ему число.
//важно прописывать руками сразу название переменной login2 : тип login
type login = string;

const login = "admin";
// const login2: login = 2;

type SomeType = string | null | undefined;

### TS 中常用的内置的类型

```typescript
- Partial<T> // 构造一个所有属性都Type设置为可选的类型。此实用程序将返回一个表示给定类型的所有子集的类型。

- Required<T> // Type构造一个由set to required的所有属性组成的类型。的反面Partial。

- Readonly<T> // 构造一个所有属性都Type设置为的类型readonly，这意味着构造类型的属性不能重新分配。

- Record<K, T> // 构造一个对象类型，其属性键为Keys，其属性值为Type。此实用程序可用于将一种类型的属性映射到另一种类型。

- Pick<T, K> // 通过从 中选择一组属性Keys（字符串文字或字符串文字的并集）来构造类型Type。
interface Todo {
  title: string;
  description: string; 
}

type TodoPreview = Pick<Todo, 'title'>
- Omit<T, K> Type通过从中选择所有属性然后删除Keys（字符串文字或字符串文字的联合）来构造类型。

- Exclude<UnionType, ExcludedMembers> // UnionType通过从所有可分配给 的联合成员中排除来构造一个类型ExcludedMembers。
type T0 = Exclude<"a" | "b" | "c", "a">;
     
// type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
     
// type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
     
// type T2 = string | number
- Extract<Type, Union> // Type通过从可分配给 的所有联合成员中提取来构造一个类型Union。

type T0 = Extract<"a" | "b" | "c", "a" | "f">;
     
// type T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;

//type T1 = () => void

- NonNullable<Type>  // null通过 exclude和undefinedfrom构造一个类型Type。
type T0 = NonNullable<string | number | undefined>;
     
// type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
     
// type T1 = string[]
- Parameters<Type> // 从函数类型的参数中使用的类型构造元组类型Type。
declare function f1(arg: { a: number; b: string }): void;
 
type T0 = Parameters<() => string>;
     
// type T0 = []
type T1 = Parameters<(s: string) => void>;
     
// type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
     
// type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;
     
// type T3 = [arg: {
//     a: number;
//     b: string;
// }]
type T4 = Parameters<any>;
     
// type T4 = unknown[]
type T5 = Parameters<never>;
     
// type T5 = never
type T6 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
     
// type T6 = never
type T7 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.
     
// type T7 = never
- ReturnType<Type> //构造一个由 function 的返回类型组成的类型Type。
```







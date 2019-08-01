## Object.is()
与 === 的区别
```
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

## Object.defineProperty
https://imweb.io/topic/56d40adc0848801a4ba198ce
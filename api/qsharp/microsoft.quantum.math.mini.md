---
uid: Microsoft.Quantum.Math.MinI
title: MinI function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: MinI
qsharp.summary: Returns the smaller of two specified numbers.
---

# MinI function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns the smaller of two specified numbers.

```qsharp
function MinI (a : Int, b : Int) : Int
```


## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The first number to be compared.


### b : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The second number to be compared.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The smaller of `a` and `b`.

## Example

```qsharplet min = MinI(314, 271);  // 271```

## See Also

- [Microsoft.Quantum.MinD](xref:Microsoft.Quantum.MinD)
- [Microsoft.Quantum.MinL](xref:Microsoft.Quantum.MinL)
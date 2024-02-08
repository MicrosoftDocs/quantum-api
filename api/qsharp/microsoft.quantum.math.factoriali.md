---
uid: Microsoft.Quantum.Math.FactorialI
title: FactorialI function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: FactorialI
qsharp.summary: Returns the factorial of a given number.
---

# FactorialI function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the factorial of a given number.

```qsharp
function FactorialI (n : Int) : Int
```


## Description

Returns the factorial of a given nonnegative integer $n$, where $n \le 20$.

## Input

### n : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number to take the factorial of.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The factorial of `n`.

## Remarks

For inputs greater than 20, please use @"Microsoft.Quantum.Math.FactorialL".

## See Also

- [Microsoft.Quantum.Math.FactorialL](xref:Microsoft.Quantum.Math.FactorialL)
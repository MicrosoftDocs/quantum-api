---
uid: Microsoft.Quantum.Math.FactorialI
title: FactorialI function
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: FactorialI
qsharp.summary: Returns the factorial of a given number.
---

# FactorialI function

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
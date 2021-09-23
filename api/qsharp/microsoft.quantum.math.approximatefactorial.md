---
uid: Microsoft.Quantum.Math.ApproximateFactorial
title: ApproximateFactorial function
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: ApproximateFactorial
qsharp.summary: Returns an approximate factorial of a given number.
---

# ApproximateFactorial function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns an approximate factorial of a given number.

```qsharp
function ApproximateFactorial (n : Int) : Double
```


## Description

Returns the factorial as `Double`, given an input of $n$ as a `Double`.The domain of inputs for this function is `AbsD(n) < 170.0`.

## Input

### n : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number to take the approximate factorial of.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The approximate factorial of `n`.

## Remarks

This function uses the Ramanujan approximation with a relative errorto the order of $1 / n^5$.

## See Also

- [Microsoft.Quantum.Math.FactorialI](xref:Microsoft.Quantum.Math.FactorialI)
- [Microsoft.Quantum.Math.FactorialL](xref:Microsoft.Quantum.Math.FactorialL)
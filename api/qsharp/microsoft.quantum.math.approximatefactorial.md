---
uid: Microsoft.Quantum.Math.ApproximateFactorial
title: ApproximateFactorial function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: ApproximateFactorial
qsharp.summary: Returns an approximate factorial of a given number.
---

# ApproximateFactorial function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns an approximate factorial of a given number.

```qsharp
function ApproximateFactorial (n : Int) : Double
```


## Description

Returns the factorial as `Double`, given an input of $n$ as a `Double`.The domain of inputs for this function is `n < 170`.

## Input

### n : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number to take the approximate factorial of. Must not be negative.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The approximate factorial of `n`.

## Remarks

For $n \ge 10$, this function uses the Ramanujan approximation with arelative error to the order of $1 / n^5$.

## See Also

- [Microsoft.Quantum.Math.FactorialI](xref:Microsoft.Quantum.Math.FactorialI)
- [Microsoft.Quantum.Math.FactorialL](xref:Microsoft.Quantum.Math.FactorialL)
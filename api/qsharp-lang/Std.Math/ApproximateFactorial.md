---
uid: Qdk.Std.Math.ApproximateFactorial
title: ApproximateFactorial function
description: "Q# ApproximateFactorial function: Returns an approximate factorial of a given number."
ms.date: 05/29/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: ApproximateFactorial
qsharp.summary: "Returns an approximate factorial of a given number."
---

# ApproximateFactorial function

Fully qualified name: Std.Math.ApproximateFactorial

```qsharp
function ApproximateFactorial(n : Int) : Double
```

## Summary
Returns an approximate factorial of a given number.

## Description
Returns the factorial as `Double`, given an input `n`.
The domain of inputs for this function is `n <= 169`.

## Remarks
For n > 10, this function uses the Ramanujan approximation with a
relative error of the order of 1 / n⁵.

## Input
### n
The number to take the approximate factorial of. Must not be negative.

## Output
The approximate factorial of `n`.

## See Also
- [Std.Math.FactorialI](xref:Qdk.Std.Math.FactorialI)
- [Std.Math.FactorialL](xref:Qdk.Std.Math.FactorialL)

---
uid: Qdk.Std.Math.ApproximateFactorial
title: ApproximateFactorial function
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
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
- Microsoft.Quantum.Math.FactorialI
- Microsoft.Quantum.Math.FactorialL

---
uid: Qdk.Std.Math.FactorialI
title: FactorialI function
description: "Q# FactorialI function: Returns the factorial of a given number."
ms.date: 05/29/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: FactorialI
qsharp.summary: "Returns the factorial of a given number."
---

# FactorialI function

Fully qualified name: Std.Math.FactorialI

```qsharp
function FactorialI(n : Int) : Int
```

## Summary
Returns the factorial of a given number.

## Description
Returns the factorial of a given nonnegative integer n, where 0 ≤ n ≤ 20.

## Input
### n
The number to take the factorial of.

## Output
The factorial of `n`.

## Remarks
For inputs greater than 20, please use `Std.Math.FactorialL`.

## See Also
- [Std.Math.FactorialL](xref:Qdk.Std.Math.FactorialL)
- [Std.Math.ApproximateFactorial](xref:Qdk.Std.Math.ApproximateFactorial)

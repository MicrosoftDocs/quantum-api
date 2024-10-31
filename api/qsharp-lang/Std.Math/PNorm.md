---
uid: Qdk.Std.Math.PNorm
title: PNorm function
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: PNorm
qsharp.summary: "Returns the `L(p)` norm of a vector of `Double`s.  That is, given an array x of type `Double[]`, this returns the p-norm |x̄|ₚ= (∑(xᵢ)ᵖ)¹ᐟᵖ."
---

# PNorm function

Fully qualified name: Std.Math.PNorm

```qsharp
function PNorm(p : Double, array : Double[]) : Double
```

## Summary
Returns the `L(p)` norm of a vector of `Double`s.

That is, given an array x of type `Double[]`, this returns the p-norm
|x̄|ₚ= (∑(xᵢ)ᵖ)¹ᐟᵖ.

## Input
### p
The exponent p in the p-norm.

## Output
The p-norm |x̄|ₚ.

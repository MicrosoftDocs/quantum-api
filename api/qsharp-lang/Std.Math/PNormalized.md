---
uid: Qdk.Std.Math.PNormalized
title: PNormalized function
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: PNormalized
qsharp.summary: "Normalizes a vector of `Double`s in the `L(p)` norm.  That is, given an array x of type `Double[]`, this returns an array where all elements are divided by the p-norm |x̄|ₚ. Function leaves array with norm 0 unchanged."
---

# PNormalized function

Fully qualified name: Std.Math.PNormalized

```qsharp
function PNormalized(p : Double, array : Double[]) : Double[]
```

## Summary
Normalizes a vector of `Double`s in the `L(p)` norm.

That is, given an array x of type `Double[]`, this returns an array where
all elements are divided by the p-norm |x̄|ₚ.
Function leaves array with norm 0 unchanged.

## Input
### p
The exponent p in the p-norm.

## Output
The array x normalized by the p-norm |x̄|ₚ.

## See Also
- PNorm

---
uid: Qdk.Std.Math.ExtendedGreatestCommonDivisorL
title: ExtendedGreatestCommonDivisorL function
description: "Q# ExtendedGreatestCommonDivisorL function: Returns a tuple (u,v) such that u*a+v*b=GCD(a,b) Note: GCD is always positive except that GCD(0,0)=0."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: ExtendedGreatestCommonDivisorL
qsharp.summary: "Returns a tuple (u,v) such that u*a+v*b=GCD(a,b) Note: GCD is always positive except that GCD(0,0)=0."
---

# ExtendedGreatestCommonDivisorL function

Fully qualified name: Std.Math.ExtendedGreatestCommonDivisorL

```qsharp
function ExtendedGreatestCommonDivisorL(a : BigInt, b : BigInt) : (BigInt, BigInt)
```

## Summary
Returns a tuple (u,v) such that u*a+v*b=GCD(a,b)
Note: GCD is always positive except that GCD(0,0)=0.

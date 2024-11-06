---
uid: Qdk.Std.Math.IsInfinite
title: IsInfinite function
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: IsInfinite
qsharp.summary: "Returns whether a given floating-point value is either positive or negative infinity."
---

# IsInfinite function

Fully qualified name: Std.Math.IsInfinite

```qsharp
function IsInfinite(d : Double) : Bool
```

## Summary
Returns whether a given floating-point value is either positive or
negative infinity.

## Input
### d
The floating-point value to be checked.

## Output
`true` if and only if `d` is either positive or negative infinity.

## Remarks
`NaN` is not a number, and is thus neither a finite number nor
is it infinite. As such, `IsInfinite(0.0 / 0.0)` returns `false`.
To check if a value is `NaN`, use `IsNaN(d)`.

Note that even though this function returns `true` for both
positive and negative infinities, these values can still be
discriminated by checking `d > 0.0` and `d < 0.0`.

## Example
```qsharp
Message($"{IsInfinite(42.0)}"); // false
Message($"{IsInfinite(0.0 / 0.0)}"); // false
Message($"{IsInfinite(-1.0 / 0.0}"); // true
```

## See Also
- Microsoft.Quantum.Math.IsNaN

---
uid: Microsoft.Quantum.Math.IsInfinite
title: IsInfinite function
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: IsInfinite
qsharp.summary: >-
  Returns whether a given floating-point value is either positive or
  negative infinity.
---

# IsInfinite function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns whether a given floating-point value is either positive ornegative infinity.

```qsharp
function IsInfinite (d : Double) : Bool
```


## Input

### d : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The floating-point value to be checked.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)



## Example

```qsharpMessage($"{IsInfinite(42.0)}"); // falseMessage($"{IsInfinite(NaN())}"); // falseMessage($"{IsInfinite(-1.0 / 0.0}"); // true# See Also- Microsoft.Quantum.Math.NaN- Microsoft.Quantum.Math.IsNaN- Microsoft.Quantum.Math.IsFinite```

## Remarks

`NaN()` is not a number, and is thus neither a finite number noris it infinite. As such, both `IsInfinite(NaN())` and `IsFinite(NaN())`return `false`. To check a value against `NaN()`, use `IsNaN(d)`.Note that even though this function returns `true` for bothpositive and negative infinities, these values can still bediscriminated by checking `d > 0.0` and `d < 0.0`.
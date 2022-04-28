---
uid: Microsoft.Quantum.Math.NaN
title: NaN function
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: NaN
qsharp.summary: Returns a value that is not a number (i.e. NaN).
---

# NaN function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns a value that is not a number (i.e. NaN).

```qsharp
function NaN () : Double
```


## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)



## Remarks

The value output by this function follows IEEE 754 rules for how `NaN`works when used with other double-precision floating point values.For example, for any value `x` of type `Double`, `NaN() == x` is`false`; this holds even if `x` is also `NaN()`.

## See Also

- [Microsoft.Quantum.Math.IsNaN](xref:Microsoft.Quantum.Math.IsNaN)
- [Microsoft.Quantum.Math.IsInfinite](xref:Microsoft.Quantum.Math.IsInfinite)
- [Microsoft.Quantum.Math.IsFinite](xref:Microsoft.Quantum.Math.IsFinite)
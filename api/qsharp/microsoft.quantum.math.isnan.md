---
uid: Microsoft.Quantum.Math.IsNaN
title: IsNaN function
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: IsNaN
qsharp.summary: >-
  Returns whether a given floating-point value is not a number (i.e.
  is NaN).
---

# IsNaN function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns whether a given floating-point value is not a number (i.e.is NaN).

```qsharp
function IsNaN (d : Double) : Bool
```


## Input

### d : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

A floating-point value to be checked.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if `d` is not a number.

## Remarks

Since `NaN()` is the only floating-point value that does not equalitself, this function should be used instead of checking conditions suchas `d == NaN()`.

## See Also

- [Microsoft.Quantum.Math.NaN](xref:Microsoft.Quantum.Math.NaN)
- [Microsoft.Quantum.Math.IsInfinite](xref:Microsoft.Quantum.Math.IsInfinite)
- [Microsoft.Quantum.Math.IsFinite](xref:Microsoft.Quantum.Math.IsFinite)
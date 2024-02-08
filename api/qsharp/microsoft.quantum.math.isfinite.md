---
uid: Microsoft.Quantum.Math.IsFinite
title: IsFinite function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: IsFinite
qsharp.summary: Returns whether a given floating-point value is a finite number.
---

# IsFinite function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns whether a given floating-point value is a finite number.

```qsharp
function IsFinite (d : Double) : Bool
```


## Input

### d : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The floating-point value to be checked.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)



## Example

```qsharpMessage($"{IsFinite(42.0)}"); // trueMessage($"{IsFinite(NaN())}"); // falseMessage($"{IsFinite(-1.0 / 0.0)}"); // false# See Also- Microsoft.Quantum.Math.NaN- Microsoft.Quantum.Math.IsNaN- Microsoft.Quantum.Math.IsInfinite```

## Remarks

`NaN()` is not a number, and is thus neither a finite number noris it infinite. As such, both `IsInfinite(NaN())` and `IsFinite(NaN())`return `false`. To check a value against `NaN()`, use `IsNaN(d)`.
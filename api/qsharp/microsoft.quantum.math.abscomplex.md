---
uid: Microsoft.Quantum.Math.AbsComplex
title: AbsComplex function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: AbsComplex
qsharp.summary: >-
  Returns the absolute value of a complex number of type
  `Complex`.
---

# AbsComplex function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the absolute value of a complex number of type`Complex`.

```qsharp
function AbsComplex (input : Microsoft.Quantum.Math.Complex) : Double
```


## Input

### input : [Complex](xref:Microsoft.Quantum.Math.Complex)

Complex number $c = x + i y$.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Absolute value $|c| = \sqrt{x^2 + y^2}$.
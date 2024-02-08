---
uid: Microsoft.Quantum.Math.AbsComplexPolar
title: AbsComplexPolar function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: AbsComplexPolar
qsharp.summary: >-
  Returns the absolute value of a complex number of type
  `ComplexPolar`.
---

# AbsComplexPolar function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the absolute value of a complex number of type`ComplexPolar`.

```qsharp
function AbsComplexPolar (input : Microsoft.Quantum.Math.ComplexPolar) : Double
```


## Input

### input : [ComplexPolar](xref:Microsoft.Quantum.Math.ComplexPolar)

Complex number $c = r e^{i t}$.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Absolute value $|c| = r$.
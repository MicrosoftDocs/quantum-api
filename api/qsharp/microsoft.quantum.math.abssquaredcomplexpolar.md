---
uid: Microsoft.Quantum.Math.AbsSquaredComplexPolar
title: AbsSquaredComplexPolar function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: AbsSquaredComplexPolar
qsharp.summary: >-
  Returns the squared absolute value of a complex number of type
  `ComplexPolar`.
---

# AbsSquaredComplexPolar function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the squared absolute value of a complex number of type`ComplexPolar`.

```qsharp
function AbsSquaredComplexPolar (input : Microsoft.Quantum.Math.ComplexPolar) : Double
```


## Input

### input : [ComplexPolar](xref:Microsoft.Quantum.Math.ComplexPolar)

Complex number $c = r e^{i t}$.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Squared absolute value $|c|^2 = r^2$.
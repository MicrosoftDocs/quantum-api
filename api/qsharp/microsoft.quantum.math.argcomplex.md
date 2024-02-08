---
uid: Microsoft.Quantum.Math.ArgComplex
title: ArgComplex function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: ArgComplex
qsharp.summary: >-
  Returns the phase of a complex number of type
  `Complex`.
---

# ArgComplex function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the phase of a complex number of type`Complex`.

```qsharp
function ArgComplex (input : Microsoft.Quantum.Math.Complex) : Double
```


## Input

### input : [Complex](xref:Microsoft.Quantum.Math.Complex)

Complex number $c = x + i y$.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Phase $\text{Arg}[c] = \text{ArcTan}(y,x) \in (-\pi,\pi]$.
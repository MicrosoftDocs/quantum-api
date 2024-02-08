---
uid: Microsoft.Quantum.Diagnostics.NearEqualityFactCP
title: NearEqualityFactCP function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: NearEqualityFactCP
qsharp.summary: >-
  Asserts that a classical complex number has the expected value up to a
  small tolerance of 1e-10.
---

# NearEqualityFactCP function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Asserts that a classical complex number has the expected value up to asmall tolerance of 1e-10.

```qsharp
function NearEqualityFactCP (actual : Microsoft.Quantum.Math.ComplexPolar, expected : Microsoft.Quantum.Math.ComplexPolar) : Unit
```


## Input

### actual : [ComplexPolar](xref:Microsoft.Quantum.Math.ComplexPolar)

The number to be checked.


### expected : [ComplexPolar](xref:Microsoft.Quantum.Math.ComplexPolar)

The expected value.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


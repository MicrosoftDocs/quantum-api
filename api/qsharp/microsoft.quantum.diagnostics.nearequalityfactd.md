---
uid: Microsoft.Quantum.Diagnostics.NearEqualityFactD
title: NearEqualityFactD function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: NearEqualityFactD
qsharp.summary: >-
  Asserts that a classical floating point value has the expected value up to a
  small tolerance of 1e-10.
---

# NearEqualityFactD function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Asserts that a classical floating point value has the expected value up to asmall tolerance of 1e-10.

```qsharp
function NearEqualityFactD (actual : Double, expected : Double) : Unit
```


## Input

### actual : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The number to be checked.


### expected : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The expected value.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

This is equivalent to <xref:Microsoft.Quantum.Diagnostics.EqualityWithinToleranceFact> withhardcoded tolerance of $10^{-10}$.
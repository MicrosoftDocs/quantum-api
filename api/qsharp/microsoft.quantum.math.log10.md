---
uid: Microsoft.Quantum.Math.Log10
title: Log10 function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: Log10
qsharp.summary: Returns the base-10 logarithm of a specified number.
---

# Log10 function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns the base-10 logarithm of a specified number.

```qsharp
function Log10 (input : Double) : Double
```


## Input

### input : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The non-negative number whose base-10 logarithm is to be computed.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The base-10 logarithm of `input`, such that `PowD(10.0, Log10(input))`is approximately the same as `input`.

## Remarks

Note that on some execution targets, this function may be implementedby a limited-precision algorithm.
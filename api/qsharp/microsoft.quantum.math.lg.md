---
uid: Microsoft.Quantum.Math.Lg
title: Lg function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: Lg
qsharp.summary: Computes the base-2 logarithm of a number.
---

# Lg function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Computes the base-2 logarithm of a number.

```qsharp
function Lg (input : Double) : Double
```


## Input

### input : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

A real number $x$.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The base-2 logarithm $y = \log_2(x)$ such that $x = 2^y$.
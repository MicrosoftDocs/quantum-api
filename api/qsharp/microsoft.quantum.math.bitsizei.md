---
uid: Microsoft.Quantum.Math.BitSizeI
title: BitSizeI function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: BitSizeI
qsharp.summary: For a non-negative integer `a`, returns the number of bits required to represent `a`.
---

# BitSizeI function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


For a non-negative integer `a`, returns the number of bits required to represent `a`.

```qsharp
function BitSizeI (a : Int) : Int
```


## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The integer whose bit-size is to be computed.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The bit-size of `a`.

## Remarks

This function returns the smallest $n$ such that $a < 2^n$.
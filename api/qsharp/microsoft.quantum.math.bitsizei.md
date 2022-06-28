---
uid: Microsoft.Quantum.Math.BitSizeI
title: BitSizeI function
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: BitSizeI
qsharp.summary: For a non-negative integer `a`, returns the number of bits required to represent `a`.
---

# BitSizeI function

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
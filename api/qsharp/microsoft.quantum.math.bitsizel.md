---
uid: Microsoft.Quantum.Math.BitSizeL
title: BitSizeL function
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: BitSizeL
qsharp.summary: For a non-negative integer `a`, returns the number of bits required to represent `a`.
---

# BitSizeL function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


For a non-negative integer `a`, returns the number of bits required to represent `a`.

```qsharp
function BitSizeL (a : BigInt) : Int
```


## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The integer whose bit-size is to be computed.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The bit-size of `a`.

## Remarks

This function returns the smallest $n$ such that $a < 2^n$.
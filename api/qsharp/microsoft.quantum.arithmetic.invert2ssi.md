---
uid: Microsoft.Quantum.Arithmetic.Invert2sSI
title: Invert2sSI operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: Invert2sSI
qsharp.summary: Inverts a given integer modulo 2's complement.
---

# Invert2sSI operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Inverts a given integer modulo 2's complement.

```qsharp
operation Invert2sSI (xs : Microsoft.Quantum.Arithmetic.SignedLittleEndian) : Unit is Adj + Ctl
```


## Input

### xs : [SignedLittleEndian](xref:Microsoft.Quantum.Arithmetic.SignedLittleEndian)

n-bit signed integer (SignedLittleEndian), will be inverted modulo2's complement.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


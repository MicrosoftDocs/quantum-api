---
uid: Microsoft.Quantum.Arithmetic.LittleEndian
title: LittleEndian user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: LittleEndian
qsharp.summary: >-
  Register that encodes an unsigned integer in little-endian order. The
  qubit with index `0` encodes the lowest bit of an unsigned integer.
---

# LittleEndian user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Register that encodes an unsigned integer in little-endian order. Thequbit with index `0` encodes the lowest bit of an unsigned integer.

```qsharp

newtype LittleEndian = (Qubit[]);
```



## Remarks

We abbreviate `LittleEndian` as `LE` in the documentation.
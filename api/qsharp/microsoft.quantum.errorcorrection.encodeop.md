---
uid: Microsoft.Quantum.ErrorCorrection.EncodeOp
title: EncodeOp user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.ErrorCorrection
qsharp.name: EncodeOp
qsharp.summary: >-
  Represents an operation which encodes a physical register into a
  logical register, using the provided scratch qubits.

  The first argument is taken to be the physical register that will
  be encoded, while the second argument is taken to be the scratch
  register that will be used.
---

# EncodeOp user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.ErrorCorrection](xref:Microsoft.Quantum.ErrorCorrection)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents an operation which encodes a physical register into alogical register, using the provided scratch qubits.The first argument is taken to be the physical register that willbe encoded, while the second argument is taken to be the scratchregister that will be used.

```qsharp

newtype EncodeOp = (((Qubit[], Qubit[]) => Microsoft.Quantum.ErrorCorrection.LogicalRegister));
```


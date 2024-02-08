---
uid: Microsoft.Quantum.ErrorCorrection.DecodeOp
title: DecodeOp user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.ErrorCorrection
qsharp.name: DecodeOp
qsharp.summary: >-
  Represents an operation which decodes an encoded register into a
  physical register and the scratch qubits used to record a syndrome.

  The argument to a DecodeOp is the same as the return from an
  EncodeOp, and vice versa.
---

# DecodeOp user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.ErrorCorrection](xref:Microsoft.Quantum.ErrorCorrection)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents an operation which decodes an encoded register into aphysical register and the scratch qubits used to record a syndrome.The argument to a DecodeOp is the same as the return from anEncodeOp, and vice versa.

```qsharp

newtype DecodeOp = ((Microsoft.Quantum.ErrorCorrection.LogicalRegister => (Qubit[], Qubit[])));
```


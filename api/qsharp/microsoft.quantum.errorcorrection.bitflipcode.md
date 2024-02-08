---
uid: Microsoft.Quantum.ErrorCorrection.BitFlipCode
title: BitFlipCode function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.ErrorCorrection
qsharp.name: BitFlipCode
qsharp.summary: >-
  Returns a QECC value representing the ⟦3, 1, 1⟧ bit flip code encoder and
  decoder with in-place syndrome measurement.
---

# BitFlipCode function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.ErrorCorrection](xref:Microsoft.Quantum.ErrorCorrection)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a QECC value representing the ⟦3, 1, 1⟧ bit flip code encoder anddecoder with in-place syndrome measurement.

```qsharp
function BitFlipCode () : Microsoft.Quantum.ErrorCorrection.QECC
```


## Output : [QECC](xref:Microsoft.Quantum.ErrorCorrection.QECC)

Returns an implementation of a quantum error correction code byspecifying a `QECC` type.
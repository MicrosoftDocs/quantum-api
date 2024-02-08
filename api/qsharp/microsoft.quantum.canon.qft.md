---
uid: Microsoft.Quantum.Canon.QFT
title: QFT operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: QFT
qsharp.summary: >-
  Performs the Quantum Fourier Transform on a quantum register containing an
  integer in the big-endian representation.
---

# QFT operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Performs the Quantum Fourier Transform on a quantum register containing aninteger in the big-endian representation.

```qsharp
operation QFT (qs : Microsoft.Quantum.Arithmetic.BigEndian) : Unit is Adj + Ctl
```


## Input

### qs : [BigEndian](xref:Microsoft.Quantum.Arithmetic.BigEndian)

Quantum register to which the Quantum Fourier Transform is applied



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

The input and output are assumed to be in big endian encoding.

## See Also

- [Microsoft.Quantum.Canon.ApplyQuantumFourierTransformBE](xref:Microsoft.Quantum.Canon.ApplyQuantumFourierTransformBE)
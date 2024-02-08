---
uid: Microsoft.Quantum.ErrorCorrection.SteaneCodeEncoderImpl
title: SteaneCodeEncoderImpl operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.ErrorCorrection
qsharp.name: SteaneCodeEncoderImpl
qsharp.summary: Private operation used to implement both the Steane code encoder and decoder.
---

# SteaneCodeEncoderImpl operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.ErrorCorrection](xref:Microsoft.Quantum.ErrorCorrection)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Private operation used to implement both the Steane code encoder and decoder.

```qsharp
operation SteaneCodeEncoderImpl (data : Qubit[], scratch : Qubit[]) : Unit is Adj
```


## Input

### data : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

an array holding 1 qubit which is the input qubit.


### scratch : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

an array holding 6 qubits which add redundancy.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


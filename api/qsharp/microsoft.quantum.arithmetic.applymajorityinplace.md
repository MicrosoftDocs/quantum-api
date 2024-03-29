---
uid: Microsoft.Quantum.Arithmetic.ApplyMajorityInPlace
title: ApplyMajorityInPlace operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: ApplyMajorityInPlace
qsharp.summary: >-
  Applies the three-qubit majority operation in-place on a register of
  qubits.
---

# ApplyMajorityInPlace operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies the three-qubit majority operation in-place on a register ofqubits.

```qsharp
operation ApplyMajorityInPlace (output : Qubit, input : Qubit[]) : Unit is Adj + Ctl
```


## Description

This operation computes the majority function in-place on 3 qubits.If we denote output qubit as $z$ and input qubits as $x$ and $y$,the operation performs the following transformation:$\ket{xyz} \rightarrow \ket{x \oplus z} \ket{y \oplus z} \ket{\operatorname{MAJ} (x, y, z)}$.

## Input

### output : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

First input qubit. Note that the output is computed in-placeand stored in this qubit.


### input : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Second and third input qubits.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


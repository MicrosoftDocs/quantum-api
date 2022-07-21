---
uid: Microsoft.Quantum.Chemistry.JordanWigner.SelectZ
title: SelectZ operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Chemistry.JordanWigner
qsharp.name: SelectZ
qsharp.summary: >-
  Applies a Z operation to a qubit indicated by the state of another
  register.
---

# SelectZ operation

Namespace: [Microsoft.Quantum.Chemistry.JordanWigner](xref:Microsoft.Quantum.Chemistry.JordanWigner)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Applies a Z operation to a qubit indicated by the state of anotherregister.

```qsharp
operation SelectZ (indexRegister : Microsoft.Quantum.Arithmetic.LittleEndian, targetRegister : Qubit[]) : Unit is Adj + Ctl
```


## Description

The operation can be represented by a unitary matrix $U$ that appliesthe @"Microsoft.Quantum.Intrinsic.Z" operation on a qubit $p$conditioned on an index state $\ket{p}$. That is,$$\begin{align}U\ket{p}\ket{\psi} = \ket{p}Z\_p\ket{\psi}.\end{align}$$

## Input

### indexRegister : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

A register in the state $\ket{p}$, determining the qubit on which $Z$ is applied.


### targetRegister : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Register of qubits on which the Pauli operators are applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


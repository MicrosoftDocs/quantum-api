---
uid: Microsoft.Quantum.Canon.ApplyCNOTChain
title: ApplyCNOTChain operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyCNOTChain
qsharp.summary: Computes the parity of a register of qubits in-place.
---

# ApplyCNOTChain operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Computes the parity of a register of qubits in-place.

```qsharp
operation ApplyCNOTChain (qubits : Qubit[]) : Unit is Adj + Ctl
```


## Description

This operation transforms the state of its input as$$\begin{align}\ket{q_0} \ket{q_1} \cdots \ket{q_{n - 1}} & \mapsto\ket{q_0} \ket{q_0 \oplus q_1} \ket{q_0 \oplus q_1 \oplus q_2} \cdots\ket{q_0 \oplus \cdots \oplus q_{n - 1}}.\end{align}$$

## Input

### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Array of qubits whose parity is to be computed and stored.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


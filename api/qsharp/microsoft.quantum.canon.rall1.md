---
uid: Microsoft.Quantum.Canon.RAll1
title: RAll1 operation
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: RAll1
qsharp.summary: Rotates the all-ones state by a given phase.
---

# RAll1 operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Rotates the all-ones state by a given phase.

```qsharp
operation RAll1 (phase : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Description

This operation can be simulated by the unitary matrix$R=\boldone - (1 - e^{i \phi})\ket{1\cdots 1}\bra{1\cdots 1}$.

## Input

### phase : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The phase $\phi$ applied to the all-ones state $\ket{1\cdots 1}$.


### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

The register whose state is to be rotated by $R$.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


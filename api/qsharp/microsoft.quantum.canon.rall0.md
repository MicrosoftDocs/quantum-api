---
uid: Microsoft.Quantum.Canon.RAll0
title: RAll0 operation
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: RAll0
qsharp.summary: Rotates the all-zeros state by a given phase.
---

# RAll0 operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Rotates the all-zeros state by a given phase.

```qsharp
operation RAll0 (phase : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Description

This operation can be simulated by the unitary matrix$R=\boldone - (1 - e^{i \phi})\ket{0\cdots 0}\bra{0\cdots 0}$.

## Input

### phase : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The phase $\phi$ applied to the all-zeros state $\ket{0\cdots 0}$.


### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

The register whose state is to be rotated by $R$.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


---
uid: Microsoft.Quantum.Intrinsic.Rzz
title: Rzz operation
ms.date: 5/31/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Rzz
qsharp.summary: Applies the two qubit Ising $ZZ$ rotation gate.
---

# Rzz operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type3.Core](https://nuget.org/packages/Microsoft.Quantum.Type3.Core)


Applies the two qubit Ising $ZZ$ rotation gate.

```qsharp
operation Rzz (theta : Double, qubit0 : Qubit, qubit1 : Qubit) : Unit is Adj + Ctl
```


## Description

\begin{align}R_zz(\theta) \mathrel{:=}\begin{bmatrix}e^{-i \theta / 2} & 0 & 0 & 0 \\\\0 & e^{i \theta / 2} & 0 & 0 \\\\0 & 0 & e^{i \theta / 2} & 0 \\\\0 & 0 & 0 & e^{-i \theta / 2}\end{bmatrix}.\end{align}

## Input

### theta : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The angle about which the qubits are rotated.


### qubit0 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The first qubit input to the gate.


### qubit1 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The second qubit input to the gate.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


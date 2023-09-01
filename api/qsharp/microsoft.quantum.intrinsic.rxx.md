---
uid: Microsoft.Quantum.Intrinsic.Rxx
title: Rxx operation
ms.date: 09/01/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: Applies the two qubit Ising $XX$ rotation gate.
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Rxx
qsharp.summary: Applies the two qubit Ising $XX$ rotation gate.
---

# Rxx operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Applies the two qubit Ising $XX$ rotation gate.

```qsharp
operation Rxx (theta : Double, qubit0 : Qubit, qubit1 : Qubit) : Unit is Adj + Ctl
```


## Description

\begin{align}R_xx(\theta) \mathrel{:=}\begin{bmatrix}\cos \theta & 0 & 0 & -i\sin \theta  \\\\0 & \cos \theta & -i\sin \theta & 0  \\\\0 & -i\sin \theta & \cos \theta & 0  \\\\-i\sin \theta & 0 & 0 & \cos \theta\end{bmatrix}.\end{align}

## Input

### theta : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The angle about which the qubits are rotated.


### qubit0 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The first qubit input to the gate.


### qubit1 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The second qubit input to the gate.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


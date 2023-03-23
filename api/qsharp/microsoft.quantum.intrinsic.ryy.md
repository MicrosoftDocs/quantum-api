---
uid: Microsoft.Quantum.Intrinsic.Ryy
title: Ryy operation
ms.date: 3/23/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Ryy
qsharp.summary: Applies the two qubit Ising $YY$ rotation gate.
---

# Ryy operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type3.Core](https://nuget.org/packages/Microsoft.Quantum.Type3.Core)


Applies the two qubit Ising $YY$ rotation gate.

```qsharp
operation Ryy (theta : Double, qubit0 : Qubit, qubit1 : Qubit) : Unit is Adj + Ctl
```


## Description

\begin{align}R_yy(\theta) \mathrel{:=}\begin{bmatrix}\cos \theta & 0 & 0 & i\sin \theta  \\\\0 & \cos \theta & -i\sin \theta & 0  \\\\0 & -i\sin \theta & \cos \theta & 0  \\\\i\sin \theta & 0 & 0 & \cos \theta\end{bmatrix}.\end{align}

## Input

### theta : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The angle about which the qubits are rotated.


### qubit0 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The first qubit input to the gate.


### qubit1 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The second qubit input to the gate.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


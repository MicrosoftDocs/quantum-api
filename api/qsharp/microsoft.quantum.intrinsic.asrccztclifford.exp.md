---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.Exp
title: Exp operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: Exp
qsharp.summary: >-
  Applies the exponential of a multi-qubit Pauli operator.

  \begin{align}
  e^{i \theta [P_0 \otimes P_1 \cdots P_{N-1}]},
  \end{align}
  where $P_i$ is the $i$th element of `paulis`, and where
  $N = $`Length(paulis)`.
---

# Exp operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies the exponential of a multi-qubit Pauli operator.\begin{align}e^{i \theta [P_0 \otimes P_1 \cdots P_{N-1}]},\end{align}where $P_i$ is the $i$th element of `paulis`, and where$N = $`Length(paulis)`.

```qsharp
operation Exp (paulis : Pauli[], theta : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### paulis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)[]

Array of single-qubit Pauli values indicating the tensor productfactors on each qubit.


### theta : [Double](xref:microsoft.quantum.lang-ref.double)

Angle about the given multi-qubit Pauli operator by which thetarget register is to be rotated.


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Register to apply the given rotation to.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)


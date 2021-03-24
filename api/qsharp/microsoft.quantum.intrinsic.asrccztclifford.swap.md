---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.SWAP
title: SWAP operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: SWAP
qsharp.summary: >-
  Applies the SWAP gate to a pair of qubits.

  \begin{align}
  \operatorname{SWAP} \mathrel{:=}
  \begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 0 & 1 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & 0 & 1
  \end{bmatrix},
  \end{align}

  where rows and columns are ordered as in the quantum concepts guide.
---

# SWAP operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies the SWAP gate to a pair of qubits.\begin{align}\operatorname{SWAP} \mathrel{:=}\begin{bmatrix}1 & 0 & 0 & 0 \\\\0 & 0 & 1 & 0 \\\\0 & 1 & 0 & 0 \\\\0 & 0 & 0 & 1\end{bmatrix},\end{align}where rows and columns are ordered as in the quantum concepts guide.

```qsharp
operation SWAP (qubit0 : Qubit, qubit1 : Qubit) : Unit is Adj + Ctl
```


## Input

### qubit0 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### qubit1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

First qubit to be swapped.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Equivalent to:```qsharpCNOT(qubit1, qubit2);CNOT(qubit2, qubit1);CNOT(qubit1, qubit2);```
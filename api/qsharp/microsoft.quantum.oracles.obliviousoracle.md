---
uid: Microsoft.Quantum.Oracles.ObliviousOracle
title: ObliviousOracle user defined type
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Oracles
qsharp.name: ObliviousOracle
qsharp.summary: Represents an oracle for oblivious amplitude amplification.
---

# ObliviousOracle user defined type

Namespace: [Microsoft.Quantum.Oracles](xref:Microsoft.Quantum.Oracles)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents an oracle for oblivious amplitude amplification.

```qsharp

newtype ObliviousOracle = (((Qubit[], Qubit[]) => Unit is Adj + Ctl));
```



## Description

The inputs to the oracle $O$ are:- The ancilla register $a$ that $O$ acts on.- The system register $s$ on which the desired unitary $U$ is applied, post-selected on register $a$ being in state $\ket{t}\_a$.

## Remarks

This oracle defined by$$O\ket{s}\_a\ket{\psi}\_s= \lambda\ket{t}\_a U \ket{\psi}\_s + \sqrt{1-|\lambda|^2}\ket{t^\perp}\_a\cdots$$acts on the ancilla state $\ket{s}\_a$ to implement the unitary $U$ on any system state $\ket{\psi}\_s$ with amplitude $\lambda$ in the basis flagged by $\ket{t}\_a$.The first parameter is the qubit register of $\ket{s}\_a$. The second parameter is the qubit register of $\ket{\psi}\_s$.
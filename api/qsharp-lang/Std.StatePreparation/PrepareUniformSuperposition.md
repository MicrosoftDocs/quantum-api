---
uid: Qdk.Std.StatePreparation.PrepareUniformSuperposition
title: PrepareUniformSuperposition operation
description: "Q# PrepareUniformSuperposition operation: Prepares a uniform superposition of states that represent integers 0 through `nStates - 1` in a little-endian `qubits` register."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.StatePreparation
qsharp.name: PrepareUniformSuperposition
qsharp.summary: "Prepares a uniform superposition of states that represent integers 0 through `nStates - 1` in a little-endian `qubits` register."
---

# PrepareUniformSuperposition operation

Fully qualified name: Std.StatePreparation.PrepareUniformSuperposition

```qsharp
operation PrepareUniformSuperposition(nStates : Int, qubits : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Prepares a uniform superposition of states that represent integers 0 through
`nStates - 1` in a little-endian `qubits` register.

## Description
Given an input state $\ket{0\cdots 0}$ this operation prepares
a uniform superposition of all number states $0$ to $M-1$. In other words,
$$
\begin{align}
    \ket{0} \mapsto \frac{1}{\sqrt{M}} \sum_{j=0}^{M - 1} \ket{j}
\end{align}
$$

The operation is adjointable, but requires that `qubits` register is in a
uniform superposition over the first `nStates` basis states in that case.

## Input
### nStates
The number of states in the uniform superposition to be prepared.
### register
The little-endian qubit register to store the prepared state.
It is assumed to be initialized in the zero state $\ket{0\cdots 0}$.
This register must be long enough to store the number $M-1$, meaning that
$2^{Length(qubits)} >= M$.

## Example
```qsharp
   use qs = Qubit[4];
   PrepareUniformSuperposition(3, qs);
   DumpRegister(qs); // The state is (|0000>+|0100>+|1000>)/√3
   ResetAll(qs);
```

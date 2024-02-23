---
uid: Qdk.Microsoft.Quantum.Intrinsic.R
title: R operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: R
qsharp.summary: Applies a rotation about the given Pauli axis.
---

# R operation

Namespace: Microsoft.Quantum.Intrinsic

```qsharp
operation R(pauli : Pauli, theta : Double, qubit : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies a rotation about the given Pauli axis.

## Input
### pauli
Pauli operator (μ) to be exponentiated to form the rotation.
### theta
Angle in radians about which the qubit is to be rotated.
### qubit
Qubit to which the gate should be applied.

## Remarks
$$
\begin{align}
    R_{\mu}(\theta) \mathrel{:=}
    e^{-i \theta \sigma_{\mu} / 2},
\end{align}
$$
where $\mu \in \{I, X, Y, Z\}$.

When called with `pauli = PauliI`, this operation applies
a *global phase*. This phase can be significant
when used with the `Controlled` functor.

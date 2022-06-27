---
uid: Microsoft.Quantum.Simulation.TimeDependentBlockEncoding
title: TimeDependentBlockEncoding user defined type
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: TimeDependentBlockEncoding
qsharp.summary: Represents a `BlockEncoding` that is controlled by a clock register.
---

# TimeDependentBlockEncoding user defined type

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a `BlockEncoding` that is controlled by a clock register.

```qsharp

newtype TimeDependentBlockEncoding = (((Qubit[], Qubit[], Qubit[]) => Unit is Adj + Ctl));
```



## Description

An operation marked as a `TimeDependentBlockEncoding` can berepresented by a unitary matrix $U$ controlled by a state$\ket{k}_d$ in clock register `d` such that an arbitrary operator $H_k$ ofinterest that acts on the system register `s` is encoded in the top-left block corresponding to auxiliary state $\ket{0}_a$. That is,$$\begin{align}(\bra{0}\_a\otimes I_{ds})U(\ket{0}\_a\otimes I_{ds}) = \sum_{k}\ket{k}\bra{k}\_d\otimes H_k.\end{align}$$.The inputs to the operation wrapped by this user-defined type are:- An array of qubits representing the time register that controls $H_k$.- An array of qubits representing the auxiliary register acted on by $U$.  The action of $U$ is only defined when this is $\ket{0}_a$.- An array of qubits representing the system register acted on by $H$.
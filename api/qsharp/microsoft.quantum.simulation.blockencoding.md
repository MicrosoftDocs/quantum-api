---
uid: Microsoft.Quantum.Simulation.BlockEncoding
title: BlockEncoding user defined type
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: BlockEncoding
qsharp.summary: >-
  Represents a unitary where an arbitrary operator of
  interest is encoded in the top-left block.
---

# BlockEncoding user defined type

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a unitary where an arbitrary operator ofinterest is encoded in the top-left block.

```qsharp

newtype BlockEncoding = (((Qubit[], Qubit[]) => Unit is Adj + Ctl));
```



## Description

A unitary operation that can be represented by a unitary matrix $U$where an arbitrary operator $H$ ofinterest that acts on the system register `s` is encoded in the top-left block corresponding to auxiliary state $\ket{0}_a$. That is,$$\begin{align}(\bra{0}_a\otimes I_s)U(\ket{0}_a\otimes I_s) = H\end{align}$$.The inputs to this callable are:- An array of qubits representing the auxiliary register acted on by $U$.  Note that the action of $U$ is only defined when this register is  in the state $\ket{0}_a$.- An array of qubits representing the system register acted on by $H$.

## See Also

- [Microsoft.Quantum.Simulation.BlockEncodingReflection](xref:Microsoft.Quantum.Simulation.BlockEncodingReflection)
- [Microsoft.Quantum.Simulation.TimeDependentBlockEncoding](xref:Microsoft.Quantum.Simulation.TimeDependentBlockEncoding)
---
uid: Microsoft.Quantum.Simulation.BlockEncodingReflection
title: BlockEncodingReflection user defined type
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: BlockEncodingReflection
qsharp.summary: Represents a `BlockEncoding` that is also a reflection.
---

# BlockEncodingReflection user defined type

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a `BlockEncoding` that is also a reflection.

```qsharp

newtype BlockEncodingReflection = (Microsoft.Quantum.Simulation.BlockEncoding);
```



## Description

A unitary operation that can be represented by a unitary matrix $U$where an arbitrary operator $H$ ofinterest that acts on the system register `s` is encoded in the top-left block corresponding to auxiliary state $\ket{0}_a$. That is,$$\begin{align}(\bra{0}_a\otimes I_s)U(\ket{0}_a\otimes I_s) = H\end{align}$$.The inputs to this callable are:- An array of qubits representing the auxiliary register acted on by $U$.  Note that the action of $U$ is only defined when this register is  in the state $\ket{0}_a$.- An array of qubits representing the system register acted on by $H$.

## See Also

- [Microsoft.Quantum.Simulation.BlockEncoding](xref:Microsoft.Quantum.Simulation.BlockEncoding)
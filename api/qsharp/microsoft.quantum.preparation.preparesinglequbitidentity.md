---
uid: Microsoft.Quantum.Preparation.PrepareSingleQubitIdentity
title: PrepareSingleQubitIdentity operation
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Preparation
qsharp.name: PrepareSingleQubitIdentity
qsharp.summary: Prepares a qubit in the maximally mixed state.
---

# PrepareSingleQubitIdentity operation

Namespace: [Microsoft.Quantum.Preparation](xref:Microsoft.Quantum.Preparation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Prepares a qubit in the maximally mixed state.

```qsharp
operation PrepareSingleQubitIdentity (qubit : Qubit) : Unit
```


## Description

Prepares the given qubit in the $\boldone / 2$ state by applying the depolarizing channel$$\begin{align}\Omega(\rho) \mathrel{:=} \frac{1}{4} \sum_{\mu \in \{0, 1, 2, 3\}} \sigma\_{\mu} \rho \sigma\_{\mu}^{\dagger},\end{align}$$where $\sigma\_i$ is the $i$th Pauli operator, and where$\rho$ is a density operator representing a mixed state.

## Input

### qubit : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

A qubit whose state is to be depolarized in the mannerdescribed above.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

The mixed state $\boldone / 2$ describing the result ofapplying this operation to a state implicitly describesan expectation value over random choices made in this operation.Thus, for any single application, this operation maps pure statesto pure states, but it acts as described in expectation.In particular, this operation can be used in process tomographyto measure the *non-unital* components of a channel.
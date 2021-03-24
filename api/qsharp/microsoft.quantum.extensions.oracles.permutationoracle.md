---
uid: Microsoft.Quantum.Extensions.Oracles.PermutationOracle
title: PermutationOracle operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Extensions.Oracles
qsharp.name: PermutationOracle
qsharp.summary: Apply a classical permutation oracle to two registers.
---

# PermutationOracle operation

Namespace: [Microsoft.Quantum.Extensions.Oracles](xref:Microsoft.Quantum.Extensions.Oracles)

Package: [OracleEmulation](https://nuget.org/packages/OracleEmulation)


Apply a classical permutation oracle to two registers.

```qsharp
operation PermutationOracle (oracle : ((Int, Int) -> Int), xbits : Qubit[], ybits : Qubit[]) : Unit is Adj
```


## Description

The effect of the oracle is a permutation of basis states according tothe provided classical function:$$\begin{align}\ket{x}\ket{y}\ket{w} \rightarrow \ket{x}\ket{f(x, y)}\ket{w},\end{align}$$with registers x, y, w and the oracle function f.

## Input

### oracle : ([Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int)) -> [Int](xref:microsoft.quantum.lang-ref.int)

A function that defines the action of the oracle on the computationalbasis states of the two registers x, y. The mapping$$\begin{align}$(x, y) \rightarrow (x, z=f(x, y))$\end{align}$$must be a bijective mapping on the basis states.


### xbits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Input register x.


### ybits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Output register y.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)


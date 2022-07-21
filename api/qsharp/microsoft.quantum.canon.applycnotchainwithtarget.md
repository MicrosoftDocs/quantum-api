---
uid: Microsoft.Quantum.Canon.ApplyCNOTChainWithTarget
title: ApplyCNOTChainWithTarget operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyCNOTChainWithTarget
qsharp.summary: Computes the parity of an array of qubits into a target qubit.
---

# ApplyCNOTChainWithTarget operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Computes the parity of an array of qubits into a target qubit.

```qsharp
operation ApplyCNOTChainWithTarget (qubits : Qubit[], targetQubit : Qubit) : Unit is Adj + Ctl
```


## Description

If the array is initially in the state$\ket{q_0} \ket{q_1} \cdots \ket{q_{\text{target}}}$,the final state is given by$\ket{q_0} \ket{q_1 \oplus q_0} \cdots \ket{q_{n - 1} \oplus \cdots \oplus q_0 \oplus q_{\text{target}}}$.

## Input

### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Array of qubits on which the parity is computed.


### targetQubit : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Final qubit into which the parity of 'qubits' is XORed.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

The following are equivalent:```qsharpApplyCNOTChainWithTarget(Most(qs), Tail(qs));```and```qsharpApplyCNOTChain(qs);```
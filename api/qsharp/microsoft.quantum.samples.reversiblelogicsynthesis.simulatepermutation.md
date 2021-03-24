---
uid: Microsoft.Quantum.Samples.ReversibleLogicSynthesis.SimulatePermutation
title: SimulatePermutation operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.ReversibleLogicSynthesis
qsharp.name: SimulatePermutation
qsharp.summary: >-
  Takes as input a permutation, finds a quantum circuit using
  transformation-based synthesis, and checks whether the circuit realizes
  the input permutation.
---

# SimulatePermutation operation

Namespace: [Microsoft.Quantum.Samples.ReversibleLogicSynthesis](xref:Microsoft.Quantum.Samples.ReversibleLogicSynthesis)

Package: [ReversibleLogicSynthesis](https://nuget.org/packages/ReversibleLogicSynthesis)


Takes as input a permutation, finds a quantum circuit usingtransformation-based synthesis, and checks whether the circuit realizesthe input permutation.

```qsharp
operation SimulatePermutation (perm : Int[]) : Bool
```


## Input

### perm : [Int](xref:microsoft.quantum.lang-ref.int)[]

A permutation of 2^𝑛 elements starting from 0.



## Output : [Bool](xref:microsoft.quantum.lang-ref.bool)

True, if the circuit correctly implements the permutation.

## Remarks

Details on reversible logic synthesis and the operationthat applies a permutation to the quantum state can be foundin the Q# Standard library:https://github.com/microsoft/QuantumLibraries/blob/main/Standard/src/Synthesis/TransformationBased.qs
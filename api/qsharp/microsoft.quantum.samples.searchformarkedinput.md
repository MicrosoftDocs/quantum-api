---
uid: Microsoft.Quantum.Samples.SearchForMarkedInput
title: SearchForMarkedInput operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples
qsharp.name: SearchForMarkedInput
qsharp.summary: >-
  This operation applies Grover's algorithm to search all possible inputs
  to an operation to find a particular marked state.
---

# SearchForMarkedInput operation

Namespace: [Microsoft.Quantum.Samples](xref:Microsoft.Quantum.Samples)

Package: [Grover](https://nuget.org/packages/Grover)


This operation applies Grover's algorithm to search all possible inputsto an operation to find a particular marked state.

```qsharp
operation SearchForMarkedInput (nQubits : Int, idxMarked : Int) : Result[]
```


## Input

### nQubits : [Int](xref:microsoft.quantum.lang-ref.int)

The number of qubits to allocate.


### idxMarked : [Int](xref:microsoft.quantum.lang-ref.int)

The index of the marked item to be found.



## Output : __invalid<Result>__[]

The computational basis state found in the final measurement.

## Remarks

If the operation worked correctly, the output should be a little-endianrepresentation of `idxMarked`.
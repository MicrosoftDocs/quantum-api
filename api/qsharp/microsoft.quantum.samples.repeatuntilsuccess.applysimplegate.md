---
uid: Microsoft.Quantum.Samples.RepeatUntilSuccess.ApplySimpleGate
title: ApplySimpleGate operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.RepeatUntilSuccess
qsharp.name: ApplySimpleGate
qsharp.summary: Apply (I + i√2X)/√3 on qubits using repeat until success algorithm.
---

# ApplySimpleGate operation

Namespace: [Microsoft.Quantum.Samples.RepeatUntilSuccess](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess)

Package: [RepeatUntilSuccess](https://nuget.org/packages/RepeatUntilSuccess)


Apply (I + i√2X)/√3 on qubits using repeat until success algorithm.

```qsharp
operation ApplySimpleGate (inputBasis : Pauli, inputValue : Bool, limit : Int, register : Qubit[]) : (Bool, Int)
```


## Input

### inputBasis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli basis in which to prepare input qubit


### inputValue : [Bool](xref:microsoft.quantum.lang-ref.bool)

Boolean value for input qubit (true maps to One, false maps to Zero)


### limit : [Int](xref:microsoft.quantum.lang-ref.int)

Integer limit to number of repeats of circuit


### register : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Qubit register including auxiliary and target qubits



## Output : ([Bool](xref:microsoft.quantum.lang-ref.bool),[Int](xref:microsoft.quantum.lang-ref.int))

Tuple of (success, numIter) where success = false if the number ofiterations (numIter) exceeds the input <limit>
---
uid: Microsoft.Quantum.Samples.RepeatUntilSuccess.ApplyRzArcTan2
title: ApplyRzArcTan2 operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.RepeatUntilSuccess
qsharp.name: ApplyRzArcTan2
qsharp.summary: Apply Rz(arctan(2)) on qubits using repeat until success algorithm.
---

# ApplyRzArcTan2 operation

Namespace: [Microsoft.Quantum.Samples.RepeatUntilSuccess](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess)

Package: [RepeatUntilSuccess](https://nuget.org/packages/RepeatUntilSuccess)


Apply Rz(arctan(2)) on qubits using repeat until success algorithm.

```qsharp
operation ApplyRzArcTan2 (inputBasis : Pauli, inputValue : Bool, limit : Int, auxiliary : Qubit, resource : Qubit, target : Qubit) : (Bool, Int)
```


## Input

### inputBasis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli basis in which to prepare input qubit


### inputValue : [Bool](xref:microsoft.quantum.lang-ref.bool)

Boolean value for input qubit (true maps to One, false maps to Zero)


### limit : [Int](xref:microsoft.quantum.lang-ref.int)

Integer limit to number of repeats of circuit


### auxiliary : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Auxiliary qubit


### resource : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Resource qubit


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Target qubit



## Output : ([Bool](xref:microsoft.quantum.lang-ref.bool),[Int](xref:microsoft.quantum.lang-ref.int))

Tuple of (success, numIter) where success = false if the number ofiterations (numIter) exceeds the input <limit>
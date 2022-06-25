---
uid: Microsoft.Quantum.MachineLearning.LocalRotationsLayer
title: LocalRotationsLayer function
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.MachineLearning
qsharp.name: LocalRotationsLayer
qsharp.summary: >-
  Returns an array of uncontrolled (single-qubit) rotations along a given
  axis, with one rotation for each qubit in a register, parameterized by
  distinct model parameters.
---

# LocalRotationsLayer function

Namespace: [Microsoft.Quantum.MachineLearning](xref:Microsoft.Quantum.MachineLearning)

Package: [Microsoft.Quantum.MachineLearning](https://nuget.org/packages/Microsoft.Quantum.MachineLearning)


Returns an array of uncontrolled (single-qubit) rotations along a givenaxis, with one rotation for each qubit in a register, parameterized bydistinct model parameters.

```qsharp
function LocalRotationsLayer (nQubits : Int, axis : Pauli) : Microsoft.Quantum.MachineLearning.ControlledRotation[]
```


## Input

### nQubits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of qubits acted on by the given layer.


### axis : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)

The rotation axis for each rotation in the given layer.



## Output : [ControlledRotation](xref:Microsoft.Quantum.MachineLearning.ControlledRotation)[]

An array of controlled rotations about the given axis, one on each of`nQubits` qubits.
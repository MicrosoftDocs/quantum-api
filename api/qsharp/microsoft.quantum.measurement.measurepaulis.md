---
uid: Microsoft.Quantum.Measurement.MeasurePaulis
title: MeasurePaulis operation
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Measurement
qsharp.name: MeasurePaulis
qsharp.summary: >-
  Given an array of multi-qubit Pauli operators, measures each using a specified measurement
  gadget, then returns the array of results.
---

# MeasurePaulis operation

Namespace: [Microsoft.Quantum.Measurement](xref:Microsoft.Quantum.Measurement)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given an array of multi-qubit Pauli operators, measures each using a specified measurementgadget, then returns the array of results.

```qsharp
operation MeasurePaulis (paulis : Pauli[][], target : Qubit[], gadget : ((Pauli[], Qubit[]) => Result)) : Result[]
```


## Input

### paulis : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)[][]

Array of multi-qubit Pauli operators to measure.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Register on which to measure the given operators.


### gadget : ([Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)[],[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]) => [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal) 

Operation which performs the measurement of a given multi-qubit operator.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]

The array of results obtained from measuring each element of `paulis`on `target`.
---
uid: Microsoft.Quantum.Diagnostics.AssertMeasurement
title: AssertMeasurement operation
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AssertMeasurement
qsharp.summary: >-
  Asserts that measuring the given qubits in the given Pauli basis will
  always have the given result.
---

# AssertMeasurement operation

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Asserts that measuring the given qubits in the given Pauli basis willalways have the given result.

```qsharp
operation AssertMeasurement (bases : Pauli[], qubits : Qubit[], result : Result, msg : String) : Unit is Adj + Ctl
```


## Input

### bases : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)[]

A measurement effect to assert the probability of, expressed as amulti-qubit Pauli operator.


### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

A register on which to make the assertion.


### result : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The expected result of `Measure(bases, qubits)`.


### msg : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

A message to be reported if the assertion fails.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

The following snippet will execute without errors on the full-statesimulator:```qsharpuse q = Qubit();within {    H(q);} apply {    AssertMeasurement([PauliX], [q], Zero, "Expected |+⟩ state.");}```

## Remarks

Note that the Adjoint and Controlled versions of this operation will notcheck the condition.

## See Also

- [Microsoft.Quantum.Diagnostics.AssertMeasurementProbability](xref:Microsoft.Quantum.Diagnostics.AssertMeasurementProbability)
- [Microsoft.Quantum.Intrinsic.Measure](xref:Microsoft.Quantum.Intrinsic.Measure)
---
uid: Microsoft.Quantum.Diagnostics.AssertMeasurementProbability
title: AssertMeasurementProbability operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AssertMeasurementProbability
qsharp.summary: >-
  Asserts that measuring the given qubits in the given Pauli basis will have the given result
  with the given probability, within some tolerance.
---

# AssertMeasurementProbability operation

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Asserts that measuring the given qubits in the given Pauli basis will have the given resultwith the given probability, within some tolerance.

```qsharp
operation AssertMeasurementProbability (bases : Pauli[], qubits : Qubit[], result : Result, prob : Double, msg : String, tolerance : Double) : Unit is Adj + Ctl
```


## Input

### bases : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)[]

A measurement effect to assert the probability of, expressed as amulti-qubit Pauli operator.


### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

A register on which to make the assertion.


### result : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

An expected result of `Measure(bases, qubits)`.


### prob : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The probability with which the given result is expected.


### msg : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

A message to be reported if the assertion fails.


### tolerance : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Tolerance allowed in the measurement probability.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

```qsharpusing (register = Qubit()) {    H(register);    AssertMeasurementProbability([PauliZ], [register], One, 0.5,        "Measuring in conjugate basis did not give 50/50 results.", 1e-5);}```

## Remarks

Note that the Adjoint and Controlled versions of this operation will notcheck the condition.

## See Also

- [Microsoft.Quantum.Diagnostics.AssertMeasurement](xref:Microsoft.Quantum.Diagnostics.AssertMeasurement)
- [Microsoft.Quantum.Intrinsic.Measure](xref:Microsoft.Quantum.Intrinsic.Measure)
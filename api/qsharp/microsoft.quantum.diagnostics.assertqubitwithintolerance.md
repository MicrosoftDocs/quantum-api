---
uid: Microsoft.Quantum.Diagnostics.AssertQubitWithinTolerance
title: AssertQubitWithinTolerance operation
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AssertQubitWithinTolerance
qsharp.summary: >-
  Asserts that the qubit `q` is in the expected eigenstate of the Pauli Z operator up to
  a given tolerance.
---

# AssertQubitWithinTolerance operation

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Asserts that the qubit `q` is in the expected eigenstate of the Pauli Z operator up toa given tolerance.

```qsharp
operation AssertQubitWithinTolerance (expected : Result, q : Qubit, tolerance : Double) : Unit is Adj + Ctl
```


## Input

### expected : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

Which state the qubit is expected to be in: `Zero` or `One`.


### q : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The qubit whose state is asserted.


### tolerance : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Tolerance on the probability of a measurement of the qubit returning the expectedresult.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

<xref:microsoft.quantum.diagnostics.assertqubitisinstatewithintolerance> allows for assertingarbitrary qubit states rather than only $Z$ eigenstates.Note that the Adjoint and Controlled versions of this operation will notcheck the condition.

## See Also

- [Microsoft.Quantum.Diagnostics.AssertQubitIsInStateWithinTolerance](xref:Microsoft.Quantum.Diagnostics.AssertQubitIsInStateWithinTolerance)
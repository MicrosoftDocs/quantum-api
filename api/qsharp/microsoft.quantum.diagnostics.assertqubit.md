---
uid: Microsoft.Quantum.Diagnostics.AssertQubit
title: AssertQubit operation
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AssertQubit
qsharp.summary: Asserts that the qubit `q` is in the expected eigenstate of the Pauli Z operator.
---

# AssertQubit operation

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Asserts that the qubit `q` is in the expected eigenstate of the Pauli Z operator.

```qsharp
operation AssertQubit (expected : Result, q : Qubit) : Unit is Adj + Ctl
```


## Input

### expected : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

Which state the qubit is expected to be in: `Zero` or `One`.


### q : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The qubit whose state is asserted.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

<xref:microsoft.quantum.diagnostics.assertqubitisinstatewithintolerance> allows for assertingarbitrary qubit states rather than only $Z$ eigenstates.Note that the Adjoint and Controlled versions of this operation will notcheck the condition.

## See Also

- [Microsoft.Quantum.Diagnostics.AssertQubitIsInStateWithinTolerance](xref:Microsoft.Quantum.Diagnostics.AssertQubitIsInStateWithinTolerance)
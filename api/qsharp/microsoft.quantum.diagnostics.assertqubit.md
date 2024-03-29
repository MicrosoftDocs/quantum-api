---
uid: Microsoft.Quantum.Diagnostics.AssertQubit
title: AssertQubit operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AssertQubit
qsharp.summary: Asserts that the qubit `q` is in the expected eigenstate of the Pauli Z operator.
---

# AssertQubit operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

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

<xref:Microsoft.Quantum.Diagnostics.AssertQubitIsInStateWithinTolerance> allows for assertingarbitrary qubit states rather than only $Z$ eigenstates.Note that the Adjoint and Controlled versions of this operation will notcheck the condition.

## See Also

- [Microsoft.Quantum.Diagnostics.AssertQubitIsInStateWithinTolerance](xref:Microsoft.Quantum.Diagnostics.AssertQubitIsInStateWithinTolerance)
---
uid: Microsoft.Quantum.Diagnostics.AssertAllZeroWithinTolerance
title: AssertAllZeroWithinTolerance operation
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AssertAllZeroWithinTolerance
qsharp.summary: Assert that given qubits are all in $\ket{0}$ state up to a given tolerance.
---

# AssertAllZeroWithinTolerance operation

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Assert that given qubits are all in $\ket{0}$ state up to a given tolerance.

```qsharp
operation AssertAllZeroWithinTolerance (qubits : Qubit[], tolerance : Double) : Unit is Adj + Ctl
```


## Input

### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Qubits that are asserted to be in $\ket{0}$ state.


### tolerance : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Accuracy with which the state should be in $\ket{0}$ state



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Note that the Adjoint and Controlled versions of this operation will notcheck the condition.

## See Also

- [Microsoft.Quantum.Diagnostics.AssertQubitWithinTolerance](xref:Microsoft.Quantum.Diagnostics.AssertQubitWithinTolerance)
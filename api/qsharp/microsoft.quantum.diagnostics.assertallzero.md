---
uid: Microsoft.Quantum.Diagnostics.AssertAllZero
title: AssertAllZero operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AssertAllZero
qsharp.summary: Assert that given qubits are all in $\ket{0}$ state.
---

# AssertAllZero operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Assert that given qubits are all in $\ket{0}$ state.

```qsharp
operation AssertAllZero (qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Qubits that are asserted to be in $\ket{0}$ state.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Note that the Adjoint and Controlled versions of this operation will notcheck the condition.

## See Also

- [Microsoft.Quantum.Diagnostics.AssertQubit](xref:Microsoft.Quantum.Diagnostics.AssertQubit)
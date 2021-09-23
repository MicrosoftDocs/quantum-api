---
uid: Microsoft.Quantum.Diagnostics.AssertOperationsEqualInPlaceCompBasis
title: AssertOperationsEqualInPlaceCompBasis operation
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AssertOperationsEqualInPlaceCompBasis
qsharp.summary: >-
  Checks if the operation `givenU` is equal to the operation `expectedU` on
  the given input size  by checking the action of the operations only on
  the vectors from the computational basis.
  This is a necessary, but not sufficient, condition for the equality of
  two unitaries.
---

# AssertOperationsEqualInPlaceCompBasis operation

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Core](https://nuget.org/packages/Microsoft.Quantum.QSharp.Core)


Checks if the operation `givenU` is equal to the operation `expectedU` onthe given input size  by checking the action of the operations only onthe vectors from the computational basis.This is a necessary, but not sufficient, condition for the equality oftwo unitaries.

```qsharp
operation AssertOperationsEqualInPlaceCompBasis (nQubits : Int, givenU : (Qubit[] => Unit), expectedU : (Qubit[] => Unit is Adj)) : Unit
```


## Input

### nQubits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of qubits $n$ that the operations `givenU` and `expectedU` operate on.


### givenU : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[] => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) 

Operation on $n$ qubits to be checked.


### expectedU : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[] => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

Reference operation on $n$ qubits that `givenU` is to be compared against.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


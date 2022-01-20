---
uid: Microsoft.Quantum.Canon.ApplyToFirstTwoQubitsA
title: ApplyToFirstTwoQubitsA operation
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToFirstTwoQubitsA
qsharp.summary: >-
  Applies an operation to the first two qubits in the register.
  The modifier `A` indicates that the operation is adjointable.
---

# ApplyToFirstTwoQubitsA operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation to the first two qubits in the register.The modifier `A` indicates that the operation is adjointable.

```qsharp
operation ApplyToFirstTwoQubitsA (op : ((Qubit, Qubit) => Unit is Adj), register : Qubit[]) : Unit is Adj
```


## Input

### op : ([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

An operation to be applied to the first two qubits


### register : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Qubit array to the first two qubits of which the operation is applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

This is equivalent to:```qsharpop(register[0], register[1]);```

## See Also

- [Microsoft.Quantum.Canon.ApplyToFirstTwoQubits](xref:Microsoft.Quantum.Canon.ApplyToFirstTwoQubits)
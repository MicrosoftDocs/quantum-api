---
uid: Microsoft.Quantum.Canon.ApplyToSubregisterA
title: ApplyToSubregisterA operation
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToSubregisterA
qsharp.summary: >-
  Applies an operation to a subregister of a register, with qubits
  specified by an array of their indices.
  The modifier `A` indicates that the operation is adjointable.
---

# ApplyToSubregisterA operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation to a subregister of a register, with qubitsspecified by an array of their indices.The modifier `A` indicates that the operation is adjointable.

```qsharp
operation ApplyToSubregisterA (op : (Qubit[] => Unit is Adj), idxs : Int[], target : Qubit[]) : Unit is Adj
```


## Input

### op : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[] => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

Operation to apply to subregister.


### idxs : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

Array of indices, indicating to which qubits the operation will be applied.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Register on which the operation acts.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## See Also

- [Microsoft.Quantum.Canon.ApplyToSubregister](xref:Microsoft.Quantum.Canon.ApplyToSubregister)
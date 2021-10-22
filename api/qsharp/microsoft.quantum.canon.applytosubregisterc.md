---
uid: Microsoft.Quantum.Canon.ApplyToSubregisterC
title: ApplyToSubregisterC operation
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToSubregisterC
qsharp.summary: >-
  Applies an operation to a subregister of a register, with qubits
  specified by an array of their indices.
  The modifier `C` indicates that the operation is controllable.
---

# ApplyToSubregisterC operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation to a subregister of a register, with qubitsspecified by an array of their indices.The modifier `C` indicates that the operation is controllable.

```qsharp
operation ApplyToSubregisterC (op : (Qubit[] => Unit is Ctl), idxs : Int[], target : Qubit[]) : Unit is Ctl
```


## Input

### op : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[] => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl

Operation to apply to subregister.


### idxs : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

Array of indices, indicating to which qubits the operation will be applied.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Register on which the operation acts.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## See Also

- [Microsoft.Quantum.Canon.ApplyToSubregister](xref:Microsoft.Quantum.Canon.ApplyToSubregister)
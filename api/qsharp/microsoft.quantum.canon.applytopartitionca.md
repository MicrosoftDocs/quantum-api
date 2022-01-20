---
uid: Microsoft.Quantum.Canon.ApplyToPartitionCA
title: ApplyToPartitionCA operation
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToPartitionCA
qsharp.summary: >-
  Applies a pair of operations to a given partition of a register into two parts.
  The modifier `CA` indicates that the operation is controllable and adjointable.
---

# ApplyToPartitionCA operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies a pair of operations to a given partition of a register into two parts.The modifier `CA` indicates that the operation is controllable and adjointable.

```qsharp
operation ApplyToPartitionCA (op : ((Qubit[], Qubit[]) => Unit is Ctl + Adj), numberOfQubitsToFirstArgument : Int, target : Qubit[]) : Unit is Adj + Ctl
```


## Input

### op : ([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[],[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

The pair of operations to be applied to the given partition.


### numberOfQubitsToFirstArgument : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Number of qubits from target to put into the first part of the partition.The remaining qubits constitute the second part of the partition.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

A register of qubits that are being partitioned and operated on by thegiven two operation.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## See Also

- [Microsoft.Quantum.Canon.ApplyToPartition](xref:Microsoft.Quantum.Canon.ApplyToPartition)
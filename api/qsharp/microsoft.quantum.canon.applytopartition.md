---
uid: Microsoft.Quantum.Canon.ApplyToPartition
title: ApplyToPartition operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToPartition
qsharp.summary: Applies a pair of operations to a given partition of a register into two parts.
---

# ApplyToPartition operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies a pair of operations to a given partition of a register into two parts.

```qsharp
operation ApplyToPartition (op : ((Qubit[], Qubit[]) => Unit), numberOfQubitsToFirstArgument : Int, target : Qubit[]) : Unit
```


## Input

### op : ([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[],[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) 

The pair of operations to be applied to the given partition.


### numberOfQubitsToFirstArgument : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Number of qubits from target to put into the first part of the partition.The remaining qubits constitute the second part of the partition.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

A register of qubits that are being partitioned and operated on by thegiven two operation.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## See Also

- [Microsoft.Quantum.Canon.ApplyToPartitionA](xref:Microsoft.Quantum.Canon.ApplyToPartitionA)
- [Microsoft.Quantum.Canon.ApplyToPartitionC](xref:Microsoft.Quantum.Canon.ApplyToPartitionC)
- [Microsoft.Quantum.Canon.ApplyToPartitionCA](xref:Microsoft.Quantum.Canon.ApplyToPartitionCA)
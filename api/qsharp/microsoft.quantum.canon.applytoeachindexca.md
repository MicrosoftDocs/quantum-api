---
uid: Microsoft.Quantum.Canon.ApplyToEachIndexCA
title: ApplyToEachIndexCA operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyToEachIndexCA
qsharp.summary: >-
  Applies a single-qubit operation to each indexed element in a register.
  The modifier `CA` indicates that the single-qubit operation is adjointable
  and controllable.
---

# ApplyToEachIndexCA operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies a single-qubit operation to each indexed element in a register.The modifier `CA` indicates that the single-qubit operation is adjointableand controllable.

```qsharp
operation ApplyToEachIndexCA<'T> (singleElementOperation : ((Int, 'T) => Unit is Adj + Ctl), register : 'T[]) : Unit is Adj + Ctl
```


## Input

### singleElementOperation : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),'T) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

Operation to apply to each qubit.


### register : 'T[]

Array of qubits on which to apply the given operation.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T

The target on which each of the operations acts.

## See Also

- [Microsoft.Quantum.Canon.ApplyToEachIndex](xref:Microsoft.Quantum.Canon.ApplyToEachIndex)
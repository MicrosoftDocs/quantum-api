---
uid: Microsoft.Quantum.Arrays.ApplyToEachWindowCA
title: ApplyToEachWindowCA operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: ApplyToEachWindowCA
qsharp.summary: Applies an operation windowing over an input register. The modifier `CA` indicates that the single-qubit operation is controllable and adjointable.
---

# ApplyToEachWindowCA operation

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation windowing over an input register. The modifier `CA` indicates that the single-qubit operation is controllable and adjointable.

```qsharp
operation ApplyToEachWindowCA<'T> (windowLen : Int, op : ((Int, 'T[]) => Unit is Adj + Ctl), register : 'T[]) : Unit is Adj + Ctl
```


## Input

### windowLen : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The size of each window.


### op : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),'T[]) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl

An operation on a register that will be provided with the current window and its index.


### register : 'T[]

The register the operation windows over.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T

The type of register elements.

## See Also

- [Microsoft.Quantum.Arrays.ApplyToEachWindow](xref:Microsoft.Quantum.Arrays.ApplyToEachWindow)
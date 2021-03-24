---
uid: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit.ApplyUsingSinglyControlledVersion
title: ApplyUsingSinglyControlledVersion operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit
qsharp.name: ApplyUsingSinglyControlledVersion
qsharp.summary: ''
---

# ApplyUsingSinglyControlledVersion operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit](xref:Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)




```qsharp
operation ApplyUsingSinglyControlledVersion<'T> (op : ('T => Unit is Adj), controlledOp : ((Qubit, 'T) => Unit is Adj), arg : 'T, AlmostCCX : ((Qubit, Qubit, Qubit) => Unit is Adj)) : Unit is Adj + Ctl
```


## Input

### op : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj




### controlledOp : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),'T) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj




### arg : 'T




### AlmostCCX : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T


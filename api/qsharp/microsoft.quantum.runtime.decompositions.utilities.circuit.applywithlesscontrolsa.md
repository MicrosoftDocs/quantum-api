---
uid: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit.ApplyWithLessControlsA
title: ApplyWithLessControlsA operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit
qsharp.name: ApplyWithLessControlsA
qsharp.summary: ''
---

# ApplyWithLessControlsA operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit](xref:Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)




```qsharp
operation ApplyWithLessControlsA<'T> (op : ((Qubit[], 'T) => Unit is Adj), (controls : Qubit[], arg : 'T), AlmostCCX : ((Qubit, Qubit, Qubit) => Unit is Adj)) : Unit is Adj
```


## Input

### op : ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],'T) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj




### controls : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]




### arg : 'T




### AlmostCCX : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T


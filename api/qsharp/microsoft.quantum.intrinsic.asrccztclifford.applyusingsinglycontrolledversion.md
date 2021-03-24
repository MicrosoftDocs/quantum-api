---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.ApplyUsingSinglyControlledVersion
title: ApplyUsingSinglyControlledVersion operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: ApplyUsingSinglyControlledVersion
qsharp.summary: ''
---

# ApplyUsingSinglyControlledVersion operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)




```qsharp
operation ApplyUsingSinglyControlledVersion<'T> (op : ('T => Unit is Adj), controlledOp : ((Qubit, 'T) => Unit is Adj), arg : 'T) : Unit is Adj + Ctl
```


## Input

### op : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj




### controlledOp : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),'T) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj




### arg : 'T





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T


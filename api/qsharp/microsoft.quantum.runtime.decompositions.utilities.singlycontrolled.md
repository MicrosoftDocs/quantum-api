---
uid: Microsoft.Quantum.Runtime.Decompositions.Utilities.SinglyControlled
title: SinglyControlled function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.Utilities
qsharp.name: SinglyControlled
qsharp.summary: ''
---

# SinglyControlled function

Namespace: [Microsoft.Quantum.Runtime.Decompositions.Utilities](xref:Microsoft.Quantum.Runtime.Decompositions.Utilities)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)




```qsharp
function SinglyControlled<'T> (op : ('T => Unit is Adj + Ctl)) : ((Qubit, 'T) => Unit is Adj + Ctl)
```


## Input

### op : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl





## Output : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),'T) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl



## Type Parameters

### 'T


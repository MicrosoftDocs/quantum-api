---
uid: Microsoft.Quantum.Runtime.Decompositions.Utilities.ApplySinglyControlledCA
title: ApplySinglyControlledCA operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.Utilities
qsharp.name: ApplySinglyControlledCA
qsharp.summary: ''
---

# ApplySinglyControlledCA operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.Utilities](xref:Microsoft.Quantum.Runtime.Decompositions.Utilities)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)




```qsharp
operation ApplySinglyControlledCA<'T> (op : ('T => Unit is Adj + Ctl), (control : Qubit, arg : 'T)) : Unit is Adj + Ctl
```


## Input

### op : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### arg : 'T





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T


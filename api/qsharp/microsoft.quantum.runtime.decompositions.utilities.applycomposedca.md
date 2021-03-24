---
uid: Microsoft.Quantum.Runtime.Decompositions.Utilities.ApplyComposedCA
title: ApplyComposedCA operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.Utilities
qsharp.name: ApplyComposedCA
qsharp.summary: ''
---

# ApplyComposedCA operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.Utilities](xref:Microsoft.Quantum.Runtime.Decompositions.Utilities)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)




```qsharp
operation ApplyComposedCA<'U, 'V> (op : ('U => Unit is Adj + Ctl), fn : ('V -> 'U), arg : 'V) : Unit is Adj + Ctl
```


## Input

### op : 'U => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### fn : 'V -> 'U




### arg : 'V





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'U


### 'V


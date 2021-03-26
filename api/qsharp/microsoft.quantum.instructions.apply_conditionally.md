---
uid: Microsoft.Quantum.Instructions.apply_conditionally
title: apply_conditionally operation
ms.date: 3/26/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Instructions
qsharp.name: apply_conditionally
qsharp.summary: ''
---

# apply_conditionally operation

Namespace: [Microsoft.Quantum.Instructions](xref:Microsoft.Quantum.Instructions)

Package: [tracer-qir](https://nuget.org/packages/tracer-qir)




```qsharp
operation apply_conditionally (measurementResults : Result[], resultsValues : Result[], onEqualOp : (Unit => Unit), onNonEqualOp : (Unit => Unit)) : Unit
```


## Input

### measurementResults : __invalid<Result>__[]




### resultsValues : __invalid<Result>__[]




### onEqualOp : [Unit](xref:microsoft.quantum.lang-ref.unit) => [Unit](xref:microsoft.quantum.lang-ref.unit) 




### onNonEqualOp : [Unit](xref:microsoft.quantum.lang-ref.unit) => [Unit](xref:microsoft.quantum.lang-ref.unit) 





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)


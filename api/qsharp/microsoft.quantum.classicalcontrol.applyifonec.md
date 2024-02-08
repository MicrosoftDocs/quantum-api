---
uid: Microsoft.Quantum.ClassicalControl.ApplyIfOneC
title: ApplyIfOneC operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.ClassicalControl
qsharp.name: ApplyIfOneC
qsharp.summary: ''
---

# ApplyIfOneC operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.ClassicalControl](xref:Microsoft.Quantum.ClassicalControl)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)




```qsharp
operation ApplyIfOneC<'T> (measurementResult : Result, (onResultOneOp : ('T => Unit is Ctl), oneArg : 'T)) : Unit is Ctl
```


## Input

### measurementResult : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)




### onResultOneOp : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl




### oneArg : 'T





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


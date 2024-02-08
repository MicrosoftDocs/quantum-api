---
uid: Microsoft.Quantum.ClassicalControl.ApplyConditionallyC
title: ApplyConditionallyC operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.ClassicalControl
qsharp.name: ApplyConditionallyC
qsharp.summary: ''
---

# ApplyConditionallyC operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.ClassicalControl](xref:Microsoft.Quantum.ClassicalControl)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)




```qsharp
operation ApplyConditionallyC<'T, 'U> (measurementResults : Result[], resultsValues : Result[], (onEqualOp : ('T => Unit is Ctl), equalArg : 'T), (onNonEqualOp : ('U => Unit is Ctl), nonEqualArg : 'U)) : Unit is Ctl
```


## Input

### measurementResults : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]




### resultsValues : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]




### onEqualOp : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl




### equalArg : 'T




### onNonEqualOp : 'U => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl




### nonEqualArg : 'U





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


### 'U


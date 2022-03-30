---
uid: Microsoft.Quantum.ClassicalControl.ApplyIfElseRA
title: ApplyIfElseRA operation
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.ClassicalControl
qsharp.name: ApplyIfElseRA
qsharp.summary: ''
---

# ApplyIfElseRA operation

Namespace: [Microsoft.Quantum.ClassicalControl](xref:Microsoft.Quantum.ClassicalControl)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)




```qsharp
operation ApplyIfElseRA<'T, 'U> (measurementResult : Result, (onResultZeroOp : ('T => Unit is Adj), zeroArg : 'T), (onResultOneOp : ('U => Unit is Adj), oneArg : 'U)) : Unit is Adj
```


## Input

### measurementResult : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)




### onResultZeroOp : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj




### zeroArg : 'T




### onResultOneOp : 'U => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj




### oneArg : 'U





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


### 'U


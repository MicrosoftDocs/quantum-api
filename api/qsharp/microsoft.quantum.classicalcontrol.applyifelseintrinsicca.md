---
uid: Microsoft.Quantum.ClassicalControl.ApplyIfElseIntrinsicCA
title: ApplyIfElseIntrinsicCA operation
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.ClassicalControl
qsharp.name: ApplyIfElseIntrinsicCA
qsharp.summary: ''
---

# ApplyIfElseIntrinsicCA operation

Namespace: [Microsoft.Quantum.ClassicalControl](xref:Microsoft.Quantum.ClassicalControl)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)




```qsharp
operation ApplyIfElseIntrinsicCA (measurementResult : Result, onResultZeroOp : (Unit => Unit is Ctl + Adj), onResultOneOp : (Unit => Unit is Ctl + Adj)) : Unit is Adj + Ctl
```


## Input

### measurementResult : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)




### onResultZeroOp : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl




### onResultOneOp : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)


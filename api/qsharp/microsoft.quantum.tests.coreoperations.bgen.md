---
uid: Microsoft.Quantum.Tests.CoreOperations.BGen
title: BGen operation
ms.date: 4/19/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Tests.CoreOperations
qsharp.name: BGen
qsharp.summary: ''
---

# BGen operation

Namespace: [Microsoft.Quantum.Tests.CoreOperations](xref:Microsoft.Quantum.Tests.CoreOperations)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
operation BGen<'T> (available : Int, arg : 'T, action : ((Qubit, Qubit, 'T) => Unit is Adj + Ctl)) : Unit is Adj + Ctl
```


## Input

### available : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)




### arg : 'T




### action : ([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),'T) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


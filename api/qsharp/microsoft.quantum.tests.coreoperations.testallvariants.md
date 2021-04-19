---
uid: Microsoft.Quantum.Tests.CoreOperations.TestAllVariants
title: TestAllVariants operation
ms.date: 4/19/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Tests.CoreOperations
qsharp.name: TestAllVariants
qsharp.summary: ''
---

# TestAllVariants operation

Namespace: [Microsoft.Quantum.Tests.CoreOperations](xref:Microsoft.Quantum.Tests.CoreOperations)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
operation TestAllVariants<'T> (available : Int, args : 'T, action : ((Qubit, Qubit, 'T) => Unit is Adj + Ctl), B : ((Int, 'T, ((Qubit, Qubit, 'T) => Unit is Adj + Ctl)) => Unit is Adj + Ctl)) : Unit
```


## Input

### available : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)




### args : 'T




### action : ([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),'T) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl




### B : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),'T,([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),'T) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


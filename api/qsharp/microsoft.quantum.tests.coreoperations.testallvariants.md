---
uid: Microsoft.Quantum.Tests.CoreOperations.TestAllVariants
title: TestAllVariants operation
ms.date: 3/26/2021 12:00:00 AM
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

### available : [Int](xref:microsoft.quantum.lang-ref.int)




### args : 'T




### action : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit),'T) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### B : ([Int](xref:microsoft.quantum.lang-ref.int),'T,([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit),'T) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T


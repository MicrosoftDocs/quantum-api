---
uid: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics.AddControlled
title: AddControlled function
ms.date: 4/19/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics
qsharp.name: AddControlled
qsharp.summary: ''
---

# AddControlled function

Namespace: [Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics](xref:Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
function AddControlled<'A> (op : ('A => Unit is Adj + Ctl)) : ((Qubit[], 'A) => Unit is Adj + Ctl)
```


## Input

### op : 'A => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl





## Output : ([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[],'A) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl



## Type Parameters

### 'A


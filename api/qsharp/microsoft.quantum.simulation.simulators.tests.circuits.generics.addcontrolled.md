---
uid: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics.AddControlled
title: AddControlled function
ms.date: 3/24/2021 12:00:00 AM
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

### op : 'A => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl





## Output : ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],'A) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl



## Type Parameters

### 'A


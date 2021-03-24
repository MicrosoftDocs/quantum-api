---
uid: Microsoft.Quantum.Samples.UnitTesting.CollectMetrics
title: CollectMetrics operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: CollectMetrics
qsharp.summary: This is an utility operation used to collect gate counts, depth etc of the circuit
---

# CollectMetrics operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


This is an utility operation used to collect gate counts, depth etc of the circuit

```qsharp
operation CollectMetrics (op : ((Qubit, Qubit, Qubit) => Unit is Adj)) : Unit
```


## Input

### op : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj

Any operation that maps |000⟩ to |000⟩



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## See Also

- [CircuitMetrics.cs](xref:CircuitMetrics.cs)
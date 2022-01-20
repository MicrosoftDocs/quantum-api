---
uid: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions.ApplyConditionallyA
title: ApplyConditionallyA operation
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions
qsharp.name: ApplyConditionallyA
qsharp.summary: >+
  > [!WARNING]

  > ApplyConditionallyA has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyConditionallyA> instead.

---

# ApplyConditionallyA operation

Namespace: [Microsoft.Quantum.Simulation.QuantumProcessor.Extensions](xref:Microsoft.Quantum.Simulation.QuantumProcessor.Extensions)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


> [!WARNING]
> ApplyConditionallyA has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyConditionallyA> instead.



```qsharp
operation ApplyConditionallyA<'T, 'U> (measurementResults : Result[], resultsValues : Result[], (onEqualOp : ('T => Unit is Adj), equalArg : 'T), (onNonEqualOp : ('U => Unit is Adj), nonEqualArg : 'U)) : Unit is Adj
```


## Input

### measurementResults : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]




### resultsValues : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]




### onEqualOp : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj




### equalArg : 'T




### onNonEqualOp : 'U => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj




### nonEqualArg : 'U





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


### 'U


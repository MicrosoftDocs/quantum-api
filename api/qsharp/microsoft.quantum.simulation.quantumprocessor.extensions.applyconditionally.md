---
uid: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions.ApplyConditionally
title: ApplyConditionally operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions
qsharp.name: ApplyConditionally
qsharp.summary: >+
  > [!WARNING]

  > ApplyConditionally has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyConditionally> instead.

---

# ApplyConditionally operation

Namespace: [Microsoft.Quantum.Simulation.QuantumProcessor.Extensions](xref:Microsoft.Quantum.Simulation.QuantumProcessor.Extensions)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


> [!WARNING]
> ApplyConditionally has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyConditionally> instead.



```qsharp
operation ApplyConditionally<'T, 'U> (measurementResults : Result[], resultsValues : Result[], (onEqualOp : ('T => Unit), equalArg : 'T), (onNonEqualOp : ('U => Unit), nonEqualArg : 'U)) : Unit
```


## Input

### measurementResults : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]




### resultsValues : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]




### onEqualOp : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) 




### equalArg : 'T




### onNonEqualOp : 'U => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) 




### nonEqualArg : 'U





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


### 'U


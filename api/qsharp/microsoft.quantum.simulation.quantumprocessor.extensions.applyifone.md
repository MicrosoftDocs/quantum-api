---
uid: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions.ApplyIfOne
title: ApplyIfOne operation
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions
qsharp.name: ApplyIfOne
qsharp.summary: >+
  > [!WARNING]

  > ApplyIfOne has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyIfOne> instead.

---

# ApplyIfOne operation

Namespace: [Microsoft.Quantum.Simulation.QuantumProcessor.Extensions](xref:Microsoft.Quantum.Simulation.QuantumProcessor.Extensions)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


> [!WARNING]
> ApplyIfOne has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyIfOne> instead.



```qsharp
operation ApplyIfOne<'T> (measurementResult : Result, (onResultOneOp : ('T => Unit), oneArg : 'T)) : Unit
```


## Input

### measurementResult : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)




### onResultOneOp : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) 




### oneArg : 'T





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


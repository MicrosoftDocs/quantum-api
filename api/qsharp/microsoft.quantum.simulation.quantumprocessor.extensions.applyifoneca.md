---
uid: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions.ApplyIfOneCA
title: ApplyIfOneCA operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions
qsharp.name: ApplyIfOneCA
qsharp.summary: >+
  > [!WARNING]

  > ApplyIfOneCA has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyIfOneCA> instead.

---

# ApplyIfOneCA operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Simulation.QuantumProcessor.Extensions](xref:Microsoft.Quantum.Simulation.QuantumProcessor.Extensions)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


> [!WARNING]
> ApplyIfOneCA has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyIfOneCA> instead.



```qsharp
operation ApplyIfOneCA<'T> (measurementResult : Result, (onResultOneOp : ('T => Unit is Ctl + Adj), oneArg : 'T)) : Unit is Adj + Ctl
```


## Input

### measurementResult : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)




### onResultOneOp : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl




### oneArg : 'T





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


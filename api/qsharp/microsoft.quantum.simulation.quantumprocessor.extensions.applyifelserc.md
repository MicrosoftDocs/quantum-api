---
uid: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions.ApplyIfElseRC
title: ApplyIfElseRC operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.QuantumProcessor.Extensions
qsharp.name: ApplyIfElseRC
qsharp.summary: >+
  > [!WARNING]

  > ApplyIfElseRC has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyIfElseRC> instead.

---

# ApplyIfElseRC operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Simulation.QuantumProcessor.Extensions](xref:Microsoft.Quantum.Simulation.QuantumProcessor.Extensions)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


> [!WARNING]
> ApplyIfElseRC has been deprecated. Please use <xref:Microsoft.Quantum.ClassicalControl.ApplyIfElseRC> instead.



```qsharp
operation ApplyIfElseRC<'T, 'U> (measurementResult : Result, (onResultZeroOp : ('T => Unit is Ctl), zeroArg : 'T), (onResultOneOp : ('U => Unit is Ctl), oneArg : 'U)) : Unit is Ctl
```


## Input

### measurementResult : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)




### onResultZeroOp : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl




### zeroArg : 'T




### onResultOneOp : 'U => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Ctl




### oneArg : 'U





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T


### 'U


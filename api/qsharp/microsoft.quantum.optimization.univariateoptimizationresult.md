---
uid: Microsoft.Quantum.Optimization.UnivariateOptimizationResult
title: UnivariateOptimizationResult user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Optimization
qsharp.name: UnivariateOptimizationResult
qsharp.summary: Represents the result of optimizing a univariate function.
---

# UnivariateOptimizationResult user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Optimization](xref:Microsoft.Quantum.Optimization)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents the result of optimizing a univariate function.

```qsharp

newtype UnivariateOptimizationResult = (Coordinate : Double, Value : Double, NQueries : Int);
```



## Named Items

### Coordinate : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Input at which an optimum was found.
### Value : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Value returned by the function at its optimum.
### NQueries : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The amount of times the function was called.
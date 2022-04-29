---
uid: Microsoft.Quantum.Optimization.UnivariateOptimizationResult
title: UnivariateOptimizationResult user defined type
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Optimization
qsharp.name: UnivariateOptimizationResult
qsharp.summary: Represents the result of optimizing a univariate function.
---

# UnivariateOptimizationResult user defined type

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
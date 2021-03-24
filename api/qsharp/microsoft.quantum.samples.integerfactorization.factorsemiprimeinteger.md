---
uid: Microsoft.Quantum.Samples.IntegerFactorization.FactorSemiprimeInteger
title: FactorSemiprimeInteger operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.IntegerFactorization
qsharp.name: FactorSemiprimeInteger
qsharp.summary: Uses Shor's algorithm to factor the parameter `number`
---

# FactorSemiprimeInteger operation

Namespace: [Microsoft.Quantum.Samples.IntegerFactorization](xref:Microsoft.Quantum.Samples.IntegerFactorization)

Package: [IntegerFactorization](https://nuget.org/packages/IntegerFactorization)


Uses Shor's algorithm to factor the parameter `number`

```qsharp
operation FactorSemiprimeInteger (number : Int, useRobustPhaseEstimation : Bool) : (Int, Int)
```


## Input

### number : [Int](xref:microsoft.quantum.lang-ref.int)

A semiprime integer to be factored


### useRobustPhaseEstimation : [Bool](xref:microsoft.quantum.lang-ref.bool)

If set to true, we use Microsoft.Quantum.Characterization.RobustPhaseEstimation andMicrosoft.Quantum.Characterization.QuantumPhaseEstimation otherwise



## Output : ([Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int))

Pair of numbers p > 1 and q > 1 such that p⋅q = `number`
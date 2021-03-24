---
uid: Microsoft.Quantum.Samples.IntegerFactorization.EstimatePeriod
title: EstimatePeriod operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.IntegerFactorization
qsharp.name: EstimatePeriod
qsharp.summary: >-
  Finds a multiplicative order of the generator
  in the residue ring Z mod `modulus`.
---

# EstimatePeriod operation

Namespace: [Microsoft.Quantum.Samples.IntegerFactorization](xref:Microsoft.Quantum.Samples.IntegerFactorization)

Package: [IntegerFactorization](https://nuget.org/packages/IntegerFactorization)


Finds a multiplicative order of the generatorin the residue ring Z mod `modulus`.

```qsharp
operation EstimatePeriod (generator : Int, modulus : Int, useRobustPhaseEstimation : Bool) : Int
```


## Input

### generator : [Int](xref:microsoft.quantum.lang-ref.int)

The unsigned integer multiplicative order ( period )of which is being estimated. Must be co-prime to `modulus`.


### modulus : [Int](xref:microsoft.quantum.lang-ref.int)

The modulus which defines the residue ring Z mod `modulus`in which the multiplicative order of `generator` is being estimated.


### useRobustPhaseEstimation : [Bool](xref:microsoft.quantum.lang-ref.bool)

If set to true, we use Microsoft.Quantum.Characterization.RobustPhaseEstimation andMicrosoft.Quantum.Characterization.QuantumPhaseEstimation



## Output : [Int](xref:microsoft.quantum.lang-ref.int)

The period ( multiplicative order ) of the generator mod `modulus`
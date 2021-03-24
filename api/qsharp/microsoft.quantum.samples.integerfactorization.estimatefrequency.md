---
uid: Microsoft.Quantum.Samples.IntegerFactorization.EstimateFrequency
title: EstimateFrequency operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.IntegerFactorization
qsharp.name: EstimateFrequency
qsharp.summary: >-
  Estimates the frequency of a generator
  in the residue ring Z mod `modulus`.
---

# EstimateFrequency operation

Namespace: [Microsoft.Quantum.Samples.IntegerFactorization](xref:Microsoft.Quantum.Samples.IntegerFactorization)

Package: [IntegerFactorization](https://nuget.org/packages/IntegerFactorization)


Estimates the frequency of a generatorin the residue ring Z mod `modulus`.

```qsharp
operation EstimateFrequency (generator : Int, modulus : Int, useRobustPhaseEstimation : Bool, bitsize : Int) : Int
```


## Input

### generator : [Int](xref:microsoft.quantum.lang-ref.int)

The unsigned integer multiplicative order ( period )of which is being estimated. Must be co-prime to `modulus`.


### modulus : [Int](xref:microsoft.quantum.lang-ref.int)

The modulus which defines the residue ring Z mod `modulus`in which the multiplicative order of `generator` is being estimated.


### useRobustPhaseEstimation : [Bool](xref:microsoft.quantum.lang-ref.bool)

If set to true, we use Microsoft.Quantum.Characterization.RobustPhaseEstimation elsethis operation uses Microsoft.Quantum.Characterization.QuantumPhaseEstimation


### bitsize : [Int](xref:microsoft.quantum.lang-ref.int)

Number of bits needed to represent the modulus.



## Output : [Int](xref:microsoft.quantum.lang-ref.int)

The numerator k of dyadic fraction k/2^bitsPrecisionapproximating s/r.
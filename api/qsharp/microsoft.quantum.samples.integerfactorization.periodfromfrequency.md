---
uid: Microsoft.Quantum.Samples.IntegerFactorization.PeriodFromFrequency
title: PeriodFromFrequency function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.IntegerFactorization
qsharp.name: PeriodFromFrequency
qsharp.summary: Find the period of a number from an input frequency.
---

# PeriodFromFrequency function

Namespace: [Microsoft.Quantum.Samples.IntegerFactorization](xref:Microsoft.Quantum.Samples.IntegerFactorization)

Package: [IntegerFactorization](https://nuget.org/packages/IntegerFactorization)


Find the period of a number from an input frequency.

```qsharp
function PeriodFromFrequency (modulus : Int, frequencyEstimate : Int, bitsPrecision : Int, currentDivisor : Int) : Int
```


## Input

### modulus : [Int](xref:microsoft.quantum.lang-ref.int)

The modulus which defines the residue ring Z mod `modulus`in which the multiplicative order of `generator` is being estimated.


### frequencyEstimate : [Int](xref:microsoft.quantum.lang-ref.int)

The frequency that we want to convert to a period.


### bitsPrecision : [Int](xref:microsoft.quantum.lang-ref.int)

Number of bits of precision with which we need toestimate s/r to recover period r using continuedfractions algorithm.


### currentDivisor : [Int](xref:microsoft.quantum.lang-ref.int)

The divisor of the generator period found so far.



## Output : [Int](xref:microsoft.quantum.lang-ref.int)

The period as calculated from the estimated frequency viathe continued fractions algorithm.

## See Also

- [Microsoft.Quantum.Math.ContinuedFractionConvergentI](xref:Microsoft.Quantum.Math.ContinuedFractionConvergentI)
---
uid: Microsoft.Quantum.Samples.IntegerFactorization.MaybeFactorsFromPeriod
title: MaybeFactorsFromPeriod function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.IntegerFactorization
qsharp.name: MaybeFactorsFromPeriod
qsharp.summary: Tries to find the factors of `modulus` given a `period` and `generator`.
---

# MaybeFactorsFromPeriod function

Namespace: [Microsoft.Quantum.Samples.IntegerFactorization](xref:Microsoft.Quantum.Samples.IntegerFactorization)

Package: [IntegerFactorization](https://nuget.org/packages/IntegerFactorization)


Tries to find the factors of `modulus` given a `period` and `generator`.

```qsharp
function MaybeFactorsFromPeriod (modulus : Int, generator : Int, period : Int) : (Bool, (Int, Int))
```


## Input

### modulus : [Int](xref:microsoft.quantum.lang-ref.int)

The modulus which defines the residue ring Z mod `modulus`in which the multiplicative order of `generator` is being estimated.


### generator : [Int](xref:microsoft.quantum.lang-ref.int)

The unsigned integer multiplicative order ( period )of which is being estimated. Must be co-prime to `modulus`.


### period : [Int](xref:microsoft.quantum.lang-ref.int)

The estimated period ( multiplicative order ) of the generator mod `modulus`.



## Output : ([Bool](xref:microsoft.quantum.lang-ref.bool),([Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int)))

A tuple of a flag indicating whether factors were found successfully,and a pair of integers representing the factors that were found.Note that the second output is only meaningful when the firstoutput is `true`.

## See Also

- [Microsoft.Quantum.Math.GreatestCommonDivisorI](xref:Microsoft.Quantum.Math.GreatestCommonDivisorI)
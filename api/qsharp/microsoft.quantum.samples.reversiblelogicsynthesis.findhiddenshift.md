---
uid: Microsoft.Quantum.Samples.ReversibleLogicSynthesis.FindHiddenShift
title: FindHiddenShift operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.ReversibleLogicSynthesis
qsharp.name: FindHiddenShift
qsharp.summary: >-
  Hidden-shift algorithm in which the bent function is the inner product
  and a permutation being applied to one operand of the inner product.
---

# FindHiddenShift operation

Namespace: [Microsoft.Quantum.Samples.ReversibleLogicSynthesis](xref:Microsoft.Quantum.Samples.ReversibleLogicSynthesis)

Package: [ReversibleLogicSynthesis](https://nuget.org/packages/ReversibleLogicSynthesis)


Hidden-shift algorithm in which the bent function is the inner productand a permutation being applied to one operand of the inner product.

```qsharp
operation FindHiddenShift (perm : Int[], shift : Int) : Int
```


## Input

### perm : [Int](xref:microsoft.quantum.lang-ref.int)[]

A permutation of 2^𝑛 elements starting from 0.


### shift : [Int](xref:microsoft.quantum.lang-ref.int)

The hidden shift.



## Output : [Int](xref:microsoft.quantum.lang-ref.int)

The shift computed by the quantum circuit.

## References

- [*Martin Roetteler*,  Proc. SODA 2010, ACM, pp. 448-457,  2010](https://doi.org/10.1137/1.9781611973075.37)
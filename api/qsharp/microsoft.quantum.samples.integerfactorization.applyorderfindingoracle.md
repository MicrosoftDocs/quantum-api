---
uid: Microsoft.Quantum.Samples.IntegerFactorization.ApplyOrderFindingOracle
title: ApplyOrderFindingOracle operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.IntegerFactorization
qsharp.name: ApplyOrderFindingOracle
qsharp.summary: >-
  Interprets `target` as encoding unsigned little-endian integer k
  and performs transformation |k⟩ ↦ |gᵖ⋅k mod N ⟩ where
  p is `power`, g is `generator` and N is `modulus`.
---

# ApplyOrderFindingOracle operation

Namespace: [Microsoft.Quantum.Samples.IntegerFactorization](xref:Microsoft.Quantum.Samples.IntegerFactorization)

Package: [IntegerFactorization](https://nuget.org/packages/IntegerFactorization)


Interprets `target` as encoding unsigned little-endian integer kand performs transformation |k⟩ ↦ |gᵖ⋅k mod N ⟩ wherep is `power`, g is `generator` and N is `modulus`.

```qsharp
operation ApplyOrderFindingOracle (generator : Int, modulus : Int, power : Int, target : Qubit[]) : Unit is Adj + Ctl
```


## Input

### generator : [Int](xref:microsoft.quantum.lang-ref.int)

The unsigned integer multiplicative order ( period )of which is being estimated. Must be co-prime to `modulus`.


### modulus : [Int](xref:microsoft.quantum.lang-ref.int)

The modulus which defines the residue ring Z mod `modulus`in which the multiplicative order of `generator` is being estimated.


### power : [Int](xref:microsoft.quantum.lang-ref.int)

Power of `generator` by which `target` is multiplied.


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Register interpreted as LittleEndian which is multiplied bygiven power of the generator. The multiplication is performed modulo`modulus`.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)


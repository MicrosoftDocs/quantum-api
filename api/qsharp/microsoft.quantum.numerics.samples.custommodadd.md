---
uid: Microsoft.Quantum.Numerics.Samples.CustomModAdd
title: CustomModAdd operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Numerics.Samples
qsharp.name: CustomModAdd
qsharp.summary: >-
  Tests a modular addition similar to the one in Fig. 4
  of https://arxiv.org/pdf/quant-ph/9511018v1.pdf.
---

# CustomModAdd operation

Namespace: [Microsoft.Quantum.Numerics.Samples](xref:Microsoft.Quantum.Numerics.Samples)

Package: [CustomModAdd](https://nuget.org/packages/CustomModAdd)


Tests a modular addition similar to the one in Fig. 4of https://arxiv.org/pdf/quant-ph/9511018v1.pdf.

```qsharp
operation CustomModAdd (inputs1 : Int[], inputs2 : Int[], modulus : Int, numBits : Int) : Int[]
```


## Input

### inputs1 : [Int](xref:microsoft.quantum.lang-ref.int)[]

List of integers to use for the first number


### inputs2 : [Int](xref:microsoft.quantum.lang-ref.int)[]

List of integers to use for the second number


### modulus : [Int](xref:microsoft.quantum.lang-ref.int)

Modulus used when adding each pair of numbers


### numBits : [Int](xref:microsoft.quantum.lang-ref.int)

Number of bits to use to represent each number



## Output : [Int](xref:microsoft.quantum.lang-ref.int)[]


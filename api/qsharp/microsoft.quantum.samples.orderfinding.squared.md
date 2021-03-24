---
uid: Microsoft.Quantum.Samples.OrderFinding.Squared
title: Squared function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.OrderFinding
qsharp.name: Squared
qsharp.summary: >-
  Given a permutation π, this function returns the
  square of π, i.e., the permutation π².
---

# Squared function

Namespace: [Microsoft.Quantum.Samples.OrderFinding](xref:Microsoft.Quantum.Samples.OrderFinding)

Package: [OrderFinding](https://nuget.org/packages/OrderFinding)


Given a permutation π, this function returns thesquare of π, i.e., the permutation π².

```qsharp
function Squared (perm : Int[]) : Int[]
```


## Input

### perm : [Int](xref:microsoft.quantum.lang-ref.int)[]

A permutation with elements 0, ..., n - 1



## Output : [Int](xref:microsoft.quantum.lang-ref.int)[]

The square of the input permutation

## Example

```Q#Squared([1, 2, 3, 0]), // [2, 3, 0, 1]Squared([2, 3, 0, 1]), // [0, 1, 2, 3]```
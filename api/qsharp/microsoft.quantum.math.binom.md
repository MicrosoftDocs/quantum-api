---
uid: Microsoft.Quantum.Math.Binom
title: Binom function
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: Binom
qsharp.summary: Returns the binomial coefficient of two integers.
---

# Binom function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the binomial coefficient of two integers.

```qsharp
function Binom (n : Int, k : Int) : Int
```


## Description

Given two integers $n$ and $k$, returns the binomial coefficient$(n k)$, also known as $n$-choose-$k$.

## Input

### n : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The first of the two integers to compute the binomial coefficient of.


### k : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The second of the two integers to compute the binomial coefficient of.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The binomial coefficient $(n k)$.
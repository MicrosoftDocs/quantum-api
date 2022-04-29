---
uid: Microsoft.Quantum.Math.HalfIntegerBinom
title: HalfIntegerBinom function
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: HalfIntegerBinom
qsharp.summary: Returns a binomial coefficient of the form "½-choose-k."
---

# HalfIntegerBinom function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a binomial coefficient of the form "½-choose-k."

```qsharp
function HalfIntegerBinom (k : Int) : Double
```


## Description

Given an integer $k$, returns the binomial coefficient$(\frac{1}{2} k)$, also known as $\frac{1}{2}$-choose-$k$.

## Input

### k : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The integer to compute the half-integer binomial coefficient of.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The binomial coefficient $(\frac{1}{2} k)$.
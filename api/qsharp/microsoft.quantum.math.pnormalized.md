---
uid: Microsoft.Quantum.Math.PNormalized
title: PNormalized function
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: PNormalized
qsharp.summary: >-
  Normalizes a vector of real numbers according to the p-norm for a given
  p.
---

# PNormalized function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Normalizes a vector of real numbers according to the p-norm for a givenp.

```qsharp
function PNormalized (p : Double, array : Double[]) : Double[]
```


## Description

That is, given an array $x$ of type `Double[]`, this returns an array whereall elements are divided by the $p$-norm $\|x\|_p$.

## Input

### p : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The exponent $p$ in the $p$-norm.


### array : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]

The vector $x$ to be normalized.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]

The array $x$ normalized by the $p$-norm $\|x\|_p$.

## Remarks

This function defines a norm only when `p >= 1.0` or `Length(array)` iseither 0 or 1. In the more general case, this function fails thetriangle inequality.

## See Also

- [Microsoft.Quantum.Math.PNorm](xref:Microsoft.Quantum.Math.PNorm)
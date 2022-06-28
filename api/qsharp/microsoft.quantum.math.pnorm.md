---
uid: Microsoft.Quantum.Math.PNorm
title: PNorm function
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: PNorm
qsharp.summary: Returns the p-norm of a vector of real numbers.
---

# PNorm function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the p-norm of a vector of real numbers.

```qsharp
function PNorm (p : Double, array : Double[]) : Double
```


## Description

Given an array $x$, this returns the $p$-norm$\|x\|\_p= (\sum_{j}|x_j|^{p})^{1/p}$.

## Input

### p : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

A positive number representing the exponent $p$ in the $p$-norm.


### array : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]

The vector $x$ of real numbers whose $p$-norm is to be returned.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The $p$-norm $\|x\|_p$.

## Remarks

This function defines a norm only when `p >= 1.0` or `Length(array)` iseither 0 or 1. In the more general case, this function fails thetriangle inequality.

## See Also

- [Microsoft.Quantum.Math.PNormalized](xref:Microsoft.Quantum.Math.PNormalized)
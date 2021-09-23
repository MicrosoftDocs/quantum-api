---
uid: Microsoft.Quantum.Math.PNorm
title: PNorm function
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: PNorm
qsharp.summary: Returns the `L(p)` norm of a vector of `Double`s.
---

# PNorm function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the `L(p)` norm of a vector of `Double`s.

```qsharp
function PNorm (p : Double, array : Double[]) : Double
```


## Description

Given an array $x$ of type `Double[]`, this returns the $p$-norm$\|x\|\_p= (\sum_{j}|x_j|^{p})^{1/p}$.

## Input

### p : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The exponent $p$ in the $p$-norm.


### array : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]





## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The $p$-norm $\|x\|_p$.

## See Also

- [Microsoft.Quantum.Math.PNormalized](xref:Microsoft.Quantum.Math.PNormalized)
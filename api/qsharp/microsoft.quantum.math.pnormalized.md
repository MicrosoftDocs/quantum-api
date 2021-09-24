---
uid: Microsoft.Quantum.Math.PNormalized
title: PNormalized function
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: PNormalized
qsharp.summary: Normalizes a vector of `Double`s in the `L(p)` norm.
---

# PNormalized function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Normalizes a vector of `Double`s in the `L(p)` norm.

```qsharp
function PNormalized (p : Double, array : Double[]) : Double[]
```


## Description

That is, given an array $x$ of type `Double[]`, this returns an array whereall elements are divided by the $p$-norm $\|x\|_p$.

## Input

### p : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The exponent $p$ in the $p$-norm.


### array : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]





## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]

The array $x$ normalized by the $p$-norm $\|x\|_p$.

## See Also

- [Microsoft.Quantum.Math.PNorm](xref:Microsoft.Quantum.Math.PNorm)
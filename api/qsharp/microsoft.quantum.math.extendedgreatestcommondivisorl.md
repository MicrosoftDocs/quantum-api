---
uid: Microsoft.Quantum.Math.ExtendedGreatestCommonDivisorL
title: ExtendedGreatestCommonDivisorL function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: ExtendedGreatestCommonDivisorL
qsharp.summary: Returns the GCD of two integers, decomposed into a linear combination.
---

# ExtendedGreatestCommonDivisorL function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the GCD of two integers, decomposed into a linear combination.

```qsharp
function ExtendedGreatestCommonDivisorL (a : BigInt, b : BigInt) : (BigInt, BigInt)
```


## Description

Computes a tuple $(u,v)$ such that $u \cdot a + v \cdot b = \operatorname{GCD}(a, b)$,where $\operatorname{GCD}$ is $a$greatest common divisor of $a$ and $b$. The GCD is always positive.

## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

the first number of which extended greatest common divisor is being computed


### b : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

the second number of which extended greatest common divisor is being computed



## Output : ([BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals),[BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals))

Tuple $(u,v)$ with the property $u \cdot a + v \cdot b = \operatorname{GCD}(a, b)$.

## References

- This implementation is according to https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
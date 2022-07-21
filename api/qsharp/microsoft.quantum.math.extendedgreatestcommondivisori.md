---
uid: Microsoft.Quantum.Math.ExtendedGreatestCommonDivisorI
title: ExtendedGreatestCommonDivisorI function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: ExtendedGreatestCommonDivisorI
qsharp.summary: Returns the GCD of two integers, decomposed into a linear combination.
---

# ExtendedGreatestCommonDivisorI function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the GCD of two integers, decomposed into a linear combination.

```qsharp
function ExtendedGreatestCommonDivisorI (a : Int, b : Int) : (Int, Int)
```


## Description

Computes a tuple $(u,v)$ such that $u \cdot a + v \cdot b = \operatorname{GCD}(a, b)$,where $\operatorname{GCD}$ is $a$greatest common divisor of $a$ and $b$. The GCD is always positive.

## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

the first number of which extended greatest common divisor is being computed


### b : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

the second number of which extended greatest common divisor is being computed



## Output : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),[Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals))

Tuple $(u,v)$ with the property $u \cdot a + v \cdot b = \operatorname{GCD}(a, b)$.

## References

- This implementation is according to https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
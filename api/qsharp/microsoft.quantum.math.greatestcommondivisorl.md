---
uid: Microsoft.Quantum.Math.GreatestCommonDivisorL
title: GreatestCommonDivisorL function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: GreatestCommonDivisorL
qsharp.summary: Computes the greatest common divisor of two integers.
---

# GreatestCommonDivisorL function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Computes the greatest common divisor of two integers.

```qsharp
function GreatestCommonDivisorL (a : BigInt, b : BigInt) : BigInt
```


## Description

Computes the greatest common divisor of two integers $a$ and $b$.The GCD is always positive.

## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

the first number of which extended greatest common divisor is being computed


### b : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

the second number of which extended greatest common divisor is being computed



## Output : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

Greatest common divisor of $a$ and $b$
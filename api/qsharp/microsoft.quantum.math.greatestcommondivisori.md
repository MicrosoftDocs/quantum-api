---
uid: Microsoft.Quantum.Math.GreatestCommonDivisorI
title: GreatestCommonDivisorI function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: GreatestCommonDivisorI
qsharp.summary: Computes the greatest common divisor of two integers.
---

# GreatestCommonDivisorI function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Computes the greatest common divisor of two integers.

```qsharp
function GreatestCommonDivisorI (a : Int, b : Int) : Int
```


## Description

Computes the greatest common divisor of two integers $a$ and $b$.The GCD is always positive.

## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

the first number of which extended greatest common divisor is being computed


### b : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

the second number of which extended greatest common divisor is being computed



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Greatest common divisor of $a$ and $b$
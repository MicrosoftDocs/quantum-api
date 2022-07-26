---
uid: Microsoft.Quantum.Math.InverseModI
title: InverseModI function
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: InverseModI
qsharp.summary: Returns the multiplicative inverse of a modular integer.
---

# InverseModI function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the multiplicative inverse of a modular integer.

```qsharp
function InverseModI (a : Int, modulus : Int) : Int
```


## Description

Returns $b$ such that $a \cdot b = 1 (\operatorname{mod} \texttt{modulus})$.

## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number being inverted


### modulus : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The modulus according to which the numbers are inverted



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Integer $b$ such that $a \cdot b = 1 (\operatorname{mod} \texttt{modulus})$.
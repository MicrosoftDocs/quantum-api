---
uid: Microsoft.Quantum.Math.InverseModL
title: InverseModL function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: InverseModL
qsharp.summary: Returns $b$ such that $a \cdot b = 1 (\operatorname{mod} \texttt{modulus})$.
---

# InverseModL function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns $b$ such that $a \cdot b = 1 (\operatorname{mod} \texttt{modulus})$.

```qsharp
function InverseModL (a : BigInt, modulus : BigInt) : BigInt
```


## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The number being inverted


### modulus : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The modulus according to which the numbers are inverted



## Output : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

Integer $b$ such that $a \cdot b = 1 (\operatorname{mod} \texttt{modulus})$.
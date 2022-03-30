---
uid: Microsoft.Quantum.Math.IsCoprimeL
title: IsCoprimeL function
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: IsCoprimeL
qsharp.summary: Returns if two integers are co-prime.
---

# IsCoprimeL function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns if two integers are co-prime.

```qsharp
function IsCoprimeL (a : BigInt, b : BigInt) : Bool
```


## Description

Returns true if $a$ and $b$ are co-prime and false otherwise.

## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

the first number of which co-primality is being tested


### b : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

the second number of which co-primality is being tested



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

True, if $a$ and $b$ are co-prime (e.g. their greatest common divisor is 1 ),and false otherwise
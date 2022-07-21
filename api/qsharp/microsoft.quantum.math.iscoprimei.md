---
uid: Microsoft.Quantum.Math.IsCoprimeI
title: IsCoprimeI function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: IsCoprimeI
qsharp.summary: Returns if two integers are co-prime.
---

# IsCoprimeI function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns if two integers are co-prime.

```qsharp
function IsCoprimeI (a : Int, b : Int) : Bool
```


## Description

Returns true if $a$ and $b$ are co-prime and false otherwise.

## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

the first number of which co-primality is being tested


### b : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

the second number of which co-primality is being tested



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

True, if $a$ and $b$ are co-prime (e.g. their greatest common divisor is 1 ),and false otherwise
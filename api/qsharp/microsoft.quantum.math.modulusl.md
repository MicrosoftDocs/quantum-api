---
uid: Microsoft.Quantum.Math.ModulusL
title: ModulusL function
ms.date: 09/14/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: Computes the canonical residue of `value` modulo `modulus`.
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: ModulusL
qsharp.summary: Computes the canonical residue of `value` modulo `modulus`.
---

# ModulusL function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Computes the canonical residue of `value` modulo `modulus`.

```qsharp
function ModulusL (value : BigInt, modulus : BigInt) : BigInt
```


## Input

### value : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The value of which residue is computed


### modulus : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The modulus by which residues are take, must be positive



## Output : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

Integer $r$ between 0 and `modulus - 1` such that `value - r` is divisible by modulus

## Remarks

This function behaves different to how the operator `%` behaves in C# and Q# as in the resultis always a non-negative integer between 0 and `modulus - 1`, even if value is negative.
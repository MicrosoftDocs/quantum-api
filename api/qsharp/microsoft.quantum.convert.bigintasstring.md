---
uid: Microsoft.Quantum.Convert.BigIntAsString
title: BigIntAsString function
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: BigIntAsString
qsharp.summary: Converts a given integer number to an equivalent string representation.
---

# BigIntAsString function

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Converts a given integer number to an equivalent string representation.

```qsharp
function BigIntAsString (a : BigInt) : String
```


## Description

Returns a string given a BigInt.

## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The big integer to be represented as a string.



## Output : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

The value of `a` formatted as a string.

## Example

```qsharplet nAsString = BigIntAsString(12345678901234567890L);// Displays 12345678901234567890.Message(nAsString);```
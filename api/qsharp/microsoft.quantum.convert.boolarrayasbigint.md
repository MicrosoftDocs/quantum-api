---
uid: Microsoft.Quantum.Convert.BoolArrayAsBigInt
title: BoolArrayAsBigInt function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: BoolArrayAsBigInt
qsharp.summary: >-
  Converts a given array of Booleans to an equivalent big integer.
  The 0 element of the array is the least significant bit of the big integer.
---

# BoolArrayAsBigInt function

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Converts a given array of Booleans to an equivalent big integer.The 0 element of the array is the least significant bit of the big integer.

```qsharp
function BoolArrayAsBigInt (a : Bool[]) : BigInt
```


## Input

### a : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)[]





## Output : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)



## Example

```qsharplet bi1 = BoolArrayAsBigInt([true, false, true]);        // Padded to 10100000 -> 5let bi2 = BoolArrayAsBigInt([false, false, false, false, false, false, false, true]); // Not padded -> -128```

## Remarks

See [C# BigInteger constructor](https://docs.microsoft.com/dotnet/api/system.numerics.biginteger.-ctor?view=netframework-4.7.2#System_Numerics_BigInteger__ctor_System_Int64_) for more details.Note that the Boolean array is padded of the right with `false` values to a length that is a multiple of 8,and then treated as a little-endian notation of a positive or negative number following two's complement semantics.
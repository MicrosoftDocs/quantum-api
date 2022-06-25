---
uid: Microsoft.Quantum.Bitwise.RightShiftedL
title: RightShiftedL function
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Bitwise
qsharp.name: RightShiftedL
qsharp.summary: >-
  Shifts the bitwise representation of a number right by a given number of
  bits.
---

# RightShiftedL function

Namespace: [Microsoft.Quantum.Bitwise](xref:Microsoft.Quantum.Bitwise)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Shifts the bitwise representation of a number right by a given number ofbits.

```qsharp
function RightShiftedL (value : BigInt, amount : Int) : BigInt
```


## Input

### value : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The number whose bitwise representation is to be shifted to the right(less significant).


### amount : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of bits by which `value` is to be shifted to the right.



## Output : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The value of `value`, shifted right by `amount` bits.

## Remarks

The following are equivalent:```qsharplet c = a >>> b;let c = RightShiftedL(a, b);```
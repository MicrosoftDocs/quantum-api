---
uid: Microsoft.Quantum.Convert.FixedPointAsBoolArray
title: FixedPointAsBoolArray function
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: FixedPointAsBoolArray
qsharp.summary: Computes fixed-point approximation for a double and returns it as `Bool` array.
---

# FixedPointAsBoolArray function

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Computes fixed-point approximation for a double and returns it as `Bool` array.

```qsharp
function FixedPointAsBoolArray (integerBits : Int, fractionalBits : Int, value : Double) : Bool[]
```


## Input

### integerBits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Assumed number of integer bits (including the sign bit).


### fractionalBits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Assumed number of fractional bits.


### value : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Value to be approximated.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)[]



## Example

Note that the first element in the Boolean array is the least-significant bit.```qsharplet bits = FixedPointAsBoolArray(2, 2,  1.25); // bits = [true, false, true, false]let bits = FixedPointAsBoolArray(2, 2,  1.3);  // bits = [true, false, true, false], approximatedlet bits = FixedPointAsBoolArray(2, 2, -1.75); // bits = [true, false, false, true], two's complement```
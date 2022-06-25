---
uid: Microsoft.Quantum.Convert.BoolArrayAsFixedPoint
title: BoolArrayAsFixedPoint function
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: BoolArrayAsFixedPoint
qsharp.summary: Returns the double value of a fixed-point approximation from of a `Bool` array.
---

# BoolArrayAsFixedPoint function

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Returns the double value of a fixed-point approximation from of a `Bool` array.

```qsharp
function BoolArrayAsFixedPoint (integerBits : Int, bits : Bool[]) : Double
```


## Input

### integerBits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Assumed number of integer bits (including the sign bit).


### bits : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)[]

Bit-string representation of approximated number.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)



## Example

Note that the first element in the Boolean array is the least-significant bit.```qsharplet value = BoolArrayAsFixedPoint(2, [true, false, true, false]); // value =  1.25let value = BoolArrayAsFixedPoint(2, [true, false, false, true]); // value = -1.75```
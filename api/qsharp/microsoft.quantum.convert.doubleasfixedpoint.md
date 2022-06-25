---
uid: Microsoft.Quantum.Convert.DoubleAsFixedPoint
title: DoubleAsFixedPoint function
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: DoubleAsFixedPoint
qsharp.summary: Discretizes a double value as a fixed-point approximation and returns its value as a double.
---

# DoubleAsFixedPoint function

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Discretizes a double value as a fixed-point approximation and returns its value as a double.

```qsharp
function DoubleAsFixedPoint (integerBits : Int, fractionalBits : Int, value : Double) : Double
```


## Input

### integerBits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Assumed number of integer bits (including the sign bit).


### fractionalBits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Assumed number of fractional bits.


### value : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Value to be approximated.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)



## Example

```qsharplet value = DoubleAsFixedPoint(2, 2, 1.3); // value = 1.25let value = DoubleAsFixedPoint(2, 2, 0.8); // value = 0.75```
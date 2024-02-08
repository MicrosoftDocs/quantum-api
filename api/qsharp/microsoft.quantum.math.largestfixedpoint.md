---
uid: Microsoft.Quantum.Math.LargestFixedPoint
title: LargestFixedPoint function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: LargestFixedPoint
qsharp.summary: Returns the largest representable number for specific fixed point dimensions.
---

# LargestFixedPoint function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Returns the largest representable number for specific fixed point dimensions.

```qsharp
function LargestFixedPoint (integerBits : Int, fractionalBits : Int) : Double
```


## Input

### integerBits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Number of integer bits (including the sign bit).


### fractionalBits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Number of fractional bits.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)


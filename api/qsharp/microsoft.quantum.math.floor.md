---
uid: Microsoft.Quantum.Math.Floor
title: Floor function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: Floor
qsharp.summary: Returns the smallest integer greater than or equal to the specified number.
---

# Floor function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns the smallest integer greater than or equal to the specified number.

```qsharp
function Floor (value : Double) : Int
```


## Input

### value : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The value whose floor is to be returned.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The floor of the input.

## Example

```Message($"{Floor(3.1)}");   //  3Message($"{Floor(3.7)}");   //  3Message($"{Floor(-3.1)}");  // -4Message($"{Floor(-3.7)}");  // -4```
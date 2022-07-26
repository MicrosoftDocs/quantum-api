---
uid: Microsoft.Quantum.Math.AbsI
title: AbsI function
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: AbsI
qsharp.summary: Returns the absolute value of an integer.
---

# AbsI function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns the absolute value of an integer.

```qsharp
function AbsI (a : Int) : Int
```


## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number whose absolute value is to be returned.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The absolute value of `a`.

## Example

```qsharpMessage($"{AbsI(314)}");   // 314Message($"{AbsI(-271)}");  // 271```

## See Also

- [Microsoft.Quantum.Math.AbsD](xref:Microsoft.Quantum.Math.AbsD)
- [Microsoft.Quantum.Math.AbsL](xref:Microsoft.Quantum.Math.AbsL)
---
uid: Microsoft.Quantum.Math.AbsL
title: AbsL function
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: AbsL
qsharp.summary: Returns the absolute value of an integer.
---

# AbsL function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns the absolute value of an integer.

```qsharp
function AbsL (a : BigInt) : BigInt
```


## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The number whose absolute value is to be returned.



## Output : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The absolute value of `a`.

## Example

```qsharpMessage($"{AbsL(314L)}");   // 314LMessage($"{AbsL(-271L)}");  // 271L```

## See Also

- [Microsoft.Quantum.Math.AbsD](xref:Microsoft.Quantum.Math.AbsD)
- [Microsoft.Quantum.Math.AbsI](xref:Microsoft.Quantum.Math.AbsI)
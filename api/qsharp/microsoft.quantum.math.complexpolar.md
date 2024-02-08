---
uid: Microsoft.Quantum.Math.ComplexPolar
title: ComplexPolar user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: ComplexPolar
qsharp.summary: >-
  Represents a complex number in polar form.

  The polar representation of a complex number is $c=r e^{i t}$.
---

# ComplexPolar user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a complex number in polar form.The polar representation of a complex number is $c=r e^{i t}$.

```qsharp

newtype ComplexPolar = (Magnitude : Double, Argument : Double);
```



## Named Items

### Magnitude : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The absolute value $r \ge 0$ of $c$.
### Argument : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The phase $t \in \mathbb R$ of $c$.